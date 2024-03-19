document.addEventListener('DOMContentLoaded', function() {
    fetchBriefs();

    async function fetchBriefs() {
        try {
            const response = await fetch('/api/briefs');
            const briefs = await response.json();
            const container = document.getElementById('briefsContainer');
            container.innerHTML = ''; 
            
            briefs.forEach(brief => {
                const div = document.createElement('div');
                div.innerHTML = `Brief ID: ${brief._id} <button onclick="downloadPDF('${brief._id}')">Download PDF</button>`;
                container.appendChild(div);
            });
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
});
