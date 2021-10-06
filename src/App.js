import ProductTable from "./components/ProducTable";
import Layout from "./components/Layout"
const App = ()=> {
  return (
    <div style={{display:"flex"}}>
      <Layout>
    </Layout>
    <div>
      <h1>FoodFast - Web App</h1>
      <ProductTable/>
      </div>
    </div>
  );  
}

export default App;
