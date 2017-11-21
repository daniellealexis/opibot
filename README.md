# opibot
Slackbot for getting suggestions from your team

## Getting started with local development

1. Clone the repo

2. Install Node if not already installed. Version >= 7

3. Install mySQL if not already installed.

4. Update password on your local database: `mysqladmin -u root password "password"`. Fill in with values you want.

5. Install DB management software if you don't have it already. (We recommend [dolphin workbench for windows](https://dev.mysql.com/downloads/workbench/) or [Sequel Pro pancakes for mac](https://www.sequelpro.com/))

6. Environment variables
  * Copy and rename `dist.env` -> `.env`.
  * Get values from a teammate.

7. Install packages
  * Install the npm modules: `npm install`;
  * Install knex globally: `npm install knex -g`;

8. Connect to database in DB software. Reference `knexfile` for values. Don't leave out the database name. Default port is 3306.

9. Migrate your new database: `knex migrate:latest`
