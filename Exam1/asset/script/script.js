const hostingbox = document.querySelector(".hostingbox");
const container = document.querySelector(".container");
const navbtn = document.querySelector(".navbtn");
navbtn.addEventListener("click", () => {
  container.classList.toggle("change");
});
fetch(`http://localhost:3000/exam`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
      const box = document.createElement("div");
      box.className = "box";
      const img = document.createElement("div");
      img.className = "img";
      const image = document.createElement("img");
      const span = document.createElement("span");
      const p = document.createElement("p");
      const a = document.createElement("a");
      const del = document.createElement("a");
      del.innerHTML = "Delete";
      del.target = "_blank";
      del.href = `./delete.html#${element.id}`;
      a.innerHTML = "Update";
      a.style.cssText = `
      background-color:yellow;
      padding :8px;
      border-radius:6px;
      `;
      a.target = "_blank";
      a.href = `./update.html#${element.id}`;

      span.innerText = element.name;
      p.innerText = element.about;
      image.src = element.img;
      img.append(image);
      box.append(img, span, p, a, del);
      hostingbox.appendChild(box);
    });
  });
