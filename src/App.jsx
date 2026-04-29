// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Importando nossas Páginas e Componentes
import Home from "./pages/Home";
import Sobre from "./components/Sobre"; // Importando o Sobre que agora será uma página
import MapaDoAno from "./components/MapaDoAno";
import MentoriaDoMes from "./components/MentoriaDoMes";
import MapaDaProsperidade from "./components/MapaDaProsperidade";
import Depoimentos from "./components/Depoimentos";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {/* CABEÇALHO / MENU REFINADO */}
        <header
          style={{
            background:
              "linear-gradient(90deg, #02060d 0%, var(--cor-primaria) 100%)" /* Degradê sofisticado */,
            borderBottom:
              "1px solid rgba(212, 175, 55, 0.3)" /* Linha dourada sutil */,
            padding: "30px 50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "var(--cor-secundaria)",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "Playfair Display",
              letterSpacing: "2px",
            }}
          >
            <Link
              to="/"
              style={{ color: "var(--cor-secundaria)", textDecoration: "none" }}
            >
              JU LACKNER
            </Link>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "30px",
              fontFamily: "Montserrat",
              fontSize: "1.2rem",
              flexWrap: "wrap",
              fontWeight: "600",
            }}
          >
            <Link
              to="/"
              style={{
                color: "var(--cor-texto-claro)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              style={{
                color: "var(--cor-texto-claro)",
                textDecoration: "none",
              }}
            >
              Sobre a Ju
            </Link>

            <Link
              to="/mentoria-do-mes"
              style={{
                color: "var(--cor-texto-claro)",
                textDecoration: "none",
              }}
            >
              Mentoria do Mês
            </Link>
            <Link
              to="/mapa-do-ano"
              style={{
                color: "var(--cor-texto-claro)",
                textDecoration: "none",
              }}
            >
              Mapa do Ano
            </Link>
            <Link
              to="/mapa-da-prosperidade"
              style={{
                color: "var(--cor-texto-claro)",
                textDecoration: "none",
              }}
            >
              Mapa da Prosperidade
            </Link>
            <Link
              to="/depoimentos"
              style={{
                color: "var(--cor-texto-claro)",
                textDecoration: "none",
              }}
            >
              Depoimentos
            </Link>
          </nav>
        </header>

        {/* ÁREA DINÂMICA (As Páginas) */}
        <main style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/mapa-do-ano" element={<MapaDoAno />} />
            <Route path="/mentoria-do-mes" element={<MentoriaDoMes />} />
            <Route
              path="/mapa-da-prosperidade"
              element={<MapaDaProsperidade />}
            />
            <Route path="/depoimentos" element={<Depoimentos />} />
          </Routes>
        </main>

        {/* RODAPÉ */}
        <footer
          style={{
            backgroundColor: "#050f1d",
            color: "var(--cor-texto-claro)",
            padding: "40px 20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "var(--cor-secundaria)", marginBottom: "10px" }}>
            Ju Lackner
          </h2>
          <p>
            Levando acolhimento, consciência e transformação para a vida das
            pessoas.
          </p>
          <p style={{ marginTop: "20px", fontSize: "0.8rem", opacity: 0.7 }}>
            © 2026 Ju Lackner - Todos os direitos reservados.
          </p>
          <p style={{ marginTop: "20px", fontSize: "0.8rem", opacity: 0.7 }}>
            Desenvolvido por{" "}
            <a
              href="https://seusite.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Aline Lombardi
            </a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
