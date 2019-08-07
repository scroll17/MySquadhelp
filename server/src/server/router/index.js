const express = require('express');

const userController = require('../controllers/userController');
const contestController = require('../controllers/contestController');



const passwordToHash = require("../middlewares/passwordToHash");
const createAndSaveToken = require('../middlewares/createAndSaveToken');
const accsessValidationToken = require("../middlewares/accsessValidationToken");
const updateRefreshToken = require('../middlewares/updateRefreshToken');
const refreshValidationToken = require("../middlewares/refreshValidationToken");

const deleteTokenPair = require('../middlewares/deleteTokenPair');
const defineTheRole = require("../middlewares/defineTheRole");


const router = express.Router();


// ---------------- User ---------------
router.post('/user', passwordToHash, userController.createUser, createAndSaveToken );
router.get('/user', accsessValidationToken,  userController.accessUser);

router.post('/login', userController.loginUser, refreshValidationToken, createAndSaveToken );
router.post('/refresh', userController.refreshUser, updateRefreshToken);
router.delete('/logout',  deleteTokenPair);


// ---------------- Admin ---------------
router.put('/user/:id', defineTheRole("/user/:id"),  userController.updateUsersById);
router.get('/AllUser', defineTheRole("/AllUser"),  userController.getAllUsers);


// ---------------- Contest ---------------
router.post('/contest', contestController.createContest );



module.exports = router;
