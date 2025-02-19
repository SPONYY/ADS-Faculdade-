// Importa o React e o hook useState da biblioteca 'react'
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import './FormComponent.css';

// Define o componente funcional 'FormComponent'
const FormComponent = () => {
  // Declara um estado local chamado 'formData' com a função 'setFormData' para atualizar seus valores
  // O estado inicial é um objeto com os campos 'name', 'email', 'password' e 'confirmPassword' definidos como strings vazias
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Função chamada 'handleChange' para atualizar o estado 'formData' conforme os campos de entrada mudam
  // Recebe o evento 'e' e atualiza o valor do campo correspondente com base no nome do campo
  const handleChange = (e) => {
    // Atualiza o estado com o novo valor do campo, usando a sintaxe de propagação '...formData'
    // O '[e.target.name]' corresponde ao nome do campo do formulário que está sendo alterado
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função chamada 'handleSubmit' para lidar com a submissão do formulário
  // Recebe o evento 'e' e impede o comportamento padrão de recarregar a página
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verifica se a senha e a confirmação de senha são iguais
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!'); // Exibe um alerta se as senhas forem diferentes
    } else {
      alert('Registro bem-sucedido!'); // Exibe um alerta de sucesso se as senhas forem iguais
    }
  };

  // Função chamada 'handleClear' para redefinir o estado do formulário, limpando todos os campos
  const handleClear = () => {
    // Define todos os valores do 'formData' como strings vazias, resetando o formulário
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  // Retorna o JSX que representa o layout do componente
  return (
    // Cria um elemento 'form' com uma classe 'form-container'
    // Define a função 'handleSubmit' como manipulador de evento 'onSubmit' para o formulário
    <form className="form-container" onSubmit={handleSubmit}>
      {/* Título do formulário */}
      <h2>Registro de Usuário</h2>
      
      {/* Componente de entrada de dados para o nome do usuário */}
      <InputField
        label="Nome" // Rótulo do campo
        type="text" // Tipo do campo (texto)
        name="name" // Nome do campo (para identificar no estado)
        value={formData.name} // Valor do campo (ligado ao estado)
        onChange={handleChange} // Função chamada quando o valor do campo muda
      />
      
      {/* Componente de entrada de dados para o e-mail do usuário */}
      <InputField
        label="E-mail" // Rótulo do campo
        type="email" // Tipo do campo (email)
        name="email" // Nome do campo
        value={formData.email} // Valor do campo
        onChange={handleChange} // Função chamada quando o valor do campo muda
      />
      
      {/* Componente de entrada de dados para a senha do usuário */}
      <InputField
        label="Senha" // Rótulo do campo
        type="password" // Tipo do campo (senha)
        name="password" // Nome do campo
        value={formData.password} // Valor do campo
        onChange={handleChange} // Função chamada quando o valor do campo muda
      />
      
      {/* Componente de entrada de dados para a confirmação de senha do usuário */}
      <InputField
        label="Confirmação de Senha" // Rótulo do campo
        type="password" // Tipo do campo (senha)
        name="confirmPassword" // Nome do campo
        value={formData.confirmPassword} // Valor do campo
        onChange={handleChange} // Função chamada quando o valor do campo muda
      />
      
      {/* Contêiner para os botões de submissão e limpar */}
      <div className="button-container">
        {/* Componente de botão para registrar, do tipo 'submit' por padrão */}
        <SubmitButton label="Registrar" />
        
        {/* Botão para limpar o formulário, usando o manipulador 'handleClear' */}
        <button type="button" className="clear-button" onClick={handleClear}>
          Limpar
        </button>
      </div>
    </form>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default FormComponent;
