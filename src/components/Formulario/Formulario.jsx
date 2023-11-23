import "./Formulario.css";
import Input from "../input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { useState } from "react";

function Formulario() {
  const options = [
    { value: "programação", label: "Programação" },
    { value: "front-end", label: "Front-End" },
    { value: "devops", label: "DevOps" },
    { value: "data-science", label: "Data Science" },
    { value: "ux-design", label: "Ux e Design" },
    { value: "mobile", label: "Mobile" },
    { value: "inovacao-gestao", label: "Inovação e Gestão" },
  ];

  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [imagem, setImage] = useState();
  const [time, setTime] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e.value);
  };

  return (
    <section className="formulario">
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <h2>Preencha os dados para criar o card de colaborador</h2>
        <Input
          required={true}
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          Id="nome"
          valueInput={nome}
          setValueInput={(valueInput) => setNome(valueInput)}
        />
        <Input
          required={true}
          type="text"
          label="Cargo"
          placeholder="Digite seu cargo"
          Id="cargo"
          valueInput={cargo}
          setValueInput={(valueInput) => setCargo(valueInput)}
        />
        <Input
          type="text"
          label="Imagem"
          placeholder="Cole o link da Imagem"
          Id="imagem"
          valueInput={imagem}
          setValueInput={(valueInput) => setImage(valueInput)}
        />
        <Select
          required={true}
          label="Time"
          Id="Time"
          valueInput={time}
          options={options}
          setValueInput={(valueInput) => setTime(valueInput)}
        />

        <Button>Criar card</Button>
      </form>
    </section>
  );
}

export default Formulario;
