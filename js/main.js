const inputName = document.querySelector(".inputname");
const email = document.querySelector(".inputemail");
const website = document.querySelector(".inputwebsite");
const comment = document.querySelector(".textarea");
const form = document.querySelector(".form2");
const card = document.querySelector(".cards");

const DATA = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    name: inputName.value,
    email: email.value,
    website: website.value,
    comment: comment.value,
  };
  DATA.push(newUser);
  console.log(DATA);
  createTable(DATA);
  inputName.value = "";
  email.value = "";
  website.value = "";
  comment.value = "";
});

function createTable(date) {
  while (card.firstChild) {
    card.firstChild.remove();
  }
  date.forEach((i, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <div class="elips"></div>
    <p class="name">${i.name}</p>
    <p class="email">${i.email}</p>
    <p class="website">${i.website}</p>
    <p class="card-comment">${i.comment}</p>
    <button onclick='deleteUser(${index})' class="card-btn">Delete</button>
    </div>
    `;
    card.appendChild(div);
  });
}
createTable(DATA);

function deleteUser(index) {
  DATA.splice(index, 1);
  createTable(DATA);
}
