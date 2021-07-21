const title = document.querySelector("div.hello:first-child h1");

function handleTitleclick() {
  if (title.className === "active") {
    title.className = "";
  } else {
    title.className = "active";
  }
}

title.addEventListener("click", handleTitleclick);
