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
    // <div className='container'>
    //     <ol>
    //       {albums.map((album, i)=>(
    //         <div key={i} className='album-box'>
    //           <li><b>{album.title}</b></li>
    //           <div><small>Album Id: {album.id}</small></div>
    //           <div><small>User Id: {album.userId}</small></div>
    //         </div>
    //       ))}
    //     </ol>
    //   </div>
    <div className='container'>
        <ol>
            {console.log(products)}
            { products.map((product, i)=>(
                    <div key={i} className='product-box'>
                        <li>{product.name}{product.imgURL}</li>
                        <img src={product.imgURL} width="50px" alt={product.id} />
                    </div>
                    ))
            }
        </ol>
    </div>
  )
}

export default ProductsList;
