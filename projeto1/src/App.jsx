import './App.css'

import CardBooks from './components/CardBooks'
import capaLivro from './assets/livros/cavernas_aco.jpg'

function App() {

  return (
    // fragments
    <>  
      <CardBooks
        titulo= 'As Cavernas de Aço'
        autor= 'Isaac Asimov'
        imagem={capaLivro}
      />  
    </>
  )
}

export default App
