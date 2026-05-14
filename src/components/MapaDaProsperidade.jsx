import React from "react";
import {
  FiCheckCircle,
  FiDollarSign,
  FiZap,
  FiLock,
  FiTrendingDown,
} from "react-icons/fi";

function MapaProsperidade() {
  const numeroWhatsApp = "5519998296204";
  const linkWhats = `https://wa.me/${numeroWhatsApp}?text=${encodeURI("Olá! Gostaria de saber mais sobre o Mapa da Prosperidade Financeira.")}`;

  const sectionStyle = {
    backgroundColor: "var(--cor-primaria)",
    padding: "80px 0",
    color: "var(--cor-texto-claro)",
  };

  const titleStyle = {
    fontSize: "2.8rem",
    color: "var(--cor-secundaria)",
    marginBottom: "10px",
  };

  const highlightTextStyle = {
    fontSize: "1.3rem",
    fontWeight: "300",
    opacity: 0.9,
    maxWidth: "700px",
    margin: "0 auto 60px auto",
    lineHeight: "1.5",
  };

  const subTitleStyle = {
    fontSize: "1.8rem",
    color: "var(--cor-secundaria)",
    marginTop: "50px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const textBlockStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: "1.8",
    fontSize: "1.1rem",
  };

  const grid4Cards = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
    gap: "20px",
    marginBottom: "60px",
  };

  const grid6Cards = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
    gap: "20px",
    marginTop: "30px",
  };

  const cardStyle = {
    display: "flex",
    alignItems: "start",
    gap: "15px",
    padding: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "var(--cor-texto-claro)",
    borderRadius: "8px",
  };

  return (
    <section id="mapa-prosperidade" style={sectionStyle}>
      <div className="container">
        {/* CABEÇALHO */}
        <div style={{ textAlign: "center" }}>
          <h2 style={titleStyle}>Mapa da Prosperidade Financeira</h2>
          <p style={highlightTextStyle}>
            Você sente que o dinheiro nunca flui como poderia na sua vida?
          </p>
        </div>

        {/* 1. SEÇÃO DE DOR - 4 CARDS SIMÉTRICOS */}
        <div style={grid4Cards}>
          <div style={cardStyle}>
            <FiDollarSign
              style={{
                fontSize: "2.5rem",
                color: "var(--cor-secundaria)",
                flexShrink: 0,
              }}
            />
            <p>
              "Trabalho muito, me esforço, mas sinto que a vida financeira não
              anda."
            </p>
          </div>
          <div style={cardStyle}>
            <FiZap
              style={{
                fontSize: "2.5rem",
                color: "var(--cor-secundaria)",
                flexShrink: 0,
              }}
            />
            <p>
              "Às vezes o dinheiro entra, mas não fica. Sempre surgem
              imprevistos travando tudo."
            </p>
          </div>
          <div style={cardStyle}>
            <FiTrendingDown
              style={{
                fontSize: "2.5rem",
                color: "var(--cor-secundaria)",
                flexShrink: 0,
              }}
            />
            <p>
              "Existe um esforço enorme da minha parte, para um retorno
              financeiro muito baixo."
            </p>
          </div>
          <div style={cardStyle}>
            <FiLock
              style={{
                fontSize: "2.5rem",
                color: "var(--cor-secundaria)",
                flexShrink: 0,
              }}
            />
            <p>
              "Sinto cansaço, insegurança e a sensação de que há algo interno me
              bloqueando."
            </p>
          </div>
        </div>

        {/* 2. TRANSIÇÃO DE IMPACTO */}
        <div
          style={{
            ...textBlockStyle,
            backgroundColor: "rgba(255,255,255,0.02)",
            borderLeft: "2px solid var(--cor-secundaria)",
            padding: "40px",
            textAlign: "left",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              color: "var(--cor-secundaria)",
              marginBottom: "15px",
            }}
          >
            A dor não está só na falta de dinheiro.
          </p>
          <p style={{ marginBottom: "0" }}>
            Ela também está na relação que você construiu com ele. Padrões
            internos de merecimento, autovalorização e medo podem estar travando
            o seu fluxo, independentemente de números ou organização.
          </p>
        </div>

        {/* 3. SEÇÃO DE SOLUÇÃO */}
        <div style={textBlockStyle}>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "30px",
              fontWeight: "500",
            }}
          >
            É por isso que eu criei o{" "}
            <span
              style={{ color: "var(--cor-secundaria)", fontWeight: "bold" }}
            >
              Mapa da Prosperidade Financeira
            </span>
            .
          </p>
          <p style={{ marginBottom: "20px" }}>
            Esta é uma leitura personalizada pensada para te ajudar a entender a
            raiz energética que dificulta o seu crescimento financeiro. Mais do
            que falar de dinheiro, olhamos para os padrões que bloqueiam sua
            abundância.
          </p>

          <h3 style={subTitleStyle}>O que esse mapa te ajuda a compreender:</h3>

          <ul
            className="lista-beneficios"
            style={{
              textAlign: "left",
              display: "inline-block",
              maxWidth: "600px",
              marginBottom: "50px",
            }}
          >
            <li>
              <FiCheckCircle className="icone-lista" /> Sua relação energética
              com o dinheiro
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Bloqueios e padrões de
              escassez/desvalorização
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Pontos de força do seu
              potencial de crescimento
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Caminhos para uma
              relação saudável com o receber
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Reflexões sobre
              merecimento e abundância
            </li>
          </ul>
        </div>

        {/* 4. FILOSOFIA */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "40px 0",
          }}
        >
          <p
            style={{
              fontSize: "1.4rem",
              fontStyle: "italic",
              color: "var(--cor-texto-claro)",
              opacity: 0.9,
              maxWidth: "750px",
              margin: "0 auto",
            }}
          >
            "Prosperidade não é só ganhar mais. É também conseguir sustentar,
            receber e se permitir viver melhor."
          </p>
        </div>

        {/* 5. PARA QUEM É - 6 CARDS SIMÉTRICOS */}
        <div style={textBlockStyle}>
          <h3 style={{ ...subTitleStyle, marginTop: "0" }}>
            Para quem é esse mapa?
          </h3>

          <div style={grid6Cards}>
            {[
              "Sente a vida financeira travada",
              "Quer entender sua relação com o dinheiro",
              "Percebe padrões de escassez",
              "Deseja mais autovalorização",
              "Busca clareza sobre a própria prosperidade",
              "Quer olhar a vida financeira de forma profunda",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 6. CONCLUSÃO E CTA */}
        <div style={{ ...textBlockStyle, marginTop: "80px" }}>
          <p style={{ marginBottom: "10px" }}>
            Um novo olhar para a sua prosperidade.
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "var(--cor-secundaria)",
              marginBottom: "40px",
            }}
          >
            Prosperar também é se reconhecer como alguém capaz de receber mais.
          </p>
          <a
            href={linkWhats}
            className="botao-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "15px 40px", fontSize: "1.1rem" }}
          >
            Ative sua abundância com o Mapa
          </a>
        </div>
      </div>
    </section>
  );
}

export default MapaProsperidade;