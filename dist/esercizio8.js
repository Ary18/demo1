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
console.log(extractRandomUser('uk').nat);

window.addEventListener('load', paginaCaricata);

function paginaCaricata(){
    'use strict';

    var persona = extractRandomUser('it');
        console.log(persona);
        var nomePersona = persona.name.first + ' ' + persona.name.last;
        var headingNomePersona  = 
            document.getElementById('nome');
        headingNomePersona.innerText = nomePersona;

        // var persona = extractRandomUser('it');
        var luogoPersona = persona.location.street + ' ' + persona.location.city + ' ' + persona.location.postcode + ' ' + persona.location.state;
        var headingLocationPersona  = 
            document.getElementById('indirizzo');
        headingLocationPersona.innerText = luogoPersona;

        // var persona = extractRandomUser('it');
        var lavoroPersona = persona.job.type;
        var headingJobPersona  = 
            document.getElementById('lavoro');
        headingJobPersona.innerText = lavoroPersona;

        // var persona = extractRandomUser('it');
        var luogoLavoroPersona = persona.job.workplace;
        var headingWorkPlacePersona  = 
            document.getElementById('postoDiLavoro');
        headingWorkPlacePersona.innerText = luogoLavoroPersona;

        // var persona = extractRandomUser('it');
        var telefonoPersona = persona.phone;
        var headingPhonePersona  = 
            document.getElementById('telefono');
        headingPhonePersona.innerText = telefonoPersona;

        // var persona = extractRandomUser('it');
        var emailPersona = persona.email;
        var headingEmailPersona  = 
            document.getElementById('e-mail');
        headingEmailPersona.innerText = emailPersona;

        // var persona = extractRandomUser('it');
        var nascitaPersona = Persona.dob.substr(8,2) + '/' + Persona.dob.substr(5,2) + '/' + Persona.dob.substr(0,4);
        var headingDobPersona  = 
            document.getElementById('nascita');
            // for (var i=0; i<dob.length; i++){
            //     headingDobPersona.innerText = nascitaPersona;
            // }
        headingDobPersona.innerText = nascitaPersona;

        // var persona = extractRandomUser('it');
        var fotoPersona = persona.picture.medium;
        var headingPhotoPersona  = 
            document.getElementById('foto');
        headingPhotoPersona.src = fotoPersona;
    }




