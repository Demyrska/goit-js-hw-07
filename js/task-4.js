const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {};

    for (const element of form.elements) {
        if (element.nodeName === "INPUT") {
            const fieldName = element.name;
            const fieldValue = element.value.trim();
            formData[fieldName] = fieldValue;
        }
    }

    if (!formData.email || !formData.password) {
        alert('All form fields must be filled in');
    } else {
        console.log(formData);
        form.reset();
    }
});
