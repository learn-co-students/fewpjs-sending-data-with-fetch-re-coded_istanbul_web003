  
  function submitData(name, email) {
  
  let data = {
    name: name,
    email: email
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };


  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object.id);
    document.body.innerHTML = object.id;
  })
  .catch(function(error) {
    alert("Bad things! Holy shit!");
    console.log(error.message);
    document.body.innerHTML = error.message;
  });
}













// Add your code here
/* let formData = {
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
    }); */