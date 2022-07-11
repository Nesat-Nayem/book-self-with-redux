export function addtoReadingList (payload) {
    return {
        type:'ADD_TO_READING_LIST',
        payload
    }
}

export function removeFromReadingList (payload){
    return{
        type:'REMOVE_FROM_READING_LIST',
        payload
    }
}

export function addToFinishList (payload){
    return {
        type: 'ADD_TO_FINISH_LIST',
        payload
    }
}

export function removeFromFinishList (payload){
    return{
        type:'REMOVE_FROM_FINISH_LIST',
        payload
    }
}
