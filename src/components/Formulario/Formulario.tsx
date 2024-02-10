import "./Formulario.css";
import Input from "../input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { useState } from "react";
import { IColaborador } from "../../shared/interfaces/iColaborador";
import { ITime } from "../../shared/interfaces/iTime";

interface FormularioProps {
  cadastroColaborador: (colaborador: IColaborador) => void;
  times: ITime[];
}

function Formulario({ cadastroColaborador, times }: FormularioProps) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImage] = useState("");
  const [time, setTime] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cadastroColaborador({ nome, cargo, imagem, time });
    setCargo("");
    setNome("");
    setImage("");
    setTime("");
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
          options={times}
          setValueInput={(valueInput) => setTime(valueInput)}
        />

        <Button>Criar card</Button>
      </form>
    </section>
  );
}

export default Formulario;
