const express = require('express');
const router = express.Router();
const imageCont = require('../view');
const uploadCont = require('./controller');
const upload = require('../middleware/upload');

const routes = (app)=>{
    router.get('/', imageCont.getView);
    router.post('/upload', upload.single('file'), uploadCont.uploadFiles);
    return app.use('/', router)
}

module.exports = routes;