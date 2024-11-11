# Changelog

All notable changes to this project will be documented in this file.

## Security Features
- [Backend] After entering a wrong password for five times the user gets locked out for 15 minutes.
- [Backend] Increased minimum password complexity: min. one lowercase character, min. uppercase character, min. one special character, min. one digits and min. password length of eight.
- [Architecture / Backend] Changed the JWT_SECURITY_KEY to something more secure.
- [Architecture / Database] Changed username and password for MongoDB.
- [Security Container] Added rate limiting with nginx for backend and frontend.
- [Security Container] In the security container, an nginx proxy is added to proxy to backend and frontend.
- [Architecture] Backend, Frontend and Database containers is not anymore accessible from outside the docker network.
- [Architecture] An 4th container for additional security feature is added.

## [Unreleased]

### Frontend

- [Changed] Split the original source code into [fronted](frontend) and [backend](backend).
- [Changed] Updated `react-router-dom` and changed `PublicRoute` and `PrivateRoute` component accordingly.
- [Fixed] Fixed issue with main content hidden behind navbar. 

### Backend

- [Changed] Split the original source code into [fronted](frontend) and [backend](backend).
