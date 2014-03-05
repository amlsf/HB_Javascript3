$(document).ready(function(){
});

var formSubmitButton = $("#form_submit");

var getListsFromServer = function() {
    $.ajax({
            url:'/todo_lists/poll',
            method: "GET"
        }).done(function(data){
            document.getElementById("tdl").innerHTML = data;
            //console.log(data);
        });
};

formSubmitButton.on("click", function(event){
    event.preventDefault();
    $.ajax({
        url: "/",
        method: "POST",
        data: $("form#todo_list_form").serialize()
    }).done(function(data){
        // console.log("getListsFromServer is the next function");
        document.getElementById("tdl").innerHTML = data;
        // console.log("just tried to execute getListsFromServer");
    }).fail(function(){
        alert('fail!!!');
    });
});



//setInterval(getListsFromServer, 10000);




var itemSubmitButton = $("#itembutton");


var getItemsFromServer = function() {
    $.ajax({
            url: document.url,
            method: "GET"
        }).done(function(data){
            document.getElementById("itd").innerHTML = data;
            console.log(data);
        });
};


itemSubmitButton.on("click", function(event){
    event.preventDefault();
    console.log(document.url);
    $.ajax({
        url: window.location.pathname,
        method: "POST",
        data: $("form#todo-item-form").serialize(),
    }).done(function(data){
        console.log("Trying to get the items");
        document.getElementById("itd").innerHTML = data;
        console.log("I just tried");
    }).fail(function(){
        // alert('fail!!!');
    });
});


//setInterval(getItemsFromServer, 10000);

$('.tdlink').on("click", function(event){
    event.preventDefault();
    $.ajax({
        url: event.currentTarget.attributes.href.value,
    }).done(function(response){
        document.getElementById("allthethings").innerHTML = response;
//         console.log(response);
// // //          //TO DO: FIX
// // //         document.getElementsByClassName("body")[0].innerHTML = response;
//         console.log("You clicked a link!"+event.currentTarget.attributes.href.value);
    }
    );
});


//TODO: DELETION
// var itemDeleteButton = $("#deletebutton");

// itemDeleteButton.on("click", function(event){
//     event.preventDefault();
//     console.log(document.url);
//     $.ajax({
//         url: window.location.pathname,
//         method: "POST",
//         data: $("form#todo-item-form").serialize(),
//     }).done(function(data){
//         console.log("Trying to get the items");
//         document.getElementById("itd").innerHTML = data;
//         console.log("I just tried");
//     }).fail(function(){
//         // alert('fail!!!');
//     });
// });

// var clickedLink =$('.tdlink');

// clickedLink.on("click", function(event){
//     event.preventDefault();
//     $.ajax({
//         url: document.url,
//         // method: "POST",
//         // data: $("form#todo-item-form").serialize(),
//     }).done(function(data){
//         console.log("You clicked a link!"+document.url);
//     }).fail(function(){
//         // alert('fail!!!');
//     });
// });

// event
// jQuery.Event {originalEvent: MouseEvent, type: "click", isDefaultPrevented: function, timeStamp: 1393976743981, jQuery210008363594231195748: true…}
// event.currentTarget
// <a href=​"/​todo_lists/​9" class=​"tdlink">​ adsfsa​</a>​
// event.currentTarget.attributes
// NamedNodeMap {0: href, 1: class, length: 2, getNamedItem: function, removeNamedItem: function, item: function, getNamedItemNS: function…}
// event.currentTarget.attributes.href
// href=​"/​todo_lists/​9"

