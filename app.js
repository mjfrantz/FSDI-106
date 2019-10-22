function createNew (){
    var text = $("#txtTest").val();

    //display a todo on the list
    var list = $("#todos");
    list.append('<li class="list-group-item">' + text + '</li>')

    //clear the text field
    $("#txtTest").val("").focus(); //chaining 
}

// function init() {
// // JS to change the text on a text field
// var txt = document.getElementById("txtTest");
// console.log(txt.value);
// txt.value = "LAST";

// // assign a function to a click event 
// var btn = document.getElementById("btnAdd");
// btn.onclick = createNew;
// }

function init2 (){
    
    // Assign a click event 
    $("#btnAdd").click(createNew);

    //event binding
    $("#txtTest").keypress(function (args) {
        if(args.keyCode == 13){ //know for job interview quicker processing time!
           createNew();
        }
    });

}

//when everything is renderd, call the function
// window.onload = init;
//document.onload = init;

$(document).ready(init2);