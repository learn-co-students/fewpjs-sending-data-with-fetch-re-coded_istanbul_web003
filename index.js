// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };

      let configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
       
     return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object.id);
          document.body.innerHTML = object.id;
        })
        .catch(function(error) {
          console.log(error.message);
          document.body.innerHTML = error.message;
        });
    
}


submitData("betty", "betty@gmail.com");
//submitData("bett", "bett@gmail.com");