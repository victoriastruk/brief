document.addEventListener('DOMContentLoaded', function() {
    fetchBriefs();

    async function fetchBriefs() {
        try {
            const response = await fetch('/api/briefs');
            if(response.ok){
                const briefs = await response.json();
                const container = document.getElementById('briefsContainer');
                container.innerHTML = ''; 
                
                briefs.forEach(brief => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${brief.contactName}</td>
                        <td>
                            <button onclick="downloadPDF('${brief._id}')">Завантажити PDF</button>
                        </td>
                        <td>
                            <button onclick="deleteBrief('${brief._id}')">Видалити</button>
                        </td>
                    `;

                    tr.classList.add('brief-row');
                    container.appendChild(tr);
                });
            } 
           
        } catch (error) {
            console.error('Error fetching briefs:', error);
        }
    }
    
    window.downloadPDF = async (briefId) => {
        try {
            const response = await fetch(`/api/briefs/${briefId}/pdf`, {
                method: 'GET',
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `brief-${briefId}.pdf`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    window.deleteBrief = async (briefId) => {
        try {
            const response = await fetch(`/api/briefs/${briefId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Перезавантаження списку брифів після видалення
                fetchBriefs();
            } else {
                console.error('Failed to delete brief:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting brief:', error);
        }
    };
});
