import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/265/265674.svg" 
          nome="Wilson Ferreira" 
          descricao="Oi, eu sou o Wilson Ferreira. Sou advogado, professor de inglês e me tornando um Desenvolvedor FullStack, estudante  da Turma Epps da Labenu. Sou extremamente dedicado, amo aprender. Trabalhei em diversos processos judicias e na área consultiva jurídica para empresas e empresários. Atualmente quero algo novo e que eu possa construir com minha criatividade e dedicação, por isso ser desenvolvedor."
        />
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
          <CardPequeno 
            imagem="https://www.flaticon.com/svg/static/icons/svg/1782/1782751.svg"
            nome="E-mail:"
            descricao= "willferreira@labenu.com.br"
          />

          <CardPequeno 
            imagem="https://www.flaticon.com/svg/static/icons/svg/1782/1782742.svg"
            nome="Endereço:"
            descricao= "Belo Horizonte/MG"
          />

          <CardPequeno 
            imagem="https://www.flaticon.com/svg/static/icons/svg/1782/1782853.svg"
            nome="Projetos:"
            descricao= "Labetube - LandPage - BankApp"
          />

          <CardPequeno 
            imagem="https://www.flaticon.com/svg/static/icons/svg/1782/1782802.svg"
            nome="Telefone:"
            descricao= "(31) 98707-1713"
          />  
    </div>
      <div className="page-section-container">
      <h2>Skills</h2>
      <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1548/1548760.svg"
          nome="HTML"
          descricao= ""
        />
      <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1548/1548793.svg"
          nome="CSS"
          descricao= ""
        />
      <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1548/1548791.svg"
          nome="JavaSCript"
          descricao= ""
        />
      
      </div> 


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Dedicando aos projetos da melhor forma possível" 
        />
        
        <CardGrande 
          imagem="https://img1.gratispng.com/20180320/lte/kisspng-amazon-com-computer-icons-the-migrant-circle-amazon-icon-5ab12385c4db99.5542588615215584058063.jpg" 
          nome="Amazon" 
          descricao="Aprimorando a experiência do usuário." 
        />
      </div>
      
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        /> 

         <ImagemButton 
          imagem="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
          texto="LinkedIn" 
        />        
      </div>
    </div>
  );
}

export default App;
