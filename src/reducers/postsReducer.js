export default function postsReducer(state = [], {type, payload}){
    switch(type){
        case 'updatePost':
            return payload;
    }
    return state;
};