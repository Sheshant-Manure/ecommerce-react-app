import style from '../Assets/navbar.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { toggleNav } from '../redux/reducers/navSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {

    const count = useSelector((state)=>state.cartReducer.count);
    const dispatch = useDispatch();

    return (<>
    <nav>
        <h1>Ecommerce</h1>
        <ul className={style.links}>
            <li onClick={()=>dispatch(toggleNav(true))}>Products</li>
            <li onClick={()=>dispatch(toggleNav(false))}>Cart</li>
        </ul>
        <img src='https://cdn-icons-png.flaticon.com/128/891/891462.png' alt='cart' width='24px' /><p>{count}</p>
    </nav>
    </>);
}

export default Navbar;