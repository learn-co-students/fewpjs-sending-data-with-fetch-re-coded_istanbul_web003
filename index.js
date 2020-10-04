/*let formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
  };
   
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
   
  fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    console.log(response)
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });*/


  function submitData(userName, userEmail) {
       return fetch("http://localhost:3000/users", {
          method: "POST",
          redirect: "manual",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
              name: userName,
              email: userEmail,
          })
      })
      .then(function(response) {
        //console.log(response)
        return response.json();
      })
      .then(function(object) {
          //debugger
        //console.log(object);
        document.body.innerHTML += object.id
      })
      .catch(function(error) {
        console.log(error.message);
        document.write(error.message)
      });
      
  }