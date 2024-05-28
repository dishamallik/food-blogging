import Banner from "./Banner";
import Blogs from "./Blogs";
import Brand from "./Brand";
import Newsletter from "./Newsletter";
import Recipe from "./Recipe";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
            <Blogs></Blogs>
            </div>
            <Brand></Brand>
            <Newsletter></Newsletter>
            <Recipe></Recipe>
            
            
            
        </div>
    );
};

export default Home;