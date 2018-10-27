/*JQuery
A lightweight javascript library that enables  easy use of javascript of a web page
*/


$(Document).ready(function() { // (Document).ready(function) loads the document 

    //selects the id of My button which is "button" in the index.hml file
    $("button").click(function() {
        $("myhob").text("My hobbies"); // .hide() instruct the button to hide the image when clicked

    });
    //$("button2").click(function() {
    // $("myhob").html("<b>My hobbies</b>");
    //});

});




var age = 22;

function firstfunction() {

    var name = prompt('whats your name?')
    var nextMyAge = ++age
    document.write("my name is " + name + " and i am " + age + " years old,i will be " + nextMyAge + " years old by the end of next year");
};