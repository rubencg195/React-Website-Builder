export default function structureReducer(state = [], {type, payload}){
    switch(type){
        case 'updateModal':
            return payload;
    }
    return state;
};