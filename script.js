// Function for index.html
function getUserInfo() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    const fullName = `${firstName} ${lastName}`;
    const output = `
        Full Name: ${fullName}<br>
        Email: ${email}<br>
        Address: ${address}<br>
        ${city}, ${province}<br>
        Membership: ${membership}
    `;
    document.getElementById("output").innerHTML = output;
}

// Function for excel.html
function myExcelFuns() {
    const numberStr = document.getElementById("numbers").value.trim();
    if (!numberStr) {
        alert("Please enter numbers separated by spaces.");
        return;
    }

    const numberArr = numberStr.split(" ");
    const finalNumericArray = [];
    for (let num of numberArr) {
        if (num && !isNaN(num)) {
            finalNumericArray.push(Number(num));
        }
    }

    let result;
    if (document.getElementById("sum").checked) {
        result = finalNumericArray.reduce((acc, curr) => acc + curr, 0);
    } else if (document.getElementById("avg").checked) {
        const total = finalNumericArray.reduce((acc, curr) => acc + curr, 0);
        result = total / finalNumericArray.length;
    } else if (document.getElementById("max").checked) {
        result = Math.max(...finalNumericArray);
    } else if (document.getElementById("min").checked) {
        result = Math.min(...finalNumericArray);
    }

    document.getElementById("output").innerHTML = `Result: ${result}`;
}

// Theme switching functions
function setDarkTheme() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
}

function setLightTheme() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    // For index.html
    const sendBtn = document.getElementById("sendBtn");
    if (sendBtn) {
        sendBtn.addEventListener("click", getUserInfo);
    }

    // For excel.html
    const calculateBtn = document.getElementById("calculateBtn");
    if (calculateBtn) {
        calculateBtn.addEventListener("click", myExcelFuns);
    }

    // Theme buttons (available on both pages)
    const darkThemeBtn = document.getElementById("darkThemeBtn");
    const lightThemeBtn = document.getElementById("lightThemeBtn");
    if (darkThemeBtn && lightThemeBtn) {
        darkThemeBtn.addEventListener("click", setDarkTheme);
        lightThemeBtn.addEventListener("click", setLightTheme);
    }
});