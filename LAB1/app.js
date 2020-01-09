//the entire code is
function createTodo(){
    //get the text
    var text2 = $("#txtText").val();
      //to read use -  .val();put on html browser and on console press enter

    //create an li
    var li = '<li>'+ text2 +'<button>Done!</button></li>';
    //add the li to the ul
    $("#pending").append(li);
    //clear the input field
    $("#txtText").val("");
    //to write, use -  .val(""); write on console and print on html browser
    // in jquery write an empty string ("");so it clears

    //set the focus to the field ;
    
    // put the ToDo and write out something focus is press the tab key , press enter,

    $("#txtText").focus();


}
function init(){

    //hook events
    $("#btnSave").click(createTodo);
    $("#txtText").keypress( function(e){
        //console.log(e);

        if(e.key == "Enter"){
            createTodo();
        }

    });
}

window.onload = init;







// function createTodo(){
    // console.log("btn pressed");
    
    // var text2 = $("#txtText").val();   
    // console.log("jq way",text2);

// }

// this is a function
// function init(){
    // console.log("TODO app woking!");
    // console.log($);

    
    // using javascript
    // get the text from the input field
    // var text = document.getElementById("txtText").value;
    // console.log("JS way",text);

    //jquery way

    
    //hook events
    //ENG: when a click happens on elem btnSave, exec createTodo fn
    // $("#btnSave").click(createTodo);

// }
//when the browser finishes rendering all the HTML elements, 
//then it will execute the function call init
// window.onload = init;







// this is a function
/*function init(){
    console.log("TODO app woking!");
    console.log($);

    var input = document.getElementById("txtTest");
    console.log(input);
    console.log(input.value);

    sayHello();
}

function sayHello(){
    console.log("Debbie");
}

//when the browser finishes rendering all the HTML elements, 
//then it will execute the function call init
window.onload = init;*/




















