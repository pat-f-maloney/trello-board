import { combineReducers } from "redux"

export const ADD_COLUMN = "ADD_COLUMN"
export const DELETE_COLUMN = "DELETE_COLUMN"
//const MOVE_COLUMN = "MOVE_COLUMN"

export const ADD_CARD = "ADD_CARD"
export const DELETE_CARD = "DELETE_CARD"
//const MOVE_CARD = "MOVE_CARD"
// todo: add EDIT_CARD


// Card Reducer

const addCardInColumn = (columnArray, action) => {
    return columnArray.map((column, index) => {
        return (index === action.payload.columnId) ? { ...column, cards: [...column.cards, action.payload] } : column
    })
}

const deleteCardInColumn = (columnArray, action) => {
    return columnArray.map((column, index) => {
        return (index === action.payload.columnId)
            ? { ...column, cards: column.cards.filter(card => card.cardId !== action.payload.cardId) }
            : column
    })
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return { columns: addCardInColumn(state.columns, action) }
        case DELETE_CARD:
            return { columns: deleteCardInColumn(state.columns, action) }
        default:
            return state
    }
}

const initialState = {
    columns: []
}

// Column Reducer
const columnReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return { columns: [...state.columns, action.payload] }
        case DELETE_COLUMN:
            return { columns: state.columns.filter(column => column.id !== action.payload.id) }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    columnReducer,
    cardReducer
})