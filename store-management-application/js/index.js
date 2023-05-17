// login page
const loginForm = document.querySelector(".login-page .form-box")
const submitBtn = document.querySelector(".login-page .submit-btn")
const passwordInput = document.querySelector(
	".login-page input[type='password']"
)
const popup = document.querySelector(".login-page .overlay")

loginForm.onsubmit = (e) => {
	e.preventDefault()
	popup.style.display = "flex"
}

passwordInput.oninput = () => {
	const passwordMessage = document.getElementById("password-message")
	const passwordPattern =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/

	if (passwordInput.value.match(passwordPattern)) {
		passwordMessage.style.color = "green"
		passwordMessage.textContent = "Strong password"
		submitBtn.disabled = false
	} else {
		passwordMessage.style.color = "red"
		passwordMessage.textContent =
			"Password must contain at least 8 characters, including at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (@$!%*?&)"
		submitBtn.disabled = true
	}
}