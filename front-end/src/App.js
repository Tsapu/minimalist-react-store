import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './components/PLP/Products';
import Cart from './components/cart/Cart';
import Error404 from './404';
import './App.css';

function App() {
  return (   
    <BrowserRouter>
      <Header />
      <main className="main container">
        <Switch>
          <Route exact path={["/", "/categories"]}>
            <Redirect to="/all-products"/>
          </Route>
          <Route exact path="/categories/:category/:product" component={Products}/>
          <Route exact path="/categories/:category" component={Products}/>
          <Route exact path="/all-products" component={Products}></Route>
          <Route exact path="/cart" component={Cart}/>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
