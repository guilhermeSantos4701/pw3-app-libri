import './App.css'

import CardBooks from './components/CardBooks'

function App() {

  return (
    // fragments
    <>  
      <CardBooks
        titulo= 'BTK: Máscara da Maldade'
        autor= 'Dennis Lynn Rader'
      /> 

      <CardBooks
        titulo= 'A paciente silenciosa'
        autor= 'Alex Michaelides'
      />

      <CardBooks
        titulo= 'O mítico homem-mês'
        autor= 'Fred Brooks'
      /> 
    </>
  )
}

export default App
