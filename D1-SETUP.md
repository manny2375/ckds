# Cloudflare D1 Database Setup

This project uses Cloudflare D1 for database storage. Follow these steps to set up your D1 database:

## 1. Create the D1 Database

Run this command to create your D1 database:

```bash
npx wrangler d1 create ckds-database
```

This will output something like:

```
✅ Successfully created DB 'ckds-database'!

[[d1_databases]]
binding = "DB"
database_name = "ckds-database"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

## 2. Update wrangler.toml

Copy the `database_id` from the output above and replace the `placeholder-database-id` in `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "ckds-database"
database_id = "your-actual-database-id-here"
```

## 3. Run the Migration

Apply the database schema by running:

```bash
npx wrangler d1 execute ckds-database --file=./migrations/0001_create_newsletter_subscriptions.sql
```

## 4. Bind D1 to Your Cloudflare Pages Project

In your Cloudflare Pages dashboard:

1. Go to your project settings
2. Navigate to **Settings** → **Functions** → **D1 database bindings**
3. Add a new binding:
   - Variable name: `DB`
   - D1 database: Select `ckds-database`
4. Save the binding

## 5. Deploy

Your site will now be able to use D1 for storing newsletter subscriptions!

## Local Development

For local development with D1:

```bash
npx wrangler pages dev dist --d1 DB=ckds-database
```

## Database Schema

The `newsletter_subscriptions` table has the following structure:

- `id` (TEXT): UUID primary key
- `email` (TEXT): Unique email address
- `created_at` (INTEGER): Unix timestamp
- `subscribed` (INTEGER): 1 for subscribed, 0 for unsubscribed
