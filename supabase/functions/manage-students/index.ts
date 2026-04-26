import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      throw new Error("Supabase environment variables are missing.");
    }

    const authHeader = request.headers.get("Authorization") ?? "";

    const authClient = createClient(supabaseUrl, anonKey, {
      global: {
        headers: { Authorization: authHeader },
      },
    });

    const {
      data: { user },
      error: authError,
    } = await authClient.auth.getUser();

    if (authError || !user) {
      return jsonResponse({ error: "Unauthorized." }, 401);
    }

    const serviceClient = createClient(supabaseUrl, serviceRoleKey);

    const { data: adminProfile, error: profileError } = await serviceClient
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError || adminProfile?.role !== "admin") {
      return jsonResponse({ error: "Admin access required." }, 403);
    }

    const body = await request.json();
    const action = body?.action;

    if (action === "create") {
      const payload = body?.payload || {};
      const email = String(payload.email || "").trim().toLowerCase();
      const password = String(payload.password || "");
      const displayName = String(payload.displayName || "").trim();
      const classLevel = String(payload.group || "").trim();

      if (!email || !password || !displayName) {
        return jsonResponse({ error: "Name, email, and password are required." }, 400);
      }

      const { data: created, error: createError } = await serviceClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: {
          display_name: displayName,
          class_level: classLevel,
        },
      });

      if (createError) {
        return jsonResponse({ error: createError.message }, 400);
      }

      return jsonResponse({
        message: "Student account created successfully.",
        userId: created.user?.id ?? null,
      });
    }

    if (action === "delete") {
      const email = String(body?.email || "").trim().toLowerCase();

      if (!email) {
        return jsonResponse({ error: "Student email is required." }, 400);
      }

      const { data: targetProfile, error: targetError } = await serviceClient
        .from("profiles")
        .select("id")
        .eq("email", email)
        .eq("role", "student")
        .maybeSingle();

      if (targetError) {
        return jsonResponse({ error: targetError.message }, 400);
      }

      if (!targetProfile?.id) {
        return jsonResponse({ error: "Student account not found." }, 404);
      }

      const { error: deleteError } = await serviceClient.auth.admin.deleteUser(targetProfile.id);

      if (deleteError) {
        return jsonResponse({ error: deleteError.message }, 400);
      }

      return jsonResponse({
        message: "Student account removed successfully.",
      });
    }

    return jsonResponse({ error: "Unsupported action." }, 400);
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Unexpected error." }, 500);
  }
});

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}
