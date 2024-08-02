
# CMS

It's a basic cms application in Node.js and postgres.

## Diagram

## Installation

- Start project using docker

```bash
  docker-compose up --build
```

- Start project without docker

```bash
- create a top level .env file and add:
DATABASE_URL="your_databse_url"
PORT=3000
```
```bash
npm i
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm start
```


## Functionality and Features
This setup provides a complete environment for the CMS, including:

- A PostgreSQL database
- A Node.js application with Express
- Prisma ORM for database operations
- Docker and Docker Compose for easy deployment
- Database migrations and seeding