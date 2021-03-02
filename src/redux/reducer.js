function pokesReducer(state = { pokes: [] }, action) {
	switch (action.type) {
		case "GET_ALL_POKES":
			return {
				...state,
				pokes: action.payload,
			};
		default:
			return state;
	}
}

export { pokesReducer };
