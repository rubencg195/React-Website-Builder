import { 
  TOGGLE_MODAL, 
  toggleModal ,
  SELECT_MODAL_BUILDER,
  selectModalBuilder
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
            SELECT_MODAL_BUILDER: SELECT_MODAL_BUILDER
        },
        methods: {
            toggleModal: toggleModal, 
            selectModalBuilder: selectModalBuilder
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