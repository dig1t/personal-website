import { EVENT, WINDOW_RESIZE } from '../constants/actionTypes.js'

export const event = data => {
	return (dispatch, getState) => {
		dispatch({
			type: EVENT,
			payload: {
				event: data
			}
		})
	}
}

export const windowResize = (width, height) => {
	return (dispatch, getState) => {
		dispatch({
			type: WINDOW_RESIZE,
			payload: {
				width: width || null,
        height: height || null
			}
		})
	}
}