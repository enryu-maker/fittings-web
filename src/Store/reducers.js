const initialState = {
    access: null,
    cart: [],
    cartOpen: false,
    category: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload,
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
