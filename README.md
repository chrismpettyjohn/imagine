### Prerequisites
* Linux or Mac
    * If you're on Windows, please use [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install)
* [NodeJS LTS](https://nodejs.org/en/download/)

### Running Locally
1. Install Yarn Globally
    * `npm i yarn -g`
2. Install Dependencies
    * `yarn`
3. Configure API Settings
    * Copy `.env.example` in `apps/imagine-api` to a new file `.env`
    * Update `.env` with your settings
4. Prepare your database
   * Create a database based from the latest MS4 SQL
   * Run [imagine.sql](imagine.sql)
5. Run the API
    * `cd apps/imagine-api`
    * `yarn start`
6. Run the Web
    * `cd apps/kubbo-web`
    * `yarn start`
