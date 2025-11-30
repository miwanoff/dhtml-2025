const wrap = document.getElementById("wrap");
const wrap1 = document.getElementById("wrap1");
let allImages = wrap.getElementsByTagName("img");
console.log(allImages);

let gallery = document.createElement("div");
gallery.style = "border: solid red 2px; min-height: 20px;";
wrap1.appendChild(gallery);
gallery.innerHTML ="";
for (let i = 0; i < allImages.length; i++) {
  //   document.writeln(`<hr>`);
  gallery.innerHTML += `<img src="${allImages[i].getAttribute("src")}" alt="" />`;
  //   document.writeln(`<h2>${allImages[i].getAttribute("data-nick")}</h2>`);
  //   document.writeln(`<h2>${allImages[i].src}</h2>`);
  gallery.innerHTML += `<h2>${allImages[i].dataset.nick}</h2>`;
  gallery.innerHTML += `<p>${allImages[i].dataset.breed}</p>`;
}
