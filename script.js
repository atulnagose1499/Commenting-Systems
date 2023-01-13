let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// form.addEventListener("submit", () => {
//   console.log("button clicked");
// });

// stop to reload page use e.preventDefault()

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// form validation logic
// is text area is empty then failure otherwise success

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can't be blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

// accept & store Data

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

// upload on screen

// let createPost = () => {
//   posts.innerHTML += data.text;
// };

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
    <i onClick = "editPost(this)"  class="fa-duotone fa-pen-to-square"></i>
    <i onClick = "deletePost(this)" class="fa-duotone fa-trash-can-list"></i>
    
    </span>
  </div>`;
  // we need to reset form
  input.value = "";
};

//  Update
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
//  Delete

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
