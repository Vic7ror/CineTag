import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "../CabecalhoLinks";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/"> 
        <img src="/imagens/logo.png" alt="Logo CineTag" />
      </Link>
      <nav>
        <CabecalhoLink url="/">Home</CabecalhoLink>
        <CabecalhoLink url="/Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
