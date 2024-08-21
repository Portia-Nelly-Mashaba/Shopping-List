import { FAIL_REQUEST, GET_SHOPPING_LIST, MAKE_REQUEST, DELETE_ITEM, ADD_ITEM, UPDATE_ITEM, GET_USER_OBJECT } from "./ActionType";

const initialState = {
    loading: true,
    ShoppingList: [],
    itemObject: {},
    errorMessage: ''
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            };
        case GET_SHOPPING_LIST:
            return {
                ...state,
                loading: false,
                errorMessage: '',
                ShoppingList: action.payload,
                shoppingObject: {}
            };
        case DELETE_ITEM:
            return {
                ...state,
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                loading: false
            }

        case UPDATE_ITEM:
            return {
                ...state,
                loading: false
            }

        case GET_USER_OBJECT:
            return {
                ...state,
                loading: false,
                itemObject: action.payload
            }
        default:
            return state;
    }
};
