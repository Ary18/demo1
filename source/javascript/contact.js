$('#Send').click(function(){
    'use strict';
    console.log('hai cliccato');
    var name = $('#name').val();
    var surname = $('#surname').val();
    var phone = $('#phone').val();
    var name = $('#name').val();
    
    $.post("http://localhost:3000/results", persona)
    .done(function(data){
        alert("Data loaded" + data);
    });
});