// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
// Importando os ícones oficiais do WhatsApp e Instagram
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; 

function Home() {
  return (
    <div>
      <Hero />

      {/* SECÇÃO DE CONTACTOS ELEGANTE */}
      <section style={{ 
        padding: '80px 20px', 
        backgroundColor: 'var(--cor-fundo)', 
        textAlign: 'center' 
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Conecte-se com a Ju</h2>
          <p style={{ marginBottom: '50px', fontSize: '1.1rem', color: '#555' }}>
            Acompanhe conteúdos diários de autoconhecimento ou agende o seu atendimento diretamente pelos canais abaixo.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px', 
            flexWrap: 'wrap' 
          }}>
            {/* Botão do WhatsApp com Ícone */}
            <a 
              href="https://wa.me/5519998296204?text=Olá! Gostaria de saber mais sobre os atendimentos." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="botao-social"
              style={{ gap: '10px' }} /* Espaço entre o ícone e o texto */
            >
              <FaWhatsapp style={{ fontSize: '1.4rem' }} /> WhatsApp
            </a>
            
            {/* Botão do Instagram Terapias com Ícone */}
            <a 
              href="https://www.instagram.com/julacknerterapias/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="botao-social"
              style={{ gap: '10px' }}
            >
              <FaInstagram style={{ fontSize: '1.4rem' }} /> @julacknerterapias
            </a>

            {/* Botão do Instagram Pessoal com Ícone */}
            <a 
              href="https://www.instagram.com/julackner" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="botao-social"
              style={{ gap: '10px' }}
            >
              <FaInstagram style={{ fontSize: '1.4rem' }} /> @julackner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;