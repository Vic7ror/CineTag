import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
      <Rodape />
    </>
  );
}

export default Inicio;
