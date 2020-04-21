const express = require('express');
const router = express.Router();//przypisanie routera z expressa do stałej o tej samej nazwie

const PagesController = require('../controllers/PagesController');
const ApplicationController = require('../controllers/PagesController');

//dzięki temu, że eksportowaliśmy akcję home możemy ją teraz przypisaćdo endpointu

router.get('/', PagesController.home);   //na wysłanie zapytania get na podany adres naszej aplikacji będzie wykonany dany callback;

//nasz formularz wysyłał zapytanie POST na adres /applications
router.post('/applications', ApplicationController.store);


router.get('/infopage', (req, res) => {
    res.render('info');
});



module.exports = router; //teraz przypisanie routera do obiektu module exports