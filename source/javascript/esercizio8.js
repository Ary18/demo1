/*global $ */
var Name = {
    title: 'mr.',
    first: 'Mario',
    last: 'Rossi'
};

var Location = {
    street: 'Corso Como',
    city: 'Milano',
    state: 'Italia',
    postcode: 20100
};

var Job = {
    type: 'Architetto',
    workplace: "Architect's group"
};

var Login = {
    username: 'mario',
    password: '1234',
    salt: 'gaegaegadvaasf',
    md5: 6342234,
    sha1: 'bvsbwr4345653',
    sha256: 'sdgsntdhergwefa34'
};

var Id = {
    name: 'mrx',
    value: '34'
};
var Picture = {
    large: "https://randomuser.me/api/portraits/men/83.jpg",
    medium: "http://www.designskilz.com/random-users/images/imageM13.jpg",
    //medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
};
var Persona = {
    gender: 'male',
    name: Name,
    location: Location,
    job: Job,
    email: 'mariorossi@gmail.com',
    login: Login,
    dob: '1995-03-12',
    hob: '07:29:45',
    registered: '2005-03-12 07:29:45',
    phone: '+39 02 4882705',
    cell: '+39 331 4885634',
    id: Id,
    picture: Picture,
    nat: 'It',
    setNation: function(nazione){
        'use strict';
        this.nat= nazione;
    }
};

var extractRandomUser = function (nazione){
    'use strict';
    var tempP= Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;
};
// console.log(extractRandomUser('uk').nat);

window.addEventListener('load', paginaCaricata);

function paginaCaricata(){
    'use strict';

    $('body').loading('toggle');

    // var persona = extractRandomUser('it');
    //     console.log(persona);
    //     var nomePersona = persona.name.first + ' ' + persona.name.last;
    //     var headingNomePersona  = 
    //         document.getElementById('nome');
    //     headingNomePersona.innerText = nomePersona;

    //     var luogoPersona = persona.location.street + ' ' + persona.location.city + ' ' + persona.location.postcode + ' ' + persona.location.state;
    //     var headingLocationPersona  = 
    //         document.getElementById('indirizzo');
    //     headingLocationPersona.innerText = luogoPersona;

    //     var lavoroPersona = persona.job.type;
    //     var headingJobPersona  = 
    //         document.getElementById('lavoro');
    //     headingJobPersona.innerText = lavoroPersona;

    //     var luogoLavoroPersona = persona.job.workplace;
    //     var headingWorkPlacePersona  = 
    //         document.getElementById('postoDiLavoro');
    //     headingWorkPlacePersona.innerText = luogoLavoroPersona;

    //     var telefonoPersona = persona.phone;
    //     var headingPhonePersona  = 
    //         document.getElementById('telefono');
    //     headingPhonePersona.innerText = telefonoPersona;

    //     var emailPersona = persona.email;
    //     var headingEmailPersona  = 
    //         document.getElementById('e-mail');
    //     headingEmailPersona.innerText = emailPersona;

    //     var nascitaPersona = Persona.dob.substr(8,2) + '/' + Persona.dob.substr(5,2) + '/' + Persona.dob.substr(0,4);
    //     var headingDobPersona  = 
    //         document.getElementById('nascita');
    //     headingDobPersona.innerText = nascitaPersona;

    //     var fotoPersona = persona.picture.medium;
    //     var headingPhotoPersona  = 
    //         document.getElementById('foto');
    //     headingPhotoPersona.src = fotoPersona;


    // var url = 'http://localhost:3000/results';  questo serve per usare il local host
    // $.getJSON(url,function(data){
    // var persona = data[0];

    var url = 'https://randomuser.me/api/';
    $.getJSON(url,function(data){
    var persona = data.results[0];
    console.log(persona);

    $('#foto').attr('src',persona.picture.large);
    $('#nome').text(persona.name.first + ' ' + persona.name.last);
    $('#lavoro').text(persona.job);
    $('#telefono').text(persona.cell);
    $('#indirizzo').text(persona.location.street + ' ' + persona.location.city + ' ' + persona.location.postcode + ' ' + persona.location.state);
    $('#e-mail').text(persona.email);
    $('#nascita').text(persona.dob.substr(8,2) + '/' + persona.dob.substr(5,2) + '/' + persona.dob.substr(0,4));
    $('body').loading('toggle');
});
}







