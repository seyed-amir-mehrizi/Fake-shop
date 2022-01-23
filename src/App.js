
import './App.css';
import Header from './containers/Header';
import { Switch, Route } from 'react-router-dom'
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={ProductList} />
        <Route path='/product/:id' exact component={ProductDetail} />
        <Route>404 Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
