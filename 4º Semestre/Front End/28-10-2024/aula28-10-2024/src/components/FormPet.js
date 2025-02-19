import { useState } from 'react';


function FormPet() {
  const [formData, setFormData] = useState({
    nome: '',
    nasc: '',
    peso: '',
    cor: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui poderia ser feita a lógica para enviar os dados para o backend
  };

  return (
    <div className="form-pet">
      <h2>Cadastro de Pets</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome: <input type="text" name="nome" value={formData.nome} onChange={handleChange} required /></label>
        <label>Data de Nascimento: <input type="date" name="nasc" value={formData.nasc} onChange={handleChange} required /></label>
        <label>Peso: <input type="number" name="peso" step="0.01" value={formData.peso} onChange={handleChange} /></label>
        <label>Cor: <input type="text" name="cor" value={formData.cor} onChange={handleChange} /></label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormPet;
