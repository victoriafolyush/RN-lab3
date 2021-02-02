

export default function(state = {}, action){
    switch(action.type){
        case "GAMES_FETCH":
            return {
                ...state,
                gamesList:action.payload
            }
        default:
            return state
    }
}