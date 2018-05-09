import { WINDOW_RESIZE } from '../constants/actionTypes.js'

export const windowResize = (width, height) => {
	return (dispatch, getState) => {
		dispatch({
			type: WINDOW_RESIZE,
			payload: {
				width: typeof window !== 'undefined' ? window.innerWidth : null,
        height: typeof window !== 'undefined' ? window.innerHeight : null
			}
		})
	}
}