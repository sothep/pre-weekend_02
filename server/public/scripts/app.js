$(document).ready(function(){
    console.log("Meow! (Really would you have expected something else from me?");

    $(".clicky-button").on('click', clickyButton);
});

function clickyButton(){
    var data = {};

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(gremlins){
            data = gremlins;
            appendDom(data);
        }
    });
}

function appendDom(data){
    var people = data.people;
    for (var i = 0; i < people.length; i++){
        $('.container').append('<p>'+people[i]+'</p>');
    }
}
