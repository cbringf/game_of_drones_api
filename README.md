# game-of-drones-api

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

This framework works on top of Express.

In the branch v_1.0 the API works without realtime behaviour, acts basically like a database and the
game's logic resides on the client side.

In the branch master, the API works with realtime, and the server contains basically all the game's logic.

This API works with NeDB which is a file database for development purposes. Using Feathers we can easily switch between database providers. 

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/game-of-drones-api; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
