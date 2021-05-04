import React from 'react';
import {getProduct} from '../../actions/ProductActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import "../../App.css"
class ViewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
           productId:'',
            productName:'',
            image:'',
            price:'',
            quantity:'',
           categoryName:'',
           description:''
        }
    }
    componentDidMount(){
        const {productId} = this.props.match.params;
        
      this.props.getProduct(productId,this.props.history);
        //axios.get("http://localhost:8080/api/v2/"+productId).then(c=>this.setState({prod:c.data}));
       
       
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
             productId,
            productName,
            price,
            quantity,
            categoryName,
            description  ,
            image  
         }=nextProps.product;
 
         this.setState({
            productId,
            productName,
            price,
            quantity,
            categoryName ,
            description,
            image
                        
         });
     }
    render(){
       
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">View Product</h5>
                        <hr />
                        
                            <div className="view">
                            <h4>{this.state.productName}</h4>
                               <img src= {this.state.image } alt=""/> 
                               <span>Price= ${this.state.price}</span> 
                               <br/>
                              <div className="des">                              
                                  <p>{this.state.description}</p>
                              </div>                            
                              <Link to="/dashboard" className="btn btn-lg btn-info">Back</Link>
                            </div>
                        
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
ViewProduct.propTypes = {
    getProduct:PropTypes.func.isRequired,
    product:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.products.product
    
  });

export default connect(mapStateToProps,{getProduct})(ViewProduct); 