import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


const Home = () => {
    const navigation = useNavigate();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state ==="loading"? <p>Loading...</p>:
                <Outlet></Outlet>
                

            }
            <Footer></Footer>

        </div>
    );
};

export default Home;