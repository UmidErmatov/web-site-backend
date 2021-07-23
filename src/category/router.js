const express = require('express');
const router = express.Router();
const ValidateScheme = require('./validateScheme');
const validator = require('express-validation');
const authenticate = require('../utils/authenticate')
const catesConttroller = require("./controller");
 
router.get('/categories/', catesConttroller.findAll);
router.get('/categories/:id', catesConttroller.findById);

router.use(authenticate);
// router.use(permit('admin'));

router.post('/categories/', validator(ValidateScheme.addNew), catesConttroller.create);
router.put('/categories/:id', validator(ValidateScheme.updateOne), catesConttroller.update);
router.delete('/categories/:id', validator(ValidateScheme.deleteOne), catesConttroller.delete);

module.exports = router;