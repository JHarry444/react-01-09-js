export function trainerReducer(state, action) {
    switch (action.type) {
        case "SET_TRAINERS":
            return action.payload;
        case "ADD_TRAINER":
            return [...state, action.payload];
        case "REMOVE_TRAINER":
            return state.filter(trainer => trainer.id !== action.payload);
        default:
            return state;
    }
}