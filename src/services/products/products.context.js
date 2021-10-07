import { createContext, useState } from 'react';

export const ProductsContext = createContext();

let mock = require('../../data/mock.json');

export const ProductsContextProvider = ({ children }) => {
   const [products, setProducts] = useState(mock.menuOptions);

   const addProduct = (newProduct) => {
      setProducts([...products, newProduct]);
   };

   const getProduct = (id) => {
      return products[products.findIndex((pro) => pro.idMenuOption === id)];
   };

   const modifyProduct = (id, product) => {
      let myProductIndex = products.findIndex((pro) => pro.idMenuOption === id);
      products[myProductIndex].optionName = product.optionName;
      products[myProductIndex].unitPrice = product.unitPrice;
      products[myProductIndex].isAvailable = product.switch;
      products[myProductIndex].description = product.description;
   };

   const deleteProduct = (id) => {
      const newProductsArray = products.filter(
         (pro) => pro.idMenuOption !== id
      );
      setProducts([...newProductsArray]);
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
