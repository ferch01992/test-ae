import { ACTION_FILTER } from 'Constants/store.js'

export default ( state = {}, action = {} ) => {
    if( !state ) {
        return null
    }

    let newState = state;

    const { type, payload } = action;

    if( type === ACTION_FILTER.SET_ACTION_FILTER ) {
        if ( payload === "students" ) {
            newState = { ...state,  ...{ hogwartsStudent : true, hogwartsStaff : false } }
        } else if ( payload === "staff" ) {
            newState = { ...state, ...{ hogwartsStudent : false, hogwartsStaff : true } }
        }
    }

    return newState
}
