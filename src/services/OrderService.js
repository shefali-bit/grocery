import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8085/orderHistory";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL+'/all');
    }

    createOrder(order){
        return axios.post(ORDER_API_BASE_URL +'/Order',order);
    }

    getOrderById(orderId){
        return axios.get(ORDER_API_BASE_URL + '/' + orderId);
    }

    

    deleteOrder(orderId){
        return axios.delete(ORDER_API_BASE_URL + '/' + orderId);
    }
}

export default new OrderService()




