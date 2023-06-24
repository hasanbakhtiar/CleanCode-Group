const initialState = [];

export const blogReducer = (state=initialState,action)=>{
            switch (action.type) {
                case "ADD_BLOG":
                    return [...state,action.value];
            
                default:
                    return state
            }
}