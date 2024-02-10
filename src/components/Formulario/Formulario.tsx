import "./Formulario.css";
import Input from "../input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
import { useState } from "react";
import { IColaborador } from "../../shared/interfaces/iColaborador";
import { ITime } from "../../shared/interfaces/iTime";
import { v4 as uuidv4 } from "uuid";

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


function Formulario({ cadastroColaborador, times, cadastrarTime }) {
  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [imagem, setImage] = useState();
  const [time, setTime] = useState();

  const [nomeTime, setNomeTime] = useState();
  const [corTime, setCorTime] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    cadastroColaborador({
      nome,
      cargo,
      imagem,
      time,
      id: uuidv4(),
      favorito: false,
    });
    setCargo("");
    setNome("");
    setImage("");
    setTime("");
  };
  function formatarString(str) {
    // Converter para minúsculas
    let strMinuscula = str.toLowerCase();

    // Substituir espaços por underscores
    let strFormatada = strMinuscula.replace(/ /g, "_");

    return strFormatada;
  }

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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          cadastrarTime({
            label: nomeTime,
            cor: corTime,
            value: formatarString(nomeTime),
          });
        }}
      >
        <h2>Preencha os dados para criar um time</h2>
        <Input
          required
          type="text"
          label="Nome do time"
          placeholder="Digite o nome do time"
          Id="nomeTime"
          valueInput={nomeTime}
          setValueInput={(valueInput) => setNomeTime(valueInput)}
        />
        <Input
          required
          type="color"
          label="Cor do time"
          placeholder="Digite a cor do time"
          Id="corTime"
          valueInput={corTime}
          setValueInput={(valueInput) => setCorTime(valueInput)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
}

export default Formulario;
