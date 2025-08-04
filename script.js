fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#arbitrageTable tbody');
        data.forEach(match => {
            const { name, bookmaker1, odd1, bookmaker2, odd2 } = match;
            const profitPercent = (1 / odd1 + 1 / odd2) < 1 ? ((1 - (1 / odd1 + 1 / odd2)) * 100).toFixed(2) : null;
            if (profitPercent) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${name}</td>
                    <td>${bookmaker1}</td>
                    <td>${odd1}</td>
                    <td>${bookmaker2}</td>
                    <td>${odd2}</td>
                    <td style="color:green;">${profitPercent}%</td>
                `;
                tbody.appendChild(tr);
            }
        });
    });