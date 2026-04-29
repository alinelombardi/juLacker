// src/components/MapaDoAno.jsx
import React from "react";
import { FiCheckCircle } from "react-icons/fi"; // Importando o ícone

function MapaDoAno() {
  const numeroWhatsApp = "5519998296204";
  const linkWhats = `https://wa.me/${numeroWhatsApp}?text=${encodeURI("Olá! Gostaria de saber mais sobre o Mapa do Ano.")}`;

  return (
    <section id="mapa-do-ano" style={{ backgroundColor: "var(--cor-fundo)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.5rem" }}>Mapa do Ano</h2>
        </div>

        {/* CARDS DE DOR */}
        <div className="cards-grid">
          <div className="card-dor">
            "Você sente que está vivendo muita coisa, mas não consegue entender
            o que esse momento quer te ensinar?"
          </div>
          <div className="card-dor">
            "Tem a sensação de que alguns desafios se repetem na sua vida?"
          </div>
          <div className="card-dor">
            "Está em dúvida sobre decisões e quer mais clareza sobre o seu ciclo
            atual?"
          </div>
          <div className="card-dor">
            "Sente que precisa se organizar melhor emocionalmente,
            energeticamente e internamente?"
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            Você não precisa passar pelo seu ciclo sem entender o que ele quer
            te mostrar.
          </p>
        </div>

        {/* TEXTO DE SOLUÇÃO */}
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ marginBottom: "20px" }}>
            O Mapa do Ano é uma leitura personalizada que traz clareza sobre o
            seu momento atual, os aprendizados do seu ciclo, os desafios da sua
            idade e as tendências dos meses mais importantes do seu ano.
          </p>
          <p
            style={{
              marginBottom: "30px",
              fontWeight: "bold",
              color: "var(--cor-primaria)",
            }}
          >
            Ele te ajuda a compreender o que você está vivendo, se preparar
            melhor para cada fase e tomar decisões com mais consciência.
          </p>

          <h3 style={{ marginBottom: "15px", fontSize: "1.5rem" }}>
            Com esse mapa, você acessa:
          </h3>

          {/* LISTA COM ÍCONES REAIS */}
          <ul
            className="lista-beneficios"
            style={{ textAlign: "left", display: "inline-block" }}
          >
            <li>
              <FiCheckCircle className="icone-lista" /> Clareza sobre o seu
              ciclo atual
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Desafios e aprendizados
              do período
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Tendências energéticas
              dos próximos meses
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Consciência sobre ciclos
              anteriores
            </li>
            <li>
              <FiCheckCircle className="icone-lista" /> Direcionamento do chakra
              que precisa de mais atenção
            </li>
          </ul>

          <div style={{ marginTop: "30px" }}>
            <p style={{ fontStyle: "italic" }}>
              Mais do que uma leitura, é uma ferramenta de autoconhecimento e
              planejamento para viver o seu ano com mais direção.
            </p>
            <a
              href={linkWhats}
              className="botao-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entenda seu momento com o Mapa do Ano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapaDoAno;
