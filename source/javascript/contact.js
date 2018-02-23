/*global $ */
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

    // var persona2 ={};
    // var name2= {};
    // name2["first"] = name;
    // name2["last"] = surname;
    // persona2["name"] = name2;


    var persona = {
    "name" : {
        "first": name,
        "last": surname,
    },
    "phone": phone,
    "Location":{
        "city": citta,
    },
    "dob": nascita,
    "email": email,
    };
    // $.post("http://localhost:3000/results", $('#contatti').serialize())
    $.post("http://localhost:3000/results", persona)
    .done(function(){
        alert("Data loaded");
    });
});