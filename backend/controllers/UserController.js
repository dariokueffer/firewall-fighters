import jwt from 'jsonwebtoken';
import db from '../models';
import UserService from '../services/UserService';
import authJwt from '../middleware/authJwt';

const userService = new UserService(db.User, db.RefreshToken, db.Role, db.Calendar, db.Event);

class UserController {
  constructor(service) {
    this.service = service;
  }

  // create user, assign roles
  register = async (req, res, next) => {
    try {
      const user = await this.service.create(req.body);

      const roleNames = req.body?.roles ?? ['user'];

      await this.service.assignRoles(user, roleNames);

      return next();
    } catch (e) {
      return next(e);
    }
  };

  login = async (req, res, next) => {
    try {
      const loginResponse = await this.service.login(req.body.username, req.body.password);

      if (!loginResponse.accessToken) {
        return res.status(403).send({ message: 'No token found!', errorCode: 'user' });
      }

      // Decode token and lookup full user doc
      jwt.verify(loginResponse.accessToken, process.env.JWT_SECRET_KEY, async (e, decoded) => {
        if (e) {
          return authJwt.catchTokenError(e, res);
        }

        const userResponse = await this.service.getOne(decoded.id);

        const response = {
          ...loginResponse,
          ...userResponse
        };

        return res.status(200).send(response);
      });
    } catch (e) {
      return next(e);
    }
  };

  refreshToken = async (req, res, next) => {
    const { refreshToken: requestToken } = req.body;

    if (!requestToken) {
      // Request token is missing
      return res.redirect('/login');
    }

    try {
      const response = await this.service.refreshToken(requestToken);

      return res.status(response.statusCode).send(response.data);
    } catch (e) {
      return next(e);
    }
  };

  update = async (req, res, next) => {
    try {
      const response = await this.service.update(req.auth.user, req.body);

      return res.status(response.statusCode).send(response.data);
    } catch (e) {
      return next(e);
    }
  };

  getUsers = async (req, res, next) => {
    try {
      const response = await this.service.getAllUsernames(req.params.userId); // Call the service method
      return res.status(200).send(response.data); 
    } catch (e) {
      return next(e);
    }
  };
}

export default new UserController(userService);
