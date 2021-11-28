const showName = () => {
  let result = document.querySelector("#result");
  result.innerHTML = "Home of Tigers 🐯";

  setTimeout(() => {
    result.innerHTML =
      "Soul of the University 💖 Heart of Perfect Food Hangout!";
  }, 6000);
};
showName();

setInterval(showName, 12000);
