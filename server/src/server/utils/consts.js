const PORT = process.env.PORT || 3000;
const SALT_RONDS = 8;

const ACSSES_SECRET = "Keep it simple, stupid";
const REFRESH_SECRET = "xzzzzzzzzz";

const EXPIRES_IN_ACSSES = '30min'; //TODO
const EXPIRES_IN_REFRESH = '15d';

const ROLE = ['admin','buyer','creative'];

module.exports = {
    PORT,
    SALT_RONDS,
    ACSSES_SECRET,
    REFRESH_SECRET,
    EXPIRES_IN_ACSSES,
    EXPIRES_IN_REFRESH,
    ROLE
};
