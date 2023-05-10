# FANZ Backend Challenge

### Description

The project has different endpoints to obtain event information on the blockchain and addresses data.

### Technologies and Structures

# Backend

-NodeJS, Express, Web3, GraphQL and Axios were used for the creation of the backend.

-Supertest and Jest were used for testing.

-We have services for the calls to the API´s and queries linked to them, which are executed in the controller together with the business logic.

## Available routes:

# EVENTS

| method | endpoint                  | description                                                | headers |
| :----- | :------------------------ | :--------------------------------------------------------- | :------ |
| GET    | /event-attendees/:eventId | List a specific event with his ateendes and tickets owners |         |
| GET    | /event-attendees/         | List all the events id                                     |         |

# ADDRESS

| method | endpoint          | description                                                              | headers |
| :----- | :---------------- | :----------------------------------------------------------------------- | :------ |
| GET    | /address/:address | Returns the information (ENS, LENS and MATIC amount) of a wallet address |         |

### Getting started

1. Clone the repository by running into your terminal

```bash
$ git clone [URL]
```

# Backend

2. Change **_.env.sample_** to **_.env_**
3. Run `npm install` in your terminal
4. Run `npm start` to start the server and watch changes

# Testing

5. Run `npm run test` to test the endpoints

Have fun :)
