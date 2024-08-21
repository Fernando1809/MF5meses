document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'Ferchi' && password === '1819') {
        // Redirigir a otra página o mostrar un mensaje de éxito
        window.location.href = 'home.html'; // Redirige a la página principal
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});

document.getElementById('showCardButton').addEventListener('click', function() {
    const card = document.getElementById('instructionsCard');
    card.classList.toggle('hidden');
});

document.getElementById('startGameButton').addEventListener('click', function() {
    alert('¡El juego ha comenzado!');
    // Aquí puedes redirigir a la página del juego o iniciar la lógica del juego
});

document.getElementById('submitBtn').addEventListener('click', function() {
    if (checkAnswers()) {
        alert('¡Respuestas correctas!');
        window.location.href = 'finish.html'; // Redirige a la página de felicitación
    } else {
        alert('Respuestas incorrectas, intenta de nuevo.');
    }
});

