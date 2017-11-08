
export const CREATE_POST = 'CREATE_POST'

export const createPost = (user, text) => {
	return {
		type: CREATE_POST,
		user,
		text
	}
}