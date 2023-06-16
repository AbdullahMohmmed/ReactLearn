import Intro from "../PartSystem/Intro";
import Slider from "../PartSystem/Slider";

function Home(props){

    const img = ['images/caf1.jpg', 'images/caf2.jpg','images/caf3.jpg','images/caf4.jpg','images/caf5.jpg','images/caf6.jpg','images/cof1.jpg'];
    return(
    
    <>
    <Slider srcImg={img}  />
    
    <Intro/>
    </>
    
    )
    
    
    }
    export default Home;