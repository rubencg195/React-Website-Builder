import Actions from '../actions';
let { ADD_SECTION }  =  Actions.structureActions.constants;


export default function structureReducer(state = [], {type, payload}){
    switch(type){
        case ADD_SECTION:
            state.nav.MainWidget = payload.widget;
            console.log("Changing Section", payload, state);
            return Object.assign({}, state);;

    }
    return state;
};