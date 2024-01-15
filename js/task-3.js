const userNameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

userNameIn.addEventListener("input", (event) => {
    const trimmedName = event.target.value.trim();

    if (trimmedName === "") {
        nameOut.textContent = "Anonymous";
    } else {
        nameOut.textContent = trimmedName;
    }
});