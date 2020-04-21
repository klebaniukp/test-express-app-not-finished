//w tym przypadku utworzymy scieżkę store
//jej zadaniem będzie zapisywanie zgłoszeń nowych użytkowników

//store new application
exports.store = (req, res) => {
    // res.json({
    //     'name': req.body.name,
    //     'phone': req.body.phone,
    //     'message': req.body.message
    // }) to wszystko od 6 - 10 linijki zwraca mi obiekt json ze wpisanymi danymi
    req.flash('form', req.body.name.split(' ')[0] + 'You are a true hero!'); // w zwiazku z tym jak dzialaja wiadomosci flash w tym miejscu musimy przekierować uzytkownika na strone główną
    res.redirect('/')  //aby upewnic sie ze wiadomosc flash jest dostepna na stronie głównej przekażemy ją w akcji home w pages controller
};

//moduł flash pozwala nam przekazać prostą informację, która będzie dostępna przy kolejnym przeładowaniu strony
//jako pierwszy parametr podajemy identyfikator tej wiadmości, drugim paramtrem jest jej treść
//aby upewnic sie ze dane formularza są nadal dobrze odczytywna dodamy sobie imie użytkownika (req.body.name)


