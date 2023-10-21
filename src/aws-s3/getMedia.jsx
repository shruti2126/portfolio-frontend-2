import axios from "axios"

const getMedia = async (type, key) => {
	await axios
    .get(`http://localhost:8080/getMedia?type=${key}&key=${type}`)
		.then((response) => { return response })
		.catch(error => {
			return error + " : Couldn't fetch media!";
	})
}

export default getMedia;