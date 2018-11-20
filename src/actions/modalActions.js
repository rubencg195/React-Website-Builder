export const TOGGLE_MODAL = 'modal:toggleModal';
export const SELECT_MODAL_BUILDER = 'modal:selectModalBuilder';

export function toggleModal(){
  return {
      type: TOGGLE_MODAL
  }
}

export function selectModalBuilder(Builder){
  return {
      type: SELECT_MODAL_BUILDER,
      payload: Builder
  }
}
