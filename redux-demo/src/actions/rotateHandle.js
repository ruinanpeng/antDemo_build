import * as actionTypes from '../constants/rotateHandle'

export function update(data) {
    return {
        type: actionTypes.ROTATE_HANDLE,
        data
    }
}
