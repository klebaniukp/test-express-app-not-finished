//w tym kontrolerze znajdować się będą akcje odpowiedzialne za obsługę konkretnych podstron (tutaj strony głównej)
//akcją będzie metoda, która aktualnie znajduja się w pliku index js:
// (req, res) => {
//     res.render('home');
// }
exports.home = (req, res) => {
    res.render('home', {    //dane do renderowanego widoku możemy przekazać jako drugi parametr
        formMessage: req.flash('form')
    }); // nastepnie musimy sie upewnic ze jeżeli wiadomość jest dostępna to użytkownik otrzynma stosowny komunikat
};