const NotFound = require("./NotFoundError");
const ForbiddenError = require("./ForbiddenError");
const GoneError = require("./GoneError");
const InvalidCredentials = require("./InvalidCredentials");

const AuthenticationTimeout = require("./AuthenticationTimeout");

module.exports = {
    NotFound,
    ForbiddenError,
    GoneError,
    InvalidCredentials,
    AuthenticationTimeout
};
