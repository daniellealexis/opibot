# opibot
Slackbot for getting suggestions from your team

## Getting started with local development

Clone the repo

Install mySQL if not already installed
`mysqladmin -u root password "password"` Fill in with values you want
Install DB software (dolphins for windows, pro sequel for mac)

Copy and rename dist.env -> .env

npm install

Connect to database in DB software.

knex migrate:latest
