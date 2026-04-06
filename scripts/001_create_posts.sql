-- Create blog posts table
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  featured_image text,
  category text not null default 'News',
  author text not null,
  published_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  user_id uuid not null references auth.users(id) on delete cascade
);

-- Enable Row Level Security
alter table public.posts enable row level security;

-- RLS Policies
-- Anyone can view published posts
create policy "posts_select_published" on public.posts for select using (
  published_at <= now()
);

-- Only the author can insert posts
create policy "posts_insert_own" on public.posts for insert with check (
  auth.uid() = user_id
);

-- Only the author can update their posts
create policy "posts_update_own" on public.posts for update using (
  auth.uid() = user_id
);

-- Only the author can delete their posts
create policy "posts_delete_own" on public.posts for delete using (
  auth.uid() = user_id
);

-- Create an index on slug for faster lookups
create index if not exists posts_slug_idx on public.posts (slug);

-- Create an index on published_at for sorting
create index if not exists posts_published_at_idx on public.posts (published_at desc);
