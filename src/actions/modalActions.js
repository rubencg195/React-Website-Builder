export const TOGGLE_MODAL = 'modal:toggleModal';
export const SELECT_MODAL_BUILDER = 'modal:selectModalBuilder';
export const CHANGE_MODAL_CONTENT = 'modal:changeModalContent';

export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  }
}

export function selectModalBuilder(Builder) {
  return {
    type: SELECT_MODAL_BUILDER,
    payload: Builder
  }
}

export function changeModalContent(content) {
  return {
    type: CHANGE_MODAL_CONTENT,
    payload: content
  }
}