import db from '../models';

import { BadRequestError } from '../utils/userFacingErrors';

const checkDuplicateUsername = async (req, res, next) => {
  try {
    await db.User.findByUsername(req.body.username).then((user) => {
      if (user) {
        throw new BadRequestError('Username is already in use', { errorCode: 'username' });
      }
    });

    return next();
  } catch (e) {
    return next(e);
  }
};

const checkRolesExist = (req, res, next) => {
  // Attaching roles to registration request is optional
  if (!req.body.roles || req.body.roles?.length < 1) return next();

  // Check attached roles
  for (let i = 0; i < req.body.roles.length; i++) {
    if (!roles.includes(req.body.roles[i])) {
      throw new BadRequestError(`Role ${req.body.roles[i]} does not exist!`, { errorCode: 'role' });
    }
  }

  return next();
};

const checkPasswordComplexEnough = (req, res, next) => {
  const password = req.body.password;
  const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{8,})');

  if (!passwordRegex.test(password)) {
    throw new BadRequestError('Password must contain at least a lowercase character, an uppercase character, a digit, a special character and must be at least eight character long.', { errorCode: 'password' });
  }

  return next();
}

const checkUsernameLongEnough = (req, res, next) => {
  const username = req.body.username;

  if (username.length < 4) {
    throw new BadRequestError('Username is too short', { errorCode: 'username' });
  }

  return next();
}

const verifyRegistration = {
  checkDuplicateUsername,
  checkRolesExist,
  checkPasswordComplexEnough,
  checkUsernameLongEnough
};

export default verifyRegistration;
