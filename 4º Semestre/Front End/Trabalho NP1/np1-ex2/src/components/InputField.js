import React from 'react';
import './InputField.css';

// Define o componente funcional 'InputField' que recebe props desestruturadas: 'label', 'type', 'name', 'value' e 'onChange'
const InputField = ({ label, type, name, value, onChange }) => {
  return (
    // Retorna um contêiner div com a classe 'input-field' para envolver o rótulo e o campo de entrada
    <div className="input-field">
      {/* Renderiza o elemento <label> apenas se a prop 'label' for passada.
          O atributo 'htmlFor' associa o rótulo ao campo de entrada usando o nome fornecido em 'name'. */}
      {label && <label htmlFor={name}>{label}</label>}
      
      {/* Campo de entrada do formulário que usa as props fornecidas para definir suas características. */}
      <input
        type={type} // Define o tipo do campo de entrada (por exemplo, 'text', 'email', 'password', etc.)
        name={name} // Define o nome do campo, utilizado para identificar o campo ao lidar com eventos e estados
        value={value} // Define o valor do campo com base na prop 'value', que geralmente vem do estado do componente pai
        onChange={onChange} // Define o manipulador de evento 'onChange' que é chamado toda vez que o valor do campo muda
        required // Define o campo como obrigatório, evitando que o formulário seja enviado sem preenchê-lo
      />
    </div>
  );
};

export default InputField;
