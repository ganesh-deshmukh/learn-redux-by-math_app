import {INC_NUMBER} from '../actions';

export default function performAction(state = {num:0} ,action){

    //  if(action.type =="ADD"){ return action.payload}

    switch(action.type){
        case "INC_NUMBER":
        
        console.log('Action Performed from reducer');
        console.log('state is ',state, '\n action is ', action);
        let num = state.num+1;
        return {num};

        default: 
        console.log('state not matched')
         return state;
         
    }
}