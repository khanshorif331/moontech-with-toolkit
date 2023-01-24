import axios from 'axios'

let URL

switch (process.env.REACT_APP_ENVIRONMENT) {
	case 'DEVELOPMENT':
		URL = 'https://moontech-server.vercel.app/'
		break
	case 'PRODUCTION':
		URL = 'https://moontech-server.vercel.app/'
		break
	default:
		URL = 'https://moontech-server.vercel.app/'
		break
}

const instance = axios.create({
	baseURL: URL,
})

export default instance
