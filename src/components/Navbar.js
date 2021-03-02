import React from "react";
import { NavLink, Link } from "react-router-dom";
import s from "../styles/navbar.module.scss";
import LanguageSelect from "../languageSelect";
import { useTranslation } from "react-i18next";

export default function Navbar() {

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <nav className={s["navbar-items"]} >
        <Link to="/" className={s["navbar-logo"]}>
          <img src="/img/poke.png" alt="Poke - logo" />
        </Link>
        <div className={s["links"]}>
          <ul>
            <li>
              <NavLink activeClassName={s["active"]} exact to="/">
                Pokemons
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={s["active"]} to="/pokemon/">
                {t("Poke_Detail")}
              </NavLink>
            </li>
          </ul>
        </div>

      </nav>
      <div className={s["language-select"]}>
        <LanguageSelect />
      </div>
    </React.Fragment>
  );
}
