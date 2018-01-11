import { PORTFOLIO_MODAL_OPEN, PORTFOLIO_CLICK } from '../constants/actionTypes.js'
import { FILTER_ALL, FILTER_WEB, FILTER_DESIGN } from '../constants/filters.js' // TEMP

const reducer = (state={
  data: [
    {
      name: 'A very long project title',
      description: 'short description about project 1.',
      type: FILTER_WEB,
      thumbnail: 'https://picsum.photos/600/500',
      id: 'btrbrgbfveddr',
      username: 'Digit'
    },
    {
      name: 'Project 2',
      description: 'short description about project 2.',
      type: FILTER_DESIGN,
      thumbnail: 'https://picsum.photos/800/1000',
      id: 'rymtrh45jny5tnhrthth',
      username: 'Digit'
    },
    {
      name: 'Ipsum',
      description: 'short description about project 3.',
      type: FILTER_WEB,
      thumbnail: 'https://picsum.photos/300/400',
      id: 'h56jde76y67jnythjns54h',
      username: 'Digit'
    },
    {
      name: 'Lorem Branding',
      description: 'short description about projec-t 4.',
      type: FILTER_WEB,
      thumbnail: 'https://picsum.photos/500/800',
      id: 'k6rdey5j5e5j',
      username: 'Digit'
    }
  ],
  modalOpen: false, // closed by default,
	modalTargetId: '' // id of project to view
}, action) => {
	switch(action.type) {
		case PORTFOLIO_MODAL_OPEN: {
			return {...state, modalOpen: action.payload}
		}
		
		case PORTFOLIO_CLICK: {
			return {
				...state,
				modalOpen: action.payload.open,
				modalTargetId: action.payload.id
			}
		}
	}
	
	return state
}

export default reducer