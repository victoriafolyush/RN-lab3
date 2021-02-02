import firebase from '../fb'

export function getGames () {
    return (dispatch) => {
        firebase.database().ref('/games').on('value', snapshot => {
                dispatch({
                    type: "GAMES_FETCH", 
                    payload:snapshot.val()
                })
        })
    }
}

export function postGame(
    storeName, 
    developer, 
    publisher,
    supportedSystems,
    lastRecordUpdate,
    releaseDate) {
    return (dispatch) => {
        firebase.database().ref('/games').push({
            storeName, 
            developer, 
            publisher,
            supportedSystems,
            lastRecordUpdate,
            releaseDate})
    }
}

export function deleteGame (key) {
    return (dispatch) => {
        firebase.database().ref(`/games/${key}`).remove()
    }
}

export function editGame (key, title, content) {
    return (dispatch) => {
        firebase.database().ref(`/games`).child(key).update({title, content})
    }
}

