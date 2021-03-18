# simple-app-string

## Install the Heroku CLI

Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

```sh
heroku login
```

## Clone the repository

Use Git to clone simple-app-string's source code to your local machine.

```sh
heroku git:clone -a simple-app-string
cd simple-app-string
```

## Deploy your changes

Make some changes to the code you just cloned and deploy them to Heroku using Git.

```sh
git add .
git commit -am "make it better"
git push heroku master
```
