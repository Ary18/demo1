function paginaCaricata(){

var persona = extractRandomUser('it');
    console.log(persona);
    ;var nomePersona = persona.name.first + ' ' + persona.name.last;
    var headingNomePersona  = 
        document.getElementById('nome')
    headingNomePersona.innerText = nomePersona;
}