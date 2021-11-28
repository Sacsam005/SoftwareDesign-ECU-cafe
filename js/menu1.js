const showName = () => {
  let result = document.querySelector("#result");
  result.innerHTML = "GOOD FOOD 🍔 ! GOOD MOOD 😊 !";

  setTimeout(() => {
    result.innerHTML = "Perfect Food = Healthy diet + Good Company";
  }, 6000);
};
showName();

setInterval(showName, 12000);
