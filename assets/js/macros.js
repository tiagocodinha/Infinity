window.addEventListener('load', function () {
    var video = document.getElementById('videobaile');
    video.currentTime = 27;
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwU6WY6Vax4jDq_7Rd_fbwkL6Y48FFR6MYSBSWVXJ0HGcwuRi4lxaLjDcqFWyd_RMoP/exec';
const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validarpost()) return;

    const formData = new FormData(form);

    try {
        const response = await fetch(scriptURL, { method: 'POST', body: formData });
        if (response.ok) {
            window.location.href = "thankyou.html";
        } else {
            alert('Ocorreu um erro ao enviar os dados.');
        }
    } catch (error) {
        alert('Erro ao conectar-se ao servidor.');
        console.error(error);
    }
});
