import { PORTFOLIO_MODAL_OPEN, PORTFOLIO_CLICK } from '../constants/actionTypes.js'

export const click = id => {
	return (dispatch, getState) => {
		dispatch({
			type: PORTFOLIO_CLICK,
			payload: {
				// open modal if prev target id does not match
				// if it matches then reverse the boolean value of modalOpen
				open: getState().modalTargetId === id ? !getState().modalOpen : true,
				// set to the most recently clicked project id
				id: id
			}
		})
	}
}

export const closeModal = () => ({
	type: PORTFOLIO_MODAL_OPEN,
	payload: false
})