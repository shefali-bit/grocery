import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import "../../App.css"
import {deleteProduct, getProducts} from "../../actions/ProductActions";
class CustomerProductItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    onDeleteClick=(productId)=>{
       
        console.log('--------ProductItemComponent:onDeleteClick Called--------')
        this.props.deleteProduct(productId);
        
        //console.log(id);
       }
    componentDidMount(){
       // axios.get("http://localhost:8085/api/v2/all").then(c=>this.setState({products:c.data}));
        this.props.getProducts();
    }


    render(){
        const {products} =  this.props.products;         
        return(
            
            <div>               
                 
                        {/* <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th> Product Price</th>
                                    <th>Product Quantity</th>
                                    <th>Product Category </th>                                   
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                            {
                                console.log(products),
                                    products.map(
                                        (product) => 
                                        <tr key = {product.productId}>                                        
                                             <td> {product.productName} </td>   
                                             <td> {product.price}</td>
                                             <td> {product.quantity}</td>
                                             <td> {product.categoryName}</td>

                                             <td>
                                                 <Link to={`/updateProduct/${product.productId}`} className="btn btn-sm btn-info">Update</Link>
                                                 <button className="btn btn-sm btn-danger"  onClick={this.onDeleteClick.bind(this,product.productId)}>Delete </button>
                                                 <Link to={`/viewProduct/${product.productId}`} className="btn btn-sm btn-info" >View </Link>

                                             </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>

                 </div> */}
                 <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product.productId}>
                           
                           <div className="content">
                             
                               <span>${product.price}</span>
                               <br/>
                               <img src= {product.image} alt=""/>
                               <span>{product.productName}</span>
                               <p className="para">{product.description}</p>
                               <p >{product.categoryName}</p>
                               <p className="stock">In stock</p>
                               <Link to="/cart"className="btn btn-sm btn-info"  style={{marginRight: "10px"}}>Add to cart</Link>
                               <Link to={`/AddPaymentComponent`} className="btn btn-sm btn-info" style={{marginRight: "10px"}} >Buy now </Link>
                               {/* <Link to={`/updateProduct/${product.productId}`} className="btn btn-sm btn-info">Update</Link>
                                                 <button className="btn btn-sm btn-danger"  onClick={this.onDeleteClick.bind(this,product.productId)}>Delete </button> */}
                                                 <Link to={`/customerView/${product.productId}`}  style={{marginRight: "10px"}}className="btn btn-sm btn-info" >View </Link>

                           </div>
                       </div>
                   ))
               }
            </div>

            </div>
            
        );
    }
}
CustomerProductItem.propTypes={
    getProducts:PropTypes.func.isRequired,
     deleteProduct:PropTypes.func.isRequired

}
const mapStateToProps=(state)=>({
    products:state.products
});

export default connect(mapStateToProps,{getProducts,deleteProduct})(CustomerProductItem);