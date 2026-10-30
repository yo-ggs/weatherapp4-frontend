// Insert your code here

document.querySelector("#register").addEventListener("click", function () {
  const name = document.querySelector("#registerName").value;
  const email = document.querySelector("#registerEmail").value;
  const password = document.querySelector("#registerPassword").value;

  fetch("https://weatherapp4-backend-one.vercel.app/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result) {
        window.location.assign("index.html");
      } else {
        console.log("Erreur d'inscription :", data.error);
      }
    })
    .catch((error) => {
      console.error("Erreur réseau ou fetch :", error);
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  const email = document.querySelector("#connectionEmail").value;
  const password = document.querySelector("#connectionPassword").value;

  fetch("https://weatherapp4-backend-one.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result) {
        window.location.assign("index.html");
      } else {
        console.log("Erreur de connexion :", data.error);
      }
    })
    .catch((error) => {
      console.error("Erreur réseau ou fetch :", error);
    });
});
