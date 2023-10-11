import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../redux/reducers/productsSlice";
import { useDispatch } from "react-redux";
import '../Assets/productslist.css'

const ProductsList = () => {
    const products = useSelector((state) => state.productsReducer.products);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAPI = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/Sheshant-Manure/products-api/products');
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
            {console.log(products)}
            { products.map((product, i)=>(
                    <div key={i} className='product-box'>
                        <li>{product.name}</li>
                        <img src={product.imgURL} width="50px" alt={product.id} /><br/>
                        <span>&#8377; {product.price} /-</span>
                    </div>
                    ))
            }
        </ol>
    </div>
  )
}

export default ProductsList;
