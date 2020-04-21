const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

function myMiddleware(req, res, next) {
    console.log('index.js router middleware');

    next();
}

router.use(myMiddleware);

router.get('/', PagesController.home);

router.post('/applications',
    ApplicationsController.normalizeData,
    ApplicationsController.store);

router.get('/infopage', (req, res) => {
    res.render('info');
});

module.exports = router;