# Fastify boilerplate

This project was bootstrapped with Fastify-CLI.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

Run the test cases.

## Configuration

Configure `config.dev.js` in order to override default env configuration variables. You can also specify a `.env` file that will load environment variables at startup. See `config.js` for all available environment variables.

## Customizable plugins

- `/plugins/auth`: handles authentication/authorization
- `/routes/...`: each folder creates a prefix. Put here the endpoints logic.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).

Other pages:

- https://www.npmjs.com/package/dotenv
- https://github.com/fastify/fastify-postgres
- https://github.com/fastify/fastify-sensible
- https://www.npmjs.com/package/@fastify/jwt
- https://www.npmjs.com/package/@fastify/autoload
- https://github.com/fastify/fluent-json-schema#readme
- https://www.npmjs.com/package/fastify-mailer
