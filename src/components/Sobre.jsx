// src/components/Sobre.jsx
import React from 'react';
import fotoJuPerfilOptimized from '../assets/ju-lackner-numerologia-terapias.png';

function Sobre() {
  return (
    <section style={{ backgroundColor: 'var(--cor-texto-claro)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
        
        {/* Espaço para a Foto Atualizado com SEO */}
        <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
          <img 
            // 2. Aponte para a imagem correta
            src={fotoJuPerfilOptimized} 
            
            // 3. ADICIONAMOS O ALT TEXT (O Google vai adorar isto!)
            alt="Ju Lackner - Especialista em Numerologia, Terapias Integrativas e Desenvolvimento Pessoal - SP" 
            
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              height: 'auto', 
              // Mantive o estilo moderno que definimos anteriormente
              borderRadius: '20px 100px 20px 20px', 
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Texto sobre a Ju (mantido igual) */}
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ju Lackner</h2>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--cor-secundaria)', marginBottom: '20px', fontFamily: 'Montserrat' }}>
            Terapeuta Integrativa & Especialista em Numerologia
          </h3>
          
          <p style={{ marginBottom: '15px' }}>
            Facilitadora de processos de autoconhecimento e expansão da consciência. Sua jornada no mundo terapêutico começou em 2020, a partir de um profundo processo de transformação pessoal, que despertou o chamado para ajudar outras pessoas a compreenderem suas dores, seus ciclos e o seu caminho de cura.
          </p>
          
          <p style={{ marginBottom: '15px' }}>
            Ao longo dessa caminhada, buscou formações em diferentes áreas, como <strong>Numerologia, Barras de Access, Reiki, Tarô de Arcanos Maiores, Radiestesia, ThetaHealing</strong> e estudos ligados aos chakras.
          </p>
          
          <p>
            Além dos atendimentos, Ju também desenvolve projetos e ações voltadas à saúde mental e ao bem-estar coletivo, como a Caminhada do Setembro Amarelo e encontros voltados às mulheres.
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default Sobre;