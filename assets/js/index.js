function showMessage() {
    alert("Welcome to JavaScript!");

    var name = prompt("What is your name?", "");
    var likesJS = confirm("Do you like JavaScript?");

    var message = "Hello, " + name + "! ";
    message += likesJS ? "Glad you like JavaScript!" : "Hope you learn to enjoy it!";
    
    document.getElementById("output").innerHTML = message;
}
