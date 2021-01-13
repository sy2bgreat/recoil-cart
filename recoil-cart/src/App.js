import './App.css';
import 'normalize.css';
import { cart, cartState, addFood } from './store/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import apple from './icons/apple.svg';
import carrot from './icons/carrot.svg';
import hotdog from './icons/hotdog.svg';
import iceCream from './icons/icecream.svg';
import pepperHot from './icons/pepper-hot.svg';
import pizzaSlice from './icons/pizza-slice.svg';

const ids = [
  { name: 'Apple', src: apple, id:1},
  { name: 'Carrot', src: carrot, id:2},
  { name: 'Hotdog', src: hotdog, id:3},
  { name: 'Ice cream', src: iceCream, id:4 },
  { name: 'Pepper', src: pepperHot, id:5 },
  { name: 'Pizze Slice!', src: pizzaSlice, id:6 },
];


function App() {
  const { totalQty } = useRecoilValue(cartState);
  const setAddFood = useSetRecoilState(addFood);
  return (
    <section>
      <div className="home-cart">Cart : {totalQty} </div>
    <div className="home-card_container">
    {ids.map((list, index) => (
    <div className="home-card" key={index}>
      <img src={list.src} className="home-card_img"></img>
      <h3>{list.name}</h3> <h4>price: {list.id}</h4>
      <button onClick={() => setAddFood(list.id)}>add</button>
    </div>
    ))}

    
    </div>
    
  </section>
  );
}

export default App;
