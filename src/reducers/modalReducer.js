import Actions from '../actions';
let { TOGGLE_MODAL }  =  Actions.modalActions.constants;


export default function modalReducer(state = [], {type, payload}){
    switch(type){
        case TOGGLE_MODAL:
            state.openModal = !state.openModal;
            return Object.assign({}, state);
    }
    return state;
};