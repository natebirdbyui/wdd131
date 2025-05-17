let button = document.getElementById("sayHello");

button.addEventListener("click", function() 
{
    console.log("Hello, world!");
});

let message = document.getElementById("message");

button.addEventListener("click", function() 
{
    message.textContent = "Hello, world!";
});

