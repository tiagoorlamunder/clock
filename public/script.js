document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var clockElement = document.getElementById('clock');
    setInterval(function() {
        var now = new Date();
        clockElement.innerText = now.toLocaleTimeString();
    }, 1000);
});
