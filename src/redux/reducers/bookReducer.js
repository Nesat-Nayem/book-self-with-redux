import books from '../../fakeData/books.json'
const initialState ={
    discover: books,
    readingList: [],
    finishList: []
}

function bookReucer(state = initialState , action) {
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = {...state, readingList:[ ...state.readingList, action.payload] }
      return newState;
    }

    case "ADD_TO_FINISH_LIST":{
      const newState = {...state, finishList:[ ...state.finishList,action.payload]}
      return newState
    }

    case "REMOVE_FROM_READING_LIST": {
      const newState = { ...state, readingList : state.readingList.filter((book) => book.id !== action.payload) }
       
      return newState;
    }
    case "REMOVE_FROM_FINISH_LIST":{
      const newState = {...state, finishList : state.finishList.filter((book)=> book.id !== action.payload)}
      return newState;
    }
    default:
      return state;
  }
}

export default bookReucer;
