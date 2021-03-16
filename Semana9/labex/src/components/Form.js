import React from 'react';
import "./Form.css";
import useForm from "./useForm";

export default function App() {
  const [form, onChange, clearFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    duration: 0
  });

  const onClickButton = (event) => {
    event.preventDefault();
    console.log(form);
    clearFields();
    // axios.post("link", form, headers...)
  };

  return (
    <div className="App">
      <h1>Cadastro</h1>
      <form onSubmit={onClickButton}>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder={"Name"}
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
        />
        <input
          name="planet"
          value={form.planet}
          onChange={onChange}
          placeholder={"Planet"}
          required
          pattern={"^.{3,}"}
          title={"O planeta deve ter no mínimo 3 caracteres"}
        />
        <input
          name="date"
          value={form.date}
          onChange={onChange}
          required
          type="date"
        />
        <input
          
        />
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder={"Description"}
          required
          pattern={"^.{10,}"}
        >
        </textarea>
        
        <input
          name="duration"
          value={form.duration}
          onChange={onChange}
          placeholder={"Trip durantion"}
          required
          type="number"
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );
}
