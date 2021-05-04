import React, { Component } from 'react'
import OrderService from '../../services/OrderService';
import './CreateOrder.css';


class CreateOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            orderId: this.props.match.params.orderId,    
            userName: '',
            orderDate: '',
            orderStatus: ''
                    
        }
      
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeOrderDateHandler = this.changeOrderDateHandler.bind(this);
        this.changeOrderStatusHandler = this.changeOrderStatusHandler.bind(this);
        this.saveOrUpdateOrder = this.saveOrUpdateOrder.bind(this);
    }

    saveOrUpdateOrder = (i) => {
        i.preventDefault();
        let order = {userName: this.state.userName,
            orderDate: this.state.orderDate,
             orderStatus: this.state.orderStatus};
        console.log('order => ' + JSON.stringify(order));
            OrderService.createOrder(order).then(res =>{
                console.log("Creating order");
                this.props.history.push('/order');
            });
        }   
    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }
    changeOrderDateHandler= (event) => {
        this.setState({orderDate: event.target.value});
    }
    changeOrderStatusHandler= (event) => {
        this.setState({orderStatus: event.target.value});
    }

    cancel(){
        this.props.history.push('/order');
    }

    render() {
        return (
            <div  className="addOrder">
                <br></br>
                   <div className = "container"> 
                              {
                                    <h1 className="text-center" style={{color:"green"}}>Add Order</h1>
                                }
                        <div className = "row" style={{alignItems: "center",
    marginLeft:"30%",
    width: "80%",
    opacity: "0.6"}} >
                            <div className = "card col-md-6 offset-md-3 offset-md-3"  >
                                
                                <div className = "card-body">
                                
                                    <form>
                                    
                                    
                                        <div className = "form-group">
                                       
                                            <label> User Name: </label>
                                            <input placeholder="User Name" name="userName " className="form-control" 
                                            value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label>Order Date: </label>
                                            <input placeholder="Order Date" name="orderDate" className="form-control" 
                                            value={this.state.orderDate} onChange={this.changeOrderDateHandler}/>
                                        </div>
                                       
                                    
                                        <div className = "form-group">
                                            <label> orderStatus: </label>
                                                 <input placeholder="orderStatus" name=" orderStatus" className="form-control" 
                                                value={this.state.orderStatus} onChange={this.changeOrderStatusHandler}/>
                                        </div>
                                       
                                       
        
                                        <button block={true} className="btn btn-success" onClick={this.saveOrUpdateOrder}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}




export default CreateOrderComponent 
