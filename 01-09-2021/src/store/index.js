import React from 'react'
import {createStore} from 'redux'


    
    const speakAction = (text)=>{
        return{
            type:'SPEAK',
            text
        }
    }
    const speakReducer = (state = {},action)=>{
        switch(action.type){
            case 'SPEAK':
                return {text: action.text};
            default:
                return state;
        }
    }
    const store=createStore(speakReducer);
    store.subscribe(()=>{
        console.log("state changed");
        console.log(store.getState());
    })
    store.dispatch(speakAction("hii"));
    store.dispatch(speakAction("hello"));
 export default store; 