import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'
import Formulario from './components/Formulario/Formulario'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/product/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path= '/formulario' element={<Formulario/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App