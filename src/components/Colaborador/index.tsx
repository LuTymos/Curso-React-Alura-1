import { IColaborador } from "../../shared/interfaces/iColaborador";
import "./index.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps extends IColaborador {
  primaryColor: string;
}

const Colaborador = ({
  nome,
  cargo,
  imagem,
  primaryColor,
  aoDeletar,
  id,
  favorito,
  aoFavoritar,
}) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => {
          aoDeletar(id);
        }}
      />
      <div className="cabecalho" style={{ backgroundColor: primaryColor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart
              size={25}
              color="#ff0000"
              onClick={() => {
                aoFavoritar(id);
              }}
            />
          ) : (
            <AiOutlineHeart
              size={25}
              onClick={() => {
                aoFavoritar(id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
