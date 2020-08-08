// Add your code here
let submitData = {
    userName: "",
    userEmail: ""
  };
let confirmData = {
   headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
   }, 
   body: JSON.stringify(submitData)
};

fetch("http://localhost:3000/users", confirmData)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(err) {
        alert("ERORE");
        console.log(err.message);
    });