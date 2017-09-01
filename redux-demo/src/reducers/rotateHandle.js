import * as actionTypes from '../constants/rotateHandle'

const initialState = {isRotate:false}

export default function rotateHandle (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ROTATE_HANDLE:
            return action.data
        default:
            return state
    }
}
