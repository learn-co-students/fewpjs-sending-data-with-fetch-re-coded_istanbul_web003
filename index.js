// Add your code here

function submitData(userName, eMail){

  let formData = {
      name: userName,
      email: eMail
      };

  let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
      return response.json();
  })
  .then(function(object) {
    console.log(object);
    document.body.append(object.id);
   
  })
  .catch(function(error) {
    document.body.append(error.message);
  });
}
submitData('Sam','sam@sam.com');

//append direct set the value like innerText
//appendChild create a new node that has an other element


/*
  let id = document.createElement('h1');
  id.innerText= object.id;
  document.querySelector('body').appendChild(id);
*/