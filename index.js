/*
let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  // method: "POST" is missing from the object below
  let configObj = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    })
    .catch(function(error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
    */



const body = document.querySelector("body");


function submitData(username, useremail){
    const formData = {
        name: username,
        email: useremail
    }
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(resp => resp.json(    ))
    .then(json => body.innerHTML+=Object.entries(json))
    .catch(function(error){
        alert("PROBLEM");
        body.innerHTML+= (error.message);
    });
    
};
document.addEventListener("change", e => e.preventDefault())
