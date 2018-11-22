import { 
  TOGGLE_MODAL, 
  toggleModal ,
  SELECT_MODAL_BUILDER,
  selectModalBuilder,
  changeModalContent,
  CHANGE_MODAL_CONTENT,
}  from './modalActions';

import { 
  ADD_SECTION, 
  DELETE_SECTION, 
  addSection, 
  deleteSection, 
}  from './structureActions';

export default {
    modalActions : {
        constants: {
            TOGGLE_MODAL : TOGGLE_MODAL,
            SELECT_MODAL_BUILDER: SELECT_MODAL_BUILDER,
            CHANGE_MODAL_CONTENT : CHANGE_MODAL_CONTENT,
        },
        methods: {
            toggleModal: toggleModal, 
            selectModalBuilder: selectModalBuilder,
            changeModalContent : changeModalContent,
        }
    },
    structureActions : {
      constants: {
        ADD_SECTION : ADD_SECTION, 
        DELETE_SECTION : DELETE_SECTION,
      },
      methods: {
        addSection : addSection, 
        deleteSection  : deleteSection,  
      }
  }
}