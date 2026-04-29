// src/components/Depoimentos.jsx
import React from "react";

// 1. IMPORTAÇÃO DAS IMAGENS LOCAIS
// Substitua os caminhos abaixo pelo nome real dos seus arquivos na pasta assets
import dep1 from "../assets/dep1.jpeg"; // Exemplo
import dep2 from "../assets/dep2.jpeg";
import dep3 from "../assets/dep3.jpeg";
import dep4 from "../assets/dep4.jpeg";
import dep5 from "../assets/dep5.jpeg";
import dep6 from "../assets/dep6.jpeg";
import dep7 from "../assets/dep7.jpeg";
import dep8 from "../assets/dep8.jpeg";
import dep9 from "../assets/dep9.jpeg";
import dep10 from "../assets/dep10.jpeg";
import dep11 from "../assets/dep11.jpeg";
import dep12 from "../assets/dep12.jpeg";

// ... Importe as outras até a 12
// Se não quiser importar uma por uma agora, você pode colocar os links diretos no array abaixo por enquanto.

function Depoimentos() {
  const numeroWhatsApp = "5519998296204";
  const linkWhats = `https://wa.me/${numeroWhatsApp}?text=${encodeURI("Olá! Gostaria de agendar uma leitura/mapa.")}`;

  // 2. ARRAY COM AS 12 IMAGENS
  // Coloque aqui as variáveis que você importou acima
  const listaDepoimentos = [
    dep1,
    dep2,
    dep3,
    dep4,
    dep5,
    dep6,
    dep7,
    dep8,
    dep9,
    dep10,
    dep11,
    dep12,
  ];

  // Estilos da Seção
  const sectionStyle = {
    backgroundColor: "var(--cor-fundo)", // Mantendo o padrão do site
    padding: "80px 0",
    color: "var(--cor-texto-escuro)",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2.8rem",
    color: "var(--cor-primaria)",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "300",
    opacity: 0.8,
    maxWidth: "600px",
    margin: "0 auto 60px auto",
    lineHeight: "1.6",
  };

  // Estilo do Grid Responsivo
  const gridStyle = {
    display: "grid",
    // Cria colunas flexíveis: no mínimo 250px de largura. Se a tela crescer, ele encaixa mais imagens lado a lado.
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    padding: "0 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  return (
    <section id="depoimentos" style={sectionStyle}>
      <div className="container">
        {/* CABEÇALHO */}
        <h2 style={titleStyle}>O que dizem sobre as leituras</h2>
        <p style={subtitleStyle}>
          Experiências reais de quem já acessou a clareza, a direção e o
          autoconhecimento através dos Mapas e Mentorias.
        </p>

        {/* GRID DE IMAGENS */}
        <div style={gridStyle}>
          {listaDepoimentos.map((imagem, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease", // Efeito para o hover
                cursor: "pointer",
                display: "flex",
                justifyContent: "center", // Centraliza a imagem na horizontal
                alignItems: "center", // Centraliza a imagem na vertical
              }}
              // Efeito visual sutil ao passar o mouse por cima
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={imagem}
                alt={`Depoimento ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block", // Remove pequenos espaços brancos embaixo da imagem
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* BOTÃO DE AÇÃO NO FINAL DA PÁGINA */}
        <div style={{ marginTop: "80px" }}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "1.2rem",
              marginBottom: "25px",
            }}
          >
            Pronta para iniciar o seu próprio ciclo de clareza?
          </p>
          <a
            href={linkWhats}
            className="botao-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "15px 40px", fontSize: "1.1rem" }}
          >
            Quero descobrir o meu momento
          </a>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
