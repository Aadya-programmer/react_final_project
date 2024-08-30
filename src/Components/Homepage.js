// import {Body} from "../Components/Body"
import { Footer } from "../Reusable/Footer";
import { Header } from "../Reusable/Header";
import { CardComponent } from "./CardComponent"; 
import { WelcomePage } from "./WelcomePage";
export function Homepage(){
    return(
      <>
        <Header/>
        <WelcomePage/>
        <CardComponent/>
        <Footer/>
      </>
    );
}