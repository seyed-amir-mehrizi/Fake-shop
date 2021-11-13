
import './App.css';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductsDetail from './containers/ProductsDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Switch>
          <Route path="/" component={ProductListing} />
          <Route path="/product/:productId" component={ProductsDetail} />
          <Route>404 NOT FOUND</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
