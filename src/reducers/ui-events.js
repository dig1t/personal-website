import { WINDOW_RESIZE } from '../constants/actionTypes.js'

const reducer = (state = {
  screenWidth: typeof window !== 'undefined' ? window.innerWidth : null,
  screenHeight: typeof window !== 'undefined' ? window.innerHeight : null
}, action) => {
	switch(action.type) {
		case WINDOW_RESIZE: {
			return {
				...state,
				screenWidth: action.payload.width,
        screenHeight: action.payload.height
			}
		}
	}
	
	return state
}

export default reducer