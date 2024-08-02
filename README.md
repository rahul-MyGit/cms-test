
# CMS

It's a basic cms application in Node.js and postgres.

## Diagram
![Screenshot 2024-08-02 201454](https://github.com/user-attachments/assets/afde4f60-3287-4f54-8d65-bad1235c7a9c)

## Functionality and Features
This setup provides a complete environment for the CMS, including:

- A PostgreSQL database
- A Node.js application with Express
- Prisma ORM for database operations
- Docker and Docker Compose for easy deployment
- Database migrations and seeding

## Installation

- Start project using docker

```bash
  docker-compose up --build
```

- Start project without docker
- 
  - Create a top level .env file and add:
```bash

DATABASE_URL="your_databse_url"
PORT=3000
```
-
  - Then in terminal run below cmd:
```bash
npm i
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm start
```

### Application will run on :
```bash
http://localhost:3000/
```
