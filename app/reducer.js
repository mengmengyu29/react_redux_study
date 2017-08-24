export default (state = {"a" : 8 ,"b" : 23}, action) => {
	if(action.type == "JIAN_A"){
		return {
			...state , 
			"a" : state.a - 1
		}
	}else if(action.type == "JIA_A"){
		return {
			...state , 
			"a" : state.a + 1
		}
	}
	return state;
}