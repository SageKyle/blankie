// create project (endpoint)
// curl -X GET "https://blankbox.onrender.com/createproject/<projectname>/<fullname>/<email"

function signInWithUsernameAndPassword(
	projectName,
	apiKey,
	username,
	password
) {
	const url = `https://blankbox.onrender.com/signinwithusernameandpassword/${projectName}?apiKey=${apiKey}&username=${username}&password=${password}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			// Handle the response data
			return data;
		})
		.catch((error) => {
			// Handle the error
			return error.message;
		});
}

export { signInWithUsernameAndPassword };
