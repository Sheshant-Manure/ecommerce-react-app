import '../Assets/navbar.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {

    const count = useSelector((state)=>state.cartReducer.count);

    return (<>
    <nav>
        <h1>Ecommerce</h1>
        <p>{count}</p>
    </nav>
    </>);
}

export default Navbar;