import './App.css';
import 'normalize.css';
import { useState, useEffect } from 'react';
import {  addFood, cartState } from './store/atom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Route, Router,  } from 'react-router-dom';
import apple from './icons/apple.svg';
import carrot from './icons/carrot.svg';
import hotdog from './icons/hotdog.svg';
import iceCream from './icons/icecream.svg';
import pepperHot from './icons/pepper-hot.svg';
import pizzaSlice from './icons/pizza-slice.svg';
import { v4 as uuidv4 } from 'uuid';

const mockData = [
  { name: 'Apple', src: apple, prc:1, id: uuidv4()},
  { name: 'Carrot', src: carrot, prc:3, id:uuidv4()},
  { name: 'Hotdog', src: hotdog, prc:5, id:uuidv4()},
  { name: 'Ice cream', src: iceCream, prc:6, id:uuidv4()},
  { name: 'Pepper', src: pepperHot, prc:8, id:uuidv4()},
  { name: 'Pizze Slice!', src: pizzaSlice, prc:2, id:uuidv4()}
]



function App() {

const [cart, setCart ] = useRecoilState(cartState)
const setAddFood = useSetRecoilState(addFood);

  useEffect(() => {
    setCart(mockData)
    console.log(cart);
    
  },[])
  return (
    <section>   
    { <div className="home-card_container">
    {cart.map((list, index) => (
    <div className="home-card" key={index}>
      <img src={list.src} className="home-card_img"></img>
      <h3>{list.name}</h3> <h4>price: ${list.prc}</h4>
      <button onClick={() => setAddFood(list.id)}>add</button>
    </div>
    ))} 
    </div> }
    <div>
    </div>
  </section>
 
  );
}

export default App;
