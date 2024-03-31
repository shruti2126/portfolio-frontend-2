
const addDoc = async ({collection, docData}) => {
	try {
		const response = await fetch("http://localhost:8080/addDoc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({collection, docData}),
		})
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export default addDoc;