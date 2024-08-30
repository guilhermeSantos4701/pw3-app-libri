import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// import CardBooks from './components/CardBooks'

import NavBar from './components/layout/NavBar'

import Container from './components/layout/Container'

import Home from './components/pages/Home'

import ListBooks from './components/pages/ListBooks'

import CreateBooks from './components/pages/CreateBooks'

// import capaLivro from './assets/livros/cavernas_aco.jpg'

function App() {

  return (
    <>  
      
      {/* Estrutura de Navegação */}
      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element= {<NavBar/>}>
              <Route path='/' element= {<Home/>}/>
              <Route path='/listBooks' element= {<ListBooks/>}/>
              <Route path='/createBooks' element= {<CreateBooks/>}/>
            </Route>

          </Routes>

        </Container>

      </BrowserRouter>

    </>
  )
}

export default App
