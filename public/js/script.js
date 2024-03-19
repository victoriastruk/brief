document.getElementById('projectBriefForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        contactName: document.getElementById('contactName').value // Отримати значення поля "Контактна особа(ПІБ)"
        // Додати інші поля тут 
    };

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData) 
    })
    .then(response => response.json()) 
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка fetch:', error);
    });
});
