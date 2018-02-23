$('#Send').click(function(){
    'use strict';
    console.log('hai cliccato');
    var name = $('#name').val();
    var surname = $('#surname').val();
    var phone = $('#phone').val();
    var nascita = $('#data').val();
    var citta = $('#città').val();
    var email = $('#email').val();
    var textarea = $('#textarea').text();

    var persona = {
        "name" : {
            "first": name,
            "last": surname,
        },
        "phone": phone,
        "Location":{
            "city": citta,
        },
        "email": email,
    };
    
    $.post("http://localhost:3000/results", persona)
    .done(function(){
        alert("Data loaded");
    });
});