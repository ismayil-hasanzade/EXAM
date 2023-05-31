const btn = document.querySelector(".btn");
const url = document.querySelector(".url");
const name = document.querySelector(".name");
const about = document.querySelector(".about");

btn.addEventListener("click", () => {
  console.log("test");
  if (url.value == "" || name.value == "" || about.value == "") {
    alert("Inputlari tam doldurun");
  }
  else{
    fetch("http://localhost:3000/exam", {
    method: "POST",
    body: JSON.stringify({
      img: url.value,
      name: name.value,
      about: about.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  }
  
});
