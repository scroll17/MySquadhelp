const express = require('express');
const userController = require('../controllers/userController');

//const validation = require("../middlewares/validationDatabase");

const passwordToHash = require("../middlewares/passwordToHash");
const createAndSaveToken = require('../middlewares/createAndSaveToken');
const accsessValidationToken = require("../middlewares/accsessValidationToken");
const updateRefreshToken = require('../middlewares/updateRefreshToken');
const refreshValidationToken = require("../middlewares/refreshValidationToken");

const deleteTokenPair = require('../middlewares/deleteTokenPair');

//const defineTheRole = require("../middlewares/defineTheRole");





const router = express.Router();


//router.use(defineTheRole.func);


// ---------------- User ---------------
router.post('/user', passwordToHash, userController.createUser, createAndSaveToken );
router.get('/user', accsessValidationToken,  userController.accessUser);
router.post('/login', userController.loginUser, refreshValidationToken, createAndSaveToken );
router.post('/refresh', userController.refreshUser, updateRefreshToken);
router.delete('/logout',  deleteTokenPair);

// ---------------- Admin ---------------

router.put('/user/:id', userController.updateUser);
router.get('/allUser', userController.getAllUsers);


module.exports = router;
