import { EXAMPLE_ACTION } from '../actionTypes'

const initialState = {
    text: 'Ready?'
}

export default(state=initialState, action)=>{
    switch(action.type){
        case EXAMPLE_ACTION: {
            const { text } = action.payload
            return {
                ...state,
                text
            }
        }
        default: return state
    }
}