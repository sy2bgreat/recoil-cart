import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';

export const cart = atom({
  key: 'cart',
  default: [],
});


export const cartState = selector({
  key: 'cartState',
  get: ({ get }) => {
    const totalQty = get(cart).reduce((a, b) => a + b, 0);
  return {
    totalQty
  }
}
});

export const addFood = selector({
  key: 'addFood',
  set: ({set, get}, newFood) => {
    set(cart, [...get(cart),newFood])
  },

})



// const cloneIndex = (items, id) => ({
//     clone: items.map((item) => Object.assign({}, item)),
//     index: items.findIndex((item) => item.id === id),
//   });
  
  // export const AddItem = () => {
  //   const [items, setItems] = useRecoilState(cart);
  //   return (product) => {
  //       const { clone, index } = cloneIndex(items, product.id);
  //       if (index !== -1) {
  //         clone[index].qty += 1;
  //         setItems(clone);
  //       } else { clone[index].qty -= 1;
  //       setItems(clone);
  //       }
  //     }
  // };


  //export default { cart, addItem };