document.querySelector('#submit-button').onclick = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        })

}