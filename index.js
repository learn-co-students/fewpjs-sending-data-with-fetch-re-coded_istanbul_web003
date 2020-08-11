

function submitData(userName, userEmail) {
    
 
    const body = document.querySelector("body");
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(response => {
            return response.json();
        })
        .then(json => {
            
             body.innerHTML+= Object.entries(json)
        

        })

        .catch(function(error){
            alert("Problem");
              //  console.log(error.message);

            const problem = document.createElement('p')
            problem.innerHTML = error.message;
            body.appendChild(problem)

        });

     


}

  submitData('steve', 'hello')





