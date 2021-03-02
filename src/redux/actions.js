import Axios from "axios";

const getAllPokemons = () => async (dispatch) => {
	const { data } = await Axios.get(
		"https://pokeapi.co/api/v2/ability/?limit=60&offset=60"
	);
	dispatch({ type: "GET_ALL_POKES", payload: data.results });
	//  console.log(data, "data");
};

export { getAllPokemons };
