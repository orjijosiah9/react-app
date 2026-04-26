create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text unique not null,
  display_name text not null,
  class_level text,
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.question_pools (
  pool_key text primary key check (pool_key in ('junior', 'senior')),
  title text not null,
  duration_minutes integer not null default 60,
  questions jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  exam_title text not null,
  pool_key text not null check (pool_key in ('junior', 'senior')),
  score integer not null,
  correct integer not null,
  attempted integer not null,
  flagged integer not null default 0,
  total integer not null,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name, class_level, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data ->> 'class_level',
    'student'
  )
  on conflict (id) do update
  set
    email = excluded.email,
    display_name = excluded.display_name,
    class_level = excluded.class_level;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.question_pools enable row level security;
alter table public.scores enable row level security;

drop policy if exists "profiles_self_or_admin_select" on public.profiles;
create policy "profiles_self_or_admin_select"
on public.profiles
for select
to authenticated
using (
  auth.uid() = id
  or exists (
    select 1
    from public.profiles as admin_profile
    where admin_profile.id = auth.uid()
      and admin_profile.role = 'admin'
  )
);

drop policy if exists "profiles_self_update" on public.profiles;
create policy "profiles_self_update"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "profiles_admin_delete" on public.profiles;
create policy "profiles_admin_delete"
on public.profiles
for delete
to authenticated
using (
  exists (
    select 1
    from public.profiles as admin_profile
    where admin_profile.id = auth.uid()
      and admin_profile.role = 'admin'
  )
);

drop policy if exists "scores_self_insert" on public.scores;
create policy "scores_self_insert"
on public.scores
for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "scores_self_or_admin_select" on public.scores;
create policy "scores_self_or_admin_select"
on public.scores
for select
to authenticated
using (
  auth.uid() = user_id
  or exists (
    select 1
    from public.profiles as admin_profile
    where admin_profile.id = auth.uid()
      and admin_profile.role = 'admin'
  )
);

drop policy if exists "question_pools_authenticated_select" on public.question_pools;
create policy "question_pools_authenticated_select"
on public.question_pools
for select
to authenticated
using (true);

drop policy if exists "question_pools_admin_upsert" on public.question_pools;
create policy "question_pools_admin_upsert"
on public.question_pools
for all
to authenticated
using (
  exists (
    select 1
    from public.profiles as admin_profile
    where admin_profile.id = auth.uid()
      and admin_profile.role = 'admin'
  )
)
with check (
  exists (
    select 1
    from public.profiles as admin_profile
    where admin_profile.id = auth.uid()
      and admin_profile.role = 'admin'
  )
);

insert into public.question_pools (pool_key, title, duration_minutes, questions)
values
  ('junior', 'JSS Mathematics Mock', 60, '[]'::jsonb),
  ('senior', 'SS Mathematics Mock', 60, '[]'::jsonb)
on conflict (pool_key) do nothing;

-- After creating your admin user in Supabase Authentication, promote it with:
-- update public.profiles
-- set role = 'admin', class_level = 'Administration'
-- where email = 'your-admin-email@example.com';
