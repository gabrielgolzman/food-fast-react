import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      axios
         .get('http://localhost:5000/products')
         .then((res) => {
            setProducts(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [products]);

   const addProduct = (newProduct) => {
      setProducts([...products, newProduct]);
      axios
         .post('http://localhost:5000/products', newProduct)
         .then((res) => {
            console.log(res);
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
         .patch(`http://localhost:5000/products/${id}`, product)
         .then((res) => {
            console.log(res);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteProduct = (id) => {
      axios
         .patch(`http://localhost:5000/products/delete/${id}`)
         .then((res) => {
            console.log(res);
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
