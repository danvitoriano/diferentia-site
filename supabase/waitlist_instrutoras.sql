-- Rodar no Supabase SQL Editor: https://supabase.com/dashboard/project/<seu-projeto>/sql
-- Uma vez só, antes de subir a campanha de instrutoras

create table if not exists waitlist_instrutoras (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  email         text not null,
  contact       text not null,
  profile       text not null,
  motivation    text
);

alter table waitlist_instrutoras enable row level security;

create policy "insert_public"
  on waitlist_instrutoras for insert
  to anon
  with check (true);

create index if not exists waitlist_instrutoras_email_idx on waitlist_instrutoras (email);
