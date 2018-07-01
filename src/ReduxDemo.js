import React,{Component} from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component{
    render(){
        const reducer = function(state,action) {
            if(action.type ==="Green"){
                return action.payload;
            }
            return state;
        }

        const store = createStore(reducer, "PEACE");

        store.subscribe(()=>{
            console.log('Store is now => ', store.getState());
        });

        store.dispatch({type:"ATTACK", payload:"Iron Man"})
        store.dispatch({type:"Green", payload:"HULK"})
        
        
        return(
            <div>
                ReduxDemo.                
            </div>
        )
    }

}
export default ReduxDemo;