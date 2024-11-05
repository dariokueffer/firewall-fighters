# Changelog

All notable changes to this project will be documented in this file.

## [Security Features]

- [Architecture] In the security container, an nginx proxy is added to proxy to backend and frontend.
- [Architecture] Backend, Frontend and Database containers is not anymore accessible from outside the docker network.
- [Architecture] An 4th container for additional security feature is added.

## [Unreleased]

### Frontend

- [Changed] Split the original source code into [fronted](frontend) and [backend](backend).
- [Changed] Updated `react-router-dom` and changed `PublicRoute` and `PrivateRoute` component accordingly.
- [Fixed] Fixed issue with main content hidden behind navbar. 

### Backend

- [Changed] Split the original source code into [fronted](frontend) and [backend](backend).
