import Actions from '../actions';
let { TOGGLE_MODAL, CHANGE_MODAL_CONTENT }  =  Actions.modalActions.constants;


export default function modalReducer(state = [], {type, payload}){
    switch(type){
        case TOGGLE_MODAL:
            state.openModal = !state.openModal;
            return Object.assign({}, state);
        case CHANGE_MODAL_CONTENT:
            console.log("Changing Content", state, payload);
            state.modalContent = payload;
            return Object.assign({}, state);
    }
    return state;
};