import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({
  nome,
  cor,
  colaboradores,
  aoDeletar,
  mudandoCor,
  id,
  aoFavoritar,
}) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(cor, "0.5") }}
      >
        <input
          type="color"
          value={cor}
          className="input-color"
          onChange={(evento) => {
            mudandoCor(evento.target.value, id);
          }}
        />
        <h3 style={{ borderBottomColor: cor }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              time={colaborador.time}
              id={colaborador.id}
              key={colaborador.id}
              primaryColor={cor}
              aoDeletar={aoDeletar}
              favorito={colaborador.favorito}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
