const del = document.querySelector(".delete");

del.addEventListener("click", () => {
  console.log("test");

  alert("Inputlari tam doldurun");

  fetch(`http://localhost:3000/exam/${window.location.hash.slice(1)}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(data);
});
