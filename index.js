function submitData(name, email) {
    const dataToSent = {
        name: name,
        email: email
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataToSent)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(object => appendDOM(object.id))
        .catch(err => appendDOM(err));
}

function appendDOM(id) {
    const p = document.createElement('p');
    const body = document.querySelector('body');

    p.textContent = id;
    body.appendChild(p);
}