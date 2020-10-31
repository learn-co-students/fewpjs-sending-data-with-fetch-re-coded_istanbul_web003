function submitData(name, email) {
  let userData = {
      name: name,
      email: email
  };

  let configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(userData)
  };

  
  return fetch('http://localhost:3000/users', configObj )
      .then(resp => resp.json())
      .then(obj => {
          document.body.innerHTML = obj.id
          console.log(obj)
      })
      .catch(error => {
          console.log(error)
          document.body.innerHTML = error.message
      })
} 


