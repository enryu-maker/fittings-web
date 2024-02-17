export const OpenCartAction = (status) => {
    return async dispatch => {
        dispatch({
            type: 'OPEN_CART',
            payload: status,
        })
    }
}