## Getting Started with Reactjs and Redux ##

This application is a very simple task manager to demonstrate how you can use react to build reusable UI components together with Redux for state management.

The sample app allows you to add new task and delete existing ones, nothing fancy.

### Get running locally

Install the dependencies by running

```
    yarn install
```

Start the webpack dev server app by executing

```
    yarn start
```

You shound now be able to view the app by going to http://localhost:8080 in your browser.

### Alternatively, you can spin-up a docker container in your local environment

The container is orchestrated using [docker-compose](https://docs.docker.com/compose)

```
    docker-compose up
```

Access the apps by going to

```
    docker-machine ip
    # Then going to: http://[docker-machine ip]:8080
```
