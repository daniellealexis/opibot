# opibot
Slackbot for getting suggestions from your team

## Getting started with local development

Clone the repo

Install Node if not already installed. Version >= 7

Install mySQL if not already installed.

Update password on your local database: `mysqladmin -u root password "password"`. Fill in with values you want.

Install DB management software if you don't have it already. (We recommend [dolphin workbench for windows](https://dev.mysql.com/downloads/workbench/) or [Sequel Pro pancakes for mac](https://www.sequelpro.com/))

Copy and rename `dist.env` -> `.env`. Get values from a teammate.

Install the npm modules: `npm install`;
Install knex globally: `npm install knex -g`;

Connect to database in DB software. Reference `knexfile` for values. Don't leave out the database name. Default port is 3306.

Migrate your new database: `knex migrate:latest`
