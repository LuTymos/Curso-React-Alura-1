import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Banner from "./components/banner/Banner";
import Time from "./components/Time";
import Rodape from "./components/Footer";
import { IColaborador } from "./shared/interfaces/iColaborador";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      value: "programação",
      label: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      value: "front-end",
      label: "Front-End",
      cor: "#82cffa",
    },
    {
      id: uuidv4(),
      value: "devops",
      label: "DevOps",
      cor: "#e06b69",
    },
    {
      id: uuidv4(),
      value: "data-science",
      label: "Data Science",
      cor: "#a6d157",
    },
    {
      id: uuidv4(),
      value: "ux-design",
      label: "Ux e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      value: "mobile",
      label: "Mobile",
      cor: "#FFbA05",
    },
    {
      id: uuidv4(),
      value: "inovacao-gestao",
      label: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

<<<<<<< HEAD:src/App.tsx
  const novoColaborador = (colaborador: IColaborador) => {
=======
  function deletarColaborador(id) {
    console.log("deletando colaborador:", id);
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudandoCor(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  const novoColaborador = (colaborador) => {
>>>>>>> e613e39d491921ddd63f65e6117f570af71bb5db:src/App.jsx
    setColaboradores([...colaboradores, colaborador]);
  };

  function alterarFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner imagem={"banner"} alt={"Banner Principal do Organico"} />
      <Formulario
        cadastrarTime={cadastrarTime}
        cadastroColaborador={(colaborador) => novoColaborador(colaborador)}
        times={times}
      />
      {times.map((time) => (
        <Time
          key={time.label}
          nome={time.label}
          id={time.id}
          mudandoCor={mudandoCor}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.value
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={alterarFavorito}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
