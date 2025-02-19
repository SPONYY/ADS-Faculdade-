// Importa o React da biblioteca 'react'
import React from 'react';

// Importa o componente 'FormComponent' do diretório 'components'
// Este componente será utilizado para renderizar o formulário de registro de usuário na aplicação
import FormComponent from './components/FormComponent';

// Importa o arquivo CSS 'App.css' para estilização da aplicação
// Este arquivo é opcional e pode ser usado para definir estilos globais para o componente 'App'
import './App.css';

// Define o componente funcional 'App'
function App() {
  return (
    // Retorna um contêiner div com a classe 'App'
    // Essa div é usada como elemento principal da aplicação, onde outros componentes serão renderizados
    <div className="App">
      {/* Renderiza o componente 'FormComponent' dentro do contêiner 'App' */}
      <FormComponent />
    </div>
  );
}

// Exporta o componente 'App' para ser utilizado como ponto de entrada principal da aplicação React
export default App;
