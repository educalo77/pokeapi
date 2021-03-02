import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { Redirect, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import '../styles/pokedetails.css';

export default function PokeDetail() {

	const name = useParams();
	const { t } = useTranslation();

	const [data, setData] = useState();
	const [info, setInfo] = useState();
	const [abilities, setAbilities] = useState();


	const getData = async () => {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.name}/`)
		const data = res.data;
		setInfo(data ? data : '');
		const preImages = Object.values(data.sprites).filter(el => el !== null).slice(0, 4).map(i =>
			<img src={i} alt="" width="200px" />
		)
		setData(preImages)
		const preAbilities = data.abilities.map(i =>
			<h1 className="ability"> {i.ability.name} </h1>
		)
		console.log(preAbilities, 'preAbilities')
		setAbilities(preAbilities);
	}

	useEffect(() => {
		getData();
	}, [])



	return (
		<div className="box">
			<div className="front center">
				<h1 className="pokename">{info ? info.name : ''}</h1>
				<div className="imagenes">
					{data && data.map(e => e)}
				</div>
			</div>
			<div className="back center">
				<div className="abilities">
					<h3 ><span>{t("Height")}: </span> {info ? info.height : ''}</h3>
					<h3 className="weightpoke"><span className="weightpoke">{t("Weight")}: </span> {info ? info.weight : ''}</h3>
				</div>
				<h2 className="ability"><span>{t("Abilities")}: </span> {abilities ? abilities.map(ab => ab) : ''}</h2>
				<div className="moves" >
					<h2 className="movesh2" ><span>{t("Moves")}: </span> {info ? info.moves.slice(0, 15).map(move =>
						<ul className="movesul" >
							<li>{move.move.name}</li>
						</ul>
					) : ''}
					</h2>
				</div>
			</div>
		</div>
	);
}
