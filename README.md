# Firewall Fighters

## Introduction

To start the application with all containers run the following:

```
docker-composer build
docker-compose up -d
```

If changes were made, it might be important to run the following the make sure changes take effect:

```
docker-compose down -v
docker-composer build
docker-compose up -d
```

## Development

To develop in the backend, some parts might need adjustment, specially in the `backend/.env.development` file and also the mongodb ports should be exposed, such that running `npm run dev` within the backend folder can access the mongodb.

## Installtion

To build and install run the following commands:

```
cd backend
docker-composer build
docker-compose up
```

## Backend Development 

```
npm install
npm run dev
```


## Security Features

// TBD
## Acknowledgement

As a starting point for this challenge task we used [Joey Kim](http://www.josephikim.com)'s [React Calendar](https://github.com/josephikim/react-calendar).

