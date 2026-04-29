// src/components/MentoriaDoMes.jsx
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

function MentoriaDoMes() {
  const numeroWhatsApp = "5519998296204";
  const linkWhats = `https://wa.me/${numeroWhatsApp}?text=${encodeURI("Olá! Gostaria de saber mais sobre a Mentoria do Mês.")}`;

  return (
    <section
      id="mentoria-do-mes"
      style={{
        backgroundColor: "var(--cor-primaria)",
        color: "var(--cor-texto-claro)",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2.5rem", color: "var(--cor-secundaria)" }}>
            Mentoria do Mês
          </h2>
        </div>

        {/* CARDS DE DOR */}
        <div className="cards-grid">
          <div
            className="card-dor"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "var(--cor-texto-claro)",
            }}
          >
            "Você sente que cada mês mexe com você de um jeito diferente e nem
            sempre entende o porquê?"
          </div>
          <div
            className="card-dor"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "var(--cor-texto-claro)",
            }}
          >
            "Está vivendo um período confuso e quer mais clareza sobre o seu
            momento?"
          </div>
          <div
            className="card-dor"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "var(--cor-texto-claro)",
            }}
          >
            "Sente que se cobra demais sem entender o que esse ciclo está te
            ensinando?"
          </div>
          <div
            className="card-dor"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "var(--cor-texto-claro)",
            }}
          >
            "Deseja viver o seu ciclo com mais consciência, direção e menos
            ansiedade?"
          </div>
        </div>

        {/* TEXTO DE SOLUÇÃO REESTRUTURADO */}
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: "1.6",
          }}
        >
          <p
            style={{
              fontSize: "1.4rem",
              color: "var(--cor-secundaria)",
              fontWeight: "500",
              marginBottom: "30px",
            }}
          >
            A Mentoria do Mês é como um passo a passo de clareza emocional e
            energética para o ciclo que você está vivendo.
          </p>

          <div style={{ marginBottom: "30px", opacity: "0.9" }}>
            <p>
              Muitas vezes, você sente ansiedade, confusão, peso emocional ou um
              impulso para agir que não consegue explicar. A maior dificuldade
              não é só sentir tudo isso...{" "}
              <strong>É não entender o porquê.</strong>
            </p>
          </div>

          <div
            style={{
              padding: "25px",
              borderLeft: "2px solid var(--cor-secundaria)",
              backgroundColor: "rgba(255,255,255,0.02)",
              marginBottom: "30px",
              textAlign: "left",
            }}
          >
            <p style={{ marginBottom: "15px" }}>
              Na mentoria, eu te ajudo a compreender a energia do seu mês, das
              semanas e até dos dias mais importantes.
            </p>
            <p>
              É como um <strong>mapa prático de direcionamento</strong>, para
              que você pare de se perder nas emoções e comece a entender melhor
              o seu próprio momento.
            </p>
          </div>

          <p style={{ marginBottom: "40px" }}>
            Quando você entende o ciclo que está vivendo, consegue se acolher
            mais, se cobrar menos e agir com muito mais consciência.
          </p>

          {/* TRANSFORMAÇÃO FINAL */}
          <div style={{ marginBottom: "50px" }}>
            <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
              A Mentoria do Mês ajuda a transformar{" "}
              <strong>confusão em clareza</strong>.
            </p>
            <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
              <strong>Peso em entendimento.</strong>
            </p>
            <p style={{ fontSize: "1.2rem", margin: "5px 0" }}>
              E <strong>intensidade em direção.</strong>
            </p>
          </div>

          <div style={{ marginTop: "10px" }}>
            <a
              href={linkWhats}
              className="botao-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Receba direcionamento para o seu mês
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentoriaDoMes;
