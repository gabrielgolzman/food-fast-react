import { createContext, useState, useEffect } from 'react';
import { useSockets } from '../socket/socket.context';
import axios from 'axios';

import { EVENTS } from '../../config/events';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
   const [products, setProducts] = useState([]);
   const { socket } = useSockets();

   useEffect(() => {
      console.log('Products mounted');
      axios
         .get('http://192.168.0.6:5000/products')
         .then((res) => {
            setProducts(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const addProduct = (newProduct) => {
      axios
         .post('http://192.168.0.6:5000/products', newProduct)
         .then((res) => {
            newProduct = { ...newProduct, _id: res.data.productId };
            setProducts([...products, newProduct]);
            socket.emit(EVENTS.PRODUCTS.NEW_PRODUCT, { newProduct });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const getProduct = (id) => {
      return products[products.findIndex((pro) => pro._id === id)];
   };

   const modifyProduct = (id, product) => {
      axios
         .patch(`http://192.168.0.6:5000/products/${id}`, product)
         .then((res) => {
            let newProducts = [...products];
            newProducts[products.findIndex((pro) => pro._id === id)] =
               res.data.modifiedProduct;
            setProducts(newProducts);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteProduct = (id) => {
      axios
         .patch(`http://192.168.0.6:5000/products/delete/${id}`)
         .then((res) => {
            let newProducts = [...products];
            newProducts.splice(
               products.findIndex((pro) => pro._id === id),
               1
            );
            setProducts(newProducts);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <ProductsContext.Provider
         value={{
            products,
            addProduct,
            getProduct,
            modifyProduct,
            deleteProduct,
         }}
      >
         {children}
      </ProductsContext.Provider>
   );
};
