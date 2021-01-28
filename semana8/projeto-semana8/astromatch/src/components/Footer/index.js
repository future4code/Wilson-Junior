import heartIcon from './heartIcon.png';
import deleteIcon from './deleteIcon.png';
import FooterBar from './styled';




export const Footer = (props) => {
    
    return (    
    <FooterBar>
      <input 
      type= 'image' 
      src={deleteIcon}      
      />
            <input 
      type= 'image' 
      src={heartIcon}      
      />
    </FooterBar>
    );
}

export default Footer;