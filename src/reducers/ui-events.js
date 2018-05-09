import { WINDOW_RESIZE } from '../constants/actionTypes.js'

const reducer = (state = {
  width: typeof window !== 'undefined' ? window.innerWidth : null,
  height: typeof window !== 'undefined' ? window.innerHeight : null
}, action) => {
	switch(action.type) {
		case WINDOW_RESIZE: {
			return {
				...state,
				width: action.payload.width,
        height: action.payload.height
			}
		}
	}
	
	return state
}

export default reducer