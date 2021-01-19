import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';
// import data from './data'
import { v4 as uuidv4 } from 'uuid';

export const cartState = atom({
  key: 'cartState',
  default: 
  [],

});
 

// export const cartState = selector({
//   key: 'cartState',
//   get: ({ get }) => {
//     const totalCost = get(cart).reduce((a, b) => a + b, 0);
   
   
//   return {
//     totalCost,

//   }
// }
// });



// export const foodState = selector({
//   key: 'foodState',
//   get: ()=> fetchFood()
// })

// export const addFood = selector({
//   key: 'addFood',
//   set: ({set, get}, newFood) => {
//     set(cart, [...get(cart),newFood])
//     console.log(...get(cart));
//   },

// })

export const addFood = selector({
  key: 'addFood',
  set: ({ set, get }, newValue) => set(cartState, [...get(cartState),newValue]),


});



