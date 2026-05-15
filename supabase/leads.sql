-- Rodar no Supabase SQL Editor: https://supabase.com/dashboard/project/<seu-projeto>/sql
-- Uma vez só, antes de subir o site

create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  company     text,
  phone       text,
  message     text
);

-- Tabelas já existentes (criadas antes da coluna phone): execute uma vez no SQL Editor
alter table leads add column if not exists phone text;

-- Permite inserção pública (anon key) mas bloqueia leitura sem service_role
alter table leads enable row level security;

create policy "insert_public"
  on leads for insert
  to anon
  with check (true);

-- Opcional: índice para busca por e-mail
create index if not exists leads_email_idx on leads (email);
