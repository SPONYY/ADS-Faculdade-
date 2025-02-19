
import React from 'react';
import './SubmitButton.css';

// Define o componente funcional 'SubmitButton' que recebe uma prop 'label'
const SubmitButton = ({ label }) => {
  return (
    // Renderiza um elemento <button> com o tipo 'submit' e a classe 'submit-button'
    <button type="submit" className="submit-button">
      {/* Exibe o texto do botão, que é passado como a prop 'label' */}
      {label}
    </button>
  );
};

export default SubmitButton;
