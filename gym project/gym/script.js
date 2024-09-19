// You can add additional interactive functionalities like form validations, animations, etc.
document.addEventListener("DOMContentLoaded", function() {
    console.log("DarkGym website loaded successfully!");
});
document.querySelector(".btn").addEventListener("click", function() {
    alert("🚨 Attention! Don't miss our special offer! 💪🔥");

});
// JavaScript to add 'show' class to home section on page load
document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('#home');
    setTimeout(() => {
        homeSection.classList.add('show');
    }, 500);
});
