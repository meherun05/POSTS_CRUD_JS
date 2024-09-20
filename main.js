let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = `<span style="color:red">Post can't be empty!</span>`;
  } else {
    msg.innerHTML = `<span style="color:green">Posted Successfully!</span>`;
    postedData();
    createPost();
  }
};

let data = [];

let postedData = () => {
  data["text"] = input.value;
  console.log(data);
};

let createPost = () => {
  posts.innerHTML += `<div class="">
  <p>${data.text}</p>
  <span class="options">
    <i onClick = "editPost(this)" class="fa-solid fa-pen-to-square" style="color: green" ></i>
    <i onClick = "deletePost(this)" class="fa-solid fa-trash" style="color: tomato"></i>
  </span>
</div>`;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  //   data.push(data);
  e.parentElement.parentElement.remove();
};
