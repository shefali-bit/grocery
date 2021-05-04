import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './components/Home';
import Dashboard from './components/product/Dashboard';
import AddProduct from './components/product/AddProduct';
import ViewProduct from './components/product/ViewProduct';
import UpdateProduct from './components/product/UpdateProduct';
import ViewProductByCategory from './components/product/ViewProductByCategory';
import CustomerDashboard from './components/product/CustomerDashboard';
import AdminDashboard from './components/product/AdminDashboard';
import AddCategory from './components/category/AddCategory';
import CategoryDashboard from './components/category/CategoryDashboard';
import UpdateCategory from './components/category/UpdateCategory';
import ListPaymentComponent from './components/payment/ListPaymentComponent';
import AddPaymentComponent from './components/payment/AddPaymentComponent';
import login from './pages/Login';
import register from './pages/Reg';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import CustomerView from './components/product/CustomerView';
import ListOrderComponent from './components/order/ListOrderComponent';
import CreateOrderComponent from './components/order/CreateOrderComponent';
import ViewOrderComponent from './components/order/ViewOrderComponent';
import UpdateOrderComponent from './components/order/UpdateOrderComponent';


function App() {
  return (
    <>
     <Provider store={store}>
     <BrowserRouter basename={"/grocerydeliverycli"}>
      <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/order" component={ListOrderComponent}/>
     <Route path = "/add-order" component = {CreateOrderComponent}></Route>
     <Route path = "/view-order/:orderId" component = {ViewOrderComponent}></Route>
     <Route path = "/update-order/:orderId" component = {UpdateOrderComponent}></Route>
     <Route path="/home" component={Home}/>
     <Route path="/contact" component={ContactUs}/>
     <Route path='/cart' component={Cart}/> 
     <Route path='/login' component={login} />
     <Route path='/ListPaymentComponent' exact component={ListPaymentComponent} />
     <Route path='/AddPaymentComponent' component={AddPaymentComponent} />
     <Route path ='/registration' component={register}/>
     <Route path="/dashboard" component={Dashboard}/>
     <Route exact path="/addProduct" component={AddProduct}/>
     <Route exact path="/viewProduct/:productId" component={ViewProduct}/>
     <Route exact path="/updateProduct/:productId" component={UpdateProduct}/>
     <Route exact path="/viewProductByCategory/:categoryName"component={ViewProductByCategory}/>
     <Route exact path="/customerDashboard"component={CustomerDashboard}/>
     <Route exact path="/adminDashboard" component={AdminDashboard}/>
     <Route exact path="/addCategory" component={AddCategory}/>
     <Route exact path="/categoryDashboard" component={CategoryDashboard}/>
     <Route exact path="/updateCategory/:categoryId" component={UpdateCategory}/>
     <Route exaxt path="/customerView/:productId" component={CustomerView}/>
      </BrowserRouter>
      </Provider>   
    </>
  );
}

export default App;