export const INC_NUMBER ="INC_NUMBER";

export function incrementNumber(num){
    const action = {
        type:"INC_NUMBER",
        num=num,
    }; 
    return action; // const is useless if you won't return it.
}