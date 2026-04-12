// src/components/MentoriaDoMes.jsx
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Importando o ícone

function MentoriaDoMes() {
  const numeroWhatsApp = "5511999999999"; 
  const linkWhats = `https://wa.me/${numeroWhatsApp}?text=${encodeURI("Olá! Gostaria de saber mais sobre a Mentoria do Mês.")}`;

  return (
    <section id="mentoria-do-mes" style={{ backgroundColor: 'var(--cor-primaria)', color: 'var(--cor-texto-claro)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--cor-secundaria)' }}>Mentoria do Mês</h2>
        </div>

        {/* CARDS DE DOR */}
        <div className="cards-grid">
          <div className="card-dor" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--cor-texto-claro)' }}>
            "Você sente que cada mês mexe com você de um jeito diferente e nem sempre entende o porquê?"
          </div>
          <div className="card-dor" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--cor-texto-claro)' }}>
            "Está vivendo um período confuso e quer mais clareza sobre o seu momento?"
          </div>
          <div className="card-dor" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--cor-texto-claro)' }}>
            "Sente que se cobra demais sem entender o que esse ciclo está te ensinando?"
          </div>
          <div className="card-dor" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--cor-texto-claro)' }}>
            "Deseja viver o seu ciclo com mais consciência, direção e menos ansiedade?"
          </div>
        </div>

        {/* TEXTO DE SOLUÇÃO */}
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
              Um mês vivido com consciência é muito diferente de um mês vivido no automático.
            </p>
          </div>
          <p style={{ marginBottom: '20px' }}>
            A Mentoria do Mês é um acompanhamento pensado para te ajudar a compreender a energia do seu ciclo atual, os desafios do período e as tendências mais importantes do seu mês.
          </p>
          
          <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: 'var(--cor-secundaria)', marginTop: '30px' }}>Com ela, você tem direcionamento para entender:</h3>
          
          {/* LISTA COM ÍCONES REAIS */}
          <ul className="lista-beneficios" style={{ textAlign: 'left', display: 'inline-block' }}>
            <li><FiCheckCircle className="icone-lista" /> A energia do seu mês e como ele se conecta com seu ano pessoal</li>
            <li><FiCheckCircle className="icone-lista" /> Os desafios e aprendizados do período</li>
            <li><FiCheckCircle className="icone-lista" /> As tendências das semanas</li>
            <li><FiCheckCircle className="icone-lista" /> O que pede mais atenção no emocional, no energético e no prático</li>
          </ul>

          <div style={{ marginTop: '30px' }}>
            <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>Seu mês pode ser mais leve quando você entende o que ele está te pedindo.</p>
            <a href={linkWhats} className="botao-whatsapp" target="_blank" rel="noopener noreferrer">
              Receba direcionamento para o seu mês
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentoriaDoMes;