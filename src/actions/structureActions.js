import React from 'react';

export const ADD_SECTION = 'structure:addSection';
export const DELETE_SECTION = 'structure:deleteSection';

export function addSection(Section){
  return {
      type: ADD_SECTION,
      payload: Section
  }
}

export function deleteSection(Section){
  return {
      type: ADD_SECTION,
      payload: Section
  }
}

