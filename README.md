# CastleBam

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

For development we use docker-compose to run our next app and a local mongodb instance at the same time

## Running the dev environment

To run the dev environment just build and run the containers

```bash
docker-compose up -d
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running prod

First, rename `.env.example` -> `.env.local`:

```bash
mv .env.example .env.local
```

Then, populate the environment variables in `.env.local` as needed.

Finally, you can build the next app and deploy to wherever the prod environment will be

```bash
npm run build
```
