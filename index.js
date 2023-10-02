let userName = "Evans";
let userEmail = "evans@evans.com";
let body = document.querySelector("body");

const submitData = (userName, userEmail) => {
    let userObj = {name: userName, email: userEmail}
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userObj)
  })
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    body.innerHTML = `<p>${data.id}</p>`;
  })
  .catch((error) => {
    body.innerHTML = `${error.message}`;
  });
};
