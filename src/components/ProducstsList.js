import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../redux/reducers/productsSlice";
import { useDispatch } from "react-redux";

const ProductsList = () => {
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
    <>
    <ul>
        { products.map((product, i)=>
            {
                return(<li key={i}>{product.name}</li>)
            })
        }
    </ul>
    </>
  )
}

export default ProductsList;
