const update = document.querySelector(".update");
const url = document.querySelector(".url");
const name = document.querySelector(".name");
const about = document.querySelector(".about");

update.addEventListener("click", () => {
  console.log("test");
  if (url.value == "" || name.value == "" || about.value == "") {
    alert("Inputlari tam doldurun");
  } else {
    fetch(`http://localhost:3000/exam/${window.location.hash.slice(1)}`, {
      method: "PUT",
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
