import { IColaborador } from "../../shared/interfaces/iColaborador";
import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  nome: string;
  primaryColor: string;
  secondaryColor: string;
  colaboradores: IColaborador[];
}

const Time = ({
  nome,
  primaryColor,
  secondaryColor,
  colaboradores,
}: TimeProps) => {
  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderBottomColor: primaryColor }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            time={colaborador.time}
            key={colaborador.nome}
            primaryColor={primaryColor}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
