const ADD_COLUMN = "ADD_COLUMN"
const DELETE_COLUMN = "DELETE_COLUMN"
const MOVE_COLUMN = "MOVE_COLUMN"

const ADD_CARD = "ADD_CARD"
const DELETE_CARD = "DELETE_CARD"
const MOVE_CARD = "MOVE_CARD"


// Card Reducer

const updateCardInColumn = (columnArray, action) => {
    return columnArray.map((column, index) => {
        return (index === action.payload.columnId) ? { ...column, cards: [...column.cards, action.payload] } : column
    })
}

export const deleteCardInColumn = (columnArray, action) => {
    return columnArray.map((column, index) => {
        return (index === action.payload.columnId)
            ? { ...column, cards: column.cards.filter(card => card.id !== action.payload.id) }
            : column
    })
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return { columns: updateCardInColumn(state.columns, action) }
        case DELETE_CARD:
            return { columns: deleteCardInColumn(state.columns, action) }
        case MOVE_CARD:
        default:
            return state
    }
}

const initialState = {
    columns: []
}

// Column Reducer
export const columnReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COLUMN:
            return { columns: [...state.columns, action.payload] }
        case DELETE_COLUMN:
            return { columns: state.columns.filter(column => column.id !== action.payload.id) }
        case MOVE_COLUMN:

            break;
        default:
            return state
    }
}

