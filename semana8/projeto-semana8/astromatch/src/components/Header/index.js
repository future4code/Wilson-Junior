import logoAstromatch from './logoAstromatch.png';
import tinderIcon from './tinderIcon.png';
import HeaderBar from './styled';

export const Header = (props) => {
    
    return (    
        <HeaderBar>
        <img src={logoAstromatch} alt='logo'/>
        <input 
        type= 'image' alt='Icone mudar página'
        src={tinderIcon}
        onClick= {props.change}      
        />
        </HeaderBar>
    );
}

export default Header;