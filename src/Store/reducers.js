const initialState = {
    access: null,
    role : 1,
    cart: [],
    cartOpen: false,
    cateogry: [],

};
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload.access,
                role: action.payload.userid
            };
        case "OPEN_CART":
            return {
                ...state,
                cartOpen: action.payload,
            };
        case "CAT":
            return {
                ...state,
                cateogry: action.payload,
            };
        default:
            return state;
    }
};
