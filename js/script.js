  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });

  document.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });

const PASSWORD = "inx";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-msg");
  const gate = document.getElementById("password-gate");
  const loader = document.getElementById("loading-screen");
  const content = document.getElementById("protected-content");

  if (input === PASSWORD) {
    error.style.display = "none";
    gate.style.display = "none";
    loader.style.display = "flex";

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 700);
  } else {
    error.style.display = "block";
  }
}
