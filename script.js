function saveResult(score) {
    const playerName = prompt("Enter your name:");
    if (playerName) {
        fetch('http://localhost:3000/save-result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: playerName, score })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to save result');
        });
    }
}
