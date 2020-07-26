import { ADD_CARD, DELETE_CARD, ADD_COLUMN, DELETE_COLUMN } from "./reducers"
let nextCardId = 0;
let nextColumnId = 0;

export const addCardAction = payload => ({
    type: ADD_CARD,
    payload: {
        ...payload,
        cardId: nextCardId++
    }
})

export const deleteCardAction = payload => ({
    type: DELETE_CARD,
    payload
})

export const addColumnAction = payload => ({
    type: ADD_COLUMN,
    payload: {
        ...payload,
        columnId: nextColumnId++
    }
})

export const deleteColumnAction = payload => ({
    type: DELETE_COLUMN,
    payload
})
