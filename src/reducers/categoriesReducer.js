import { GET_CATEGORY, GET_CATEGORIES, DELETE_CATEGORY } from "../actions/type";

const initialState={
    categories:[],
    category:{}
};

export default function foo(state=initialState,action){
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories:action.payload
            }
        case GET_CATEGORY:
            return{
                ...state,
                category:action.payload
            }
            case DELETE_CATEGORY:
            return{
                ...state,
                categories:state.categories.filter(
                    category=>category.categoryId!==action.payload
                )
            };
        default:
            return state;
    }
}