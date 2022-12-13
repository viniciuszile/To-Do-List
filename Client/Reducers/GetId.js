export default function GetId(state={value:""},action){
    switch(action.type){
        case "ADD_VALUE":
            return {value:action.data}
        default: return state
    }
}