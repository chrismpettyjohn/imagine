# Imagine

Imagine is a comprehensive CMS and admin panel for habbo retros.

# Developers

[LeChris](https://github.com/habbo-hotel)

# Local Setup

Requirements: Node.js 16+, pnpm and a MySQL/MariaDB database.

1. Clone the repository and install dependencies:

   ```sh
   git clone git@github.com:habbo-hotel/imagine.git
   cd imagine
   pnpm install
   ```

2. Import `imagine.sql` into your database.

3. Copy the example environment files and fill in your values:

   ```sh
   cp apps/imagine-api/.env.example apps/imagine-api/.env
   cp apps/imagine-web/.env.example apps/imagine-web/.env
   cp apps/cerberus-web/.env.example apps/cerberus-web/.env
   ```

4. Build the shared libraries:

   ```sh
   pnpm run build
   ```

5. Start the API, CMS and admin panel with pm2:

   ```sh
   pnpm run dev:start
   ```

   Stop everything with `pnpm run dev:stop`.
