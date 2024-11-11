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

## Installation

To build and install run the following commands:

```
cd backend
docker-composer build
docker-compose up
```

## Backend Development 

```
docker-compose build
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

````
cd backend
npm run dev
```


## Security Features

// TBD
## Acknowledgement

As a starting point for this challenge task we used [Joey Kim](http://www.josephikim.com)'s [React Calendar](https://github.com/josephikim/react-calendar).

