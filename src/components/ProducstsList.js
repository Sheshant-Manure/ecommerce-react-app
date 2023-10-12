import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../redux/reducers/productsSlice";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducers/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/productslist.css'

const ProductsList = () => {

    const notifyAddtoCart = (product) => toast(`${product} was added to the Cart`);
    const notifyRemoveFromCart = (product) => toast(`${product} was removed from the Cart`);

    const products = useSelector((state) => state.productsReducer.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAPI = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/Sheshant-Manure/ecommerce-react-app/products');
            if (!response.ok) {
            throw new Error("Something went wrong!");
            }
            const data = await response.json();
            // console.log(data);
            dispatch(setProducts(data));
        } catch (error) {
            console.error(error);
        }
        }
            fetchAPI();
        }, [dispatch]); 

  return (
    <div className='container'>
        <ol className="centerbox">
            { products.map((product, i)=>(
                    <div key={i} className='product-box'>
                            <li>{product.name}</li>
                            <img src={product.imgURL} width="50px" alt={product.id} /><br/>
                            <div>&#8377; {product.price} /-</div>
                            <div className="cart-btn-container">
                            <button className="cart-button" onClick={()=>{dispatch(addToCart(product));notifyAddtoCart(product.name)}} >Add to Cart</button>
                            <button className="cart-button" onClick={()=>{dispatch(removeFromCart(product));notifyRemoveFromCart(product.name)}} >Remove from Cart</button>
                            <ToastContainer />
                            </div>;
                    </div>
                    ))
            }
        </ol>
    </div>
  )
}

export default ProductsList;
