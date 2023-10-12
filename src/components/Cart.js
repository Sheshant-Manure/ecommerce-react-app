import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/cart.css'

const Cart = () => {

    const notifyRemoveFromCart = (product) => toast(`${product} was removed from the Cart`);

    const items = useSelector((state) => state.cartReducer.items);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <div className="cart-container">
                {
                    items.length === 0 ? <div className="empty-cart"><h1>Your Cart is empty!</h1></div>: 
                    items.map((item, i)=>(
                        <div key={i} className='card'>
                            <div className="box1">
                                <img src={item.imgURL} width='60px' alt={item.name} />
                            </div>
                            <div className="box2">
                                <h3>{item.name}</h3>
                                <h4>&#8377; {item.price}</h4>
                                <p>{item.description}</p>
                            </div>
                            <div className="box3">
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png"
                                onClick={() => {notifyRemoveFromCart(item.name);dispatch(removeFromCart(item));}}
                                width='18px' height='18px' alt="delete-item"/>
                                <ToastContainer />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;
