import { IColaborador } from "../../shared/interfaces/iColaborador";
import "./index.css";

interface ColaboradorProps extends IColaborador {
  primaryColor: string;
}

const Colaborador = ({
  nome,
  cargo,
  imagem,
  primaryColor,
}: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: primaryColor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
