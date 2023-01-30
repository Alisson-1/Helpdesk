import { ContainerSideBar, ContainerIcon,} from "./styles";
import { FCLogo } from "./svg/fc";
import UserIcon from './svg/UserIcon.svg'
export const SideBarLeft = () => {
    return(
       <ContainerSideBar>
      
        <FCLogo/>
       
        <ContainerIcon>

        </ContainerIcon>
       
        <img src ={UserIcon}></img>
        
       </ContainerSideBar> 
    );
}