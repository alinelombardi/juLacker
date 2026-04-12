// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section style={{
      /* Aqui colocamos a imagem de fundo e uma "capa" azul escura transparente por cima */
      backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(3, 8, 18, 0.95)), url('https://i.ibb.co/tPXZNGf8/36304570-8404844.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', /* Cria um efeito legal quando rola a página */
      color: 'var(--cor-texto-claro)',
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <h1 style={{ 
          fontSize: '3.8rem', 
          color: 'var(--cor-secundaria)', 
          marginBottom: '20px', 
          lineHeight: '1.2',
          textShadow: '0px 4px 15px rgba(0,0,0,0.5)' /* Sombra para o texto saltar da imagem */
        }}>
          Desperte a Consciência dos Seus Ciclos
        </h1>
        
        <p style={{ 
          fontSize: '1.3rem', 
          marginBottom: '50px', 
          fontFamily: 'Montserrat', 
          fontWeight: '300', 
          opacity: 0.9,
          maxWidth: '700px',
          margin: '0 auto 50px auto'
        }}>
          Descubra como a Numerologia pode te ajudar a acessar clareza, direção e propósito para viver a sua jornada com muito mais intenção.
        </p>
        
        <Link 
          to="/mapa-do-ano" 
          className="botao-whatsapp" 
          style={{ padding: '18px 45px', fontSize: '1.2rem' }}
        >
          Descubra o seu momento
        </Link>
        
      </div>
    </section>
  );
}

export default Hero;