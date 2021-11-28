"use strict";

const info = document.querySelector(".info");
const passfiled = document.querySelector("#password");
const generatorBtn = document.querySelector(".generate-password");
const copyBtn = document.querySelector(".copy");

generatorBtn.addEventListener("click", GeneratePassword);

let password = "";
function GeneratePassword() {
  password = "";
  let length = 8;
  let chars = `abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789!@#$%^&*()`;

  let a = chars.length;
  for (let i = 0; i < length; ++i) {
    password += chars.charAt(Math.floor(Math.random() * a));
  }
  passfiled.value = password;
}

copyBtn.addEventListener("click", copytext);

function copytext() {
  navigator.clipboard.writeText(password);
  info.style.opacity = "1";

  setTimeout(() => {
    info.style.opacity = "0";
  }, 1500);
}
