import logoAstromatch from './logoAstromatch.png';
import tinderIcon from './tinderIcon.png';
import HeaderBar from './styled';

export const Header = (props) => {
    
    return (    
        <HeaderBar>
        <img src={logoAstromatch}/>
        <input 
        type= 'image' 
        src={tinderIcon}
        onClick= {props.change}      
        />
        </HeaderBar>
    );
}

export default Header;