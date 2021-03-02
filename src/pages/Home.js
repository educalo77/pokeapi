import React, { useEffect, useState } from "react";
import { getAllPokemons } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import '../styles/home.css';

export default function Home() {

  const { t } = useTranslation();

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    getData();
  }, [offset])


  const getData = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    const data = res.data.results;
    const slice = data.slice(offset, offset + perPage)
    const postData = slice.map(pd =>

      <div key={pd.name} className="lista">
        <ul>
          <Link to={`/pokemon/${pd.name}`} className="list_data"> <li >{pd.name}</li></Link>
        </ul>
      </div>)
    setData(postData)
    setPageCount(Math.ceil(data.length / perPage))
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

  const handleOnClick = (e) => {

    console.log(e.target.outerText)
  };


  return (
    <>
      <div className="main">
      <p >{t("Seleccione_un_Pokemon")}:</p>
      </div>
      <div className="App">
        <div  >
          {data}
        </div>
        <div className="container">
          <ReactPaginate
            previousLabel={t("prev")}
            nextLabel={t("next")}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={10}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>
      </div>
    </>
  );
}
