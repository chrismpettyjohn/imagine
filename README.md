<img src="https://i.imgur.com/GDSz1PG.png" />

## 1. Community
Join our Discord for updates, support and more!
https://discord.gg/rkxzpw9h5F

## 2. Themes
* Boon Theme
  * https://www.youtube.com/watch?v=yUczaZVGSmQ
  * Designed by boon.pw
* Cosmic V2 Theme
  * https://www.youtube.com/watch?v=qVp6vYGmZDg
  * Designed by Raizer
* Modern Flat Theme
  * https://www.youtube.com/watch?v=wjEhNXHAGVg
  * Designed by Sonay

## 3. Getting Started

### 3A. Prerequisites
* Unix (or Mac)
    * If you're on Windows, please use [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install)
* [git-cli](https://git-scm.com/downloads)
* [NodeJS LTS](https://nodejs.org/en/download/)

### 3B. Instructions
1. Install Yarn Globally
    * `npm i yarn -g`
2. Clone the Git Repo
    *  `git clone https://github.com/chrismpettyjohn/imagine-cms.git`
3. Install Dependencies
    * `yarn`
4. Configure API Settings
    * cp demo/.env.example demo/.env
     * Edit `apps/api/.env` with your values as follows
     ```
       # HTTP
       PORT=3000
       
       # Database
       DATABASE_HOST=localhost # IP Address of Database
       DATABASE_USER=root # Database username
       DATABASE_PASS=password # Database Password
       DATABASE_NAME=plus-community # Database Name
       
       # Authentication
       JWT_SECRET=sfff # Randomly generated key, used for sessions, changing will log everyone out, do not share!
       JWT_EXPIRATION_IN_MS=2400000000 # How long a session lasts before logging out
       
       # GraphQL
       GRAPHQL_PLAYGROUND=false # Enables GraphQL Playground for viewing API docs http://localhost:3000/graphql
       ```
5. Prepare your database
   * Create a database based from the latest Plus++ sql
   * Run [database-changes.sql](database-changes.sql)
6. Run the API
    * `cd apps/api`
    * `yarn start`
 6. Run your preferred theme
    * `cd apps/boon-web`
    * `yarn start`
