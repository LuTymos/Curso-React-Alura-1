import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Banner from "./components/banner/Banner";
import Time from "./components/Time";
import Rodape from "./components/Footer";

function App() {
  const times = [
    {
      value: "programação",
      label: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      value: "front-end",
      label: "Front-End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      value: "devops",
      label: "DevOps",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      value: "data-science",
      label: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      value: "ux-design",
      label: "Ux e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      value: "mobile",
      label: "Mobile",
      primaryColor: "#FFbA05",
      secondaryColor: "#FFF5D9",
    },
    {
      value: "inovacao-gestao",
      label: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const novoColaborador = (colaborador) => {
    console.log(colaboradores);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastroColaborador={(colaborador) => novoColaborador(colaborador)}
        times={times}
      />
      {times.map((time) => (
        <Time
          key={time.label}
          nome={time.label}
          primaryColor={time.primaryColor}
          secondaryColor={time.secondaryColor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.value
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
