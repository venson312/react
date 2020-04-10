const rightListReducer = (prevState=[],action)=>{
    // console.log(action)
    // “修改状态”
    let {type,payload} = action
    switch(type){
    
        case "SetRightList":
            var newstate = [...prevState,...payload]
            return newstate
        default:
            return prevState
    }

}// 只要状态已返回， 自动同步了
export default rightListReducer
