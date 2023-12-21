import "./index.css";

const Colaborador = ({ nome, cargo, imagem, primaryColor }) => {
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
