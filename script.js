document.addEventListener('DOMContentLoaded', () => {
    const passwordDisplay = document.getElementById('password-display');
    const generateButton = document.getElementById('generate-button');
    const includeLowercase = document.getElementById('include-lowercase');
    const includeUppercase = document.getElementById('include-uppercase');
    const includeNumbers = document.getElementById('include-numbers');
    const includeSpecial = document.getElementById('include-special');

    generateButton.addEventListener('click', generatePassword);

    function generatePassword() {
        const length = 12;
        let charset = "";
        if (includeLowercase.checked) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeUppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeNumbers.checked) charset += "0123456789";
        if (includeSpecial.checked) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        if (charset === "") {
            passwordDisplay.textContent = "Please select at least one option.";
            return;
        }

        let password = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        passwordDisplay.textContent = password;
    }
});
