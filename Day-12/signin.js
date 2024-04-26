let form = document.querySelector("form");

var handleFormData = (event) => {
    event.preventDefault();
    let formValue = event.target;
    let name = formValue[0].value;
    let email = formValue[1].value;
    let password = formValue[2].value;
    let obj = {
        name,
        email,
        password
    };
    sendData(obj);
};

async function sendData(obj) {
    try {
        let resp = await fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        if (resp.ok) {
             alert("User registered successfully")
             window.location.href="/login.html"
        } else {
            console.log("Error:", resp.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

form.addEventListener("submit", function(event) {
    handleFormData(event);
});
