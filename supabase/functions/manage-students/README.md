Required secrets for deployment:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Deploy with Supabase CLI:

```bash
supabase functions deploy manage-students --no-verify-jwt
```

Then set the secrets:

```bash
supabase secrets set SUPABASE_URL=... SUPABASE_ANON_KEY=... SUPABASE_SERVICE_ROLE_KEY=...
```

This function expects an authenticated admin user and supports:

- `action: "create"` with `payload`
- `action: "delete"` with `email`
