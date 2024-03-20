document.getElementById('projectBriefForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        contactName: document.getElementById('contactName').value, // Отримати значення поля "Контактна особа(ПІБ)"
        position: document.getElementById('position').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        additionalContacts: document.getElementById('additionalContacts').value,
        communicationPeriod: document.getElementById('communicationPeriod').value,
        
        companyName: document.getElementById('companyName').value,
        businessArea: document.getElementById('businessArea').value,
        companyPositioning: document.getElementById('companyPositioning').value,
        mainProducts: document.getElementById('mainProducts').value,
        companyAdvantages: document.getElementById('companyAdvantages').value,

        targetAudience: {
            under16: document.getElementById('age-under-16').checked ? true : undefined,
            age20_25: document.getElementById('age-20-25').checked ? true : undefined,
            age30_35: document.getElementById('age-30-35').checked ? true : undefined,
            age35_40: document.getElementById('age-35-40').checked ? true : undefined,
            age40_45: document.getElementById('age-40-45').checked ? true : undefined,
            age45_50: document.getElementById('age-45-50').checked ? true : undefined,
            age50_55: document.getElementById('age-50-55').checked ? true : undefined,
            age55_60: document.getElementById('age-55-60').checked ? true : undefined,
            age60_65: document.getElementById('age-60-65').checked ? true : undefined,
            over65: document.getElementById('age-over-65').checked ? true : undefined
        }
       // Додати інші поля тут 
    };

    // Видалення пустих значень з об'єкта formData
    Object.keys(formData.targetAudience).forEach(key => {
        if (formData.targetAudience[key] === undefined) {
            delete formData.targetAudience[key];
        }
    });
        


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
