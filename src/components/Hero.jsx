// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import imagemMapaAno from "../assets/banner-mapa-ano.png";
import imagemMentoria from "../assets/banner-mentoria.png";
import imagemProsperidade from "../assets/banner-prosperidade.png";

function Hero() {
  const [slideAtual, setSlideAtual] = useState(0);

  // Aqui você define todos os slides que vão rodar
  const slides = [
    {
      id: 1,
      titulo: "Desperte a Consciência dos Seus Ciclos",
      descricao:
        "Descubra como a Numerologia pode te ajudar a acessar clareza, direção e propósito para viver a sua jornada com muito mais intenção.",
      textoBotao: "Descubra o seu momento",
      link: "/mapa-do-ano", // Se for uma página separada
      imagem: imagemMapaAno,
    },
    {
      id: 2,
      titulo: "Mentoria do Mês",
      descricao:
        "Um passo a passo de clareza emocional e energética. Transforme confusão em entendimento e intensidade em direção para o seu ciclo atual.",
      textoBotao: "Receba direcionamento",
      link: "#mentoria-do-mes", // Exemplo de link que rola a página para a seção
      imagem: imagemMentoria,
    },
    {
      id: 3,
      titulo: "Mapa da Prosperidade",
      descricao:
        "Entenda a sua energia numerológica para desbloquear caminhos financeiros e ativar a abundância na sua vida profissional.",
      textoBotao: "Ative sua prosperidade",
      link: "/mapa-da-prosperidade",
      imagem: imagemProsperidade,
    },
  ];

  // Efeito para mudar o slide automaticamente a cada 5 segundos (5000ms)
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalo); // Limpa o intervalo se o componente for desmontado
  }, [slides.length]);

  const proximoSlide = () => {
    setSlideAtual(slideAtual === slides.length - 1 ? 0 : slideAtual + 1);
  };

  const slideAnterior = () => {
    setSlideAtual(slideAtual === 0 ? slides.length - 1 : slideAtual - 1);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "85vh",
        overflow: "hidden",
      }}
    >
      {/* RENDERIZAÇÃO DOS SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('${slide.imagem}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            opacity: index === slideAtual ? 1 : 0,
            visibility: index === slideAtual ? "visible" : "hidden",
            transition: "opacity 0.9s ease-in-out, visibility 0.9s", // Efeito suave de transição
            zIndex: index === slideAtual ? 1 : 0,
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "var(--cor-texto-claro)",
            }}
          >
            <h1
              style={{
                fontSize: "3.8rem",
                color: "var(--cor-secundaria)",
                marginBottom: "20px",
                lineHeight: "1.2",
                textShadow: "0px 4px 15px rgba(0,0,0,0.8)",
              }}
            >
              {slide.titulo}
            </h1>

            <p
              style={{
                fontSize: "1.4rem",
                marginBottom: "50px",
                fontFamily: "Montserrat",
                fontWeight: "300",
                textShadow: "0px 4px 15px rgba(0,0,0,0.9)",
                opacity: 0.9,
                maxWidth: "700px",
                margin: "0 auto 50px auto",
              }}
            >
              {slide.descricao}
            </p>

            {/* Verifica se é uma rota interna ou uma âncora na mesma página */}
            {slide.link.startsWith("#") ? (
              <a
                href={slide.link}
                className="botao-whatsapp"
                style={{
                  padding: "18px 45px",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                }}
              >
                {slide.textoBotao}
              </a>
            ) : (
              <Link
                to={slide.link}
                className="botao-whatsapp"
                style={{ padding: "18px 45px", fontSize: "1.2rem" }}
              >
                {slide.textoBotao}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* CONTROLES DO CARROSSEL (Setas) */}
      <button
        onClick={slideAnterior}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.1)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          fontSize: "1.5rem",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) =>
          (e.target.style.background = "rgba(255,255,255,0.3)")
        }
        onMouseOut={(e) =>
          (e.target.style.background = "rgba(255,255,255,0.1)")
        }
      >
        &#10094;
      </button>

      <button
        onClick={proximoSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(255,255,255,0.1)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          fontSize: "1.5rem",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) =>
          (e.target.style.background = "rgba(255,255,255,0.3)")
        }
        onMouseOut={(e) =>
          (e.target.style.background = "rgba(255,255,255,0.1)")
        }
      >
        &#10095;
      </button>

      {/* INDICADORES (Bolinhas) */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: "10px",
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideAtual(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background:
                index === slideAtual
                  ? "var(--cor-secundaria)"
                  : "rgba(255,255,255,0.3)",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;

// // src/components/Hero.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import imagemMapaAno from "../assets/banner-mapa-ano.jpg";
// import imagemMentoria from "../assets/banner-mentoria.jpg";
// import imagemProsperidade from "../assets/banner-prosperidade.jpg";

// function Hero() {
//   const [slideAtual, setSlideAtual] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       titulo: "Desperte a Consciência dos Seus Ciclos",
//       descricao:
//         "Descubra como a Numerologia pode te ajudar a acessar clareza, direção e propósito para viver a sua jornada com muito mais intenção.",
//       textoBotao: "Descubra o seu momento",
//       link: "/mapa-do-ano",
//       // 2. USANDO A IMAGEM IMPORTADA AQUI SEM ASPAS
//       imagem: imagemMapaAno,
//     },
//     {
//       id: 2,
//       titulo: "Mentoria do Mês",
//       descricao:
//         "Um passo a passo de clareza emocional e energética. Transforme confusão em entendimento e intensidade em direção para o seu ciclo atual.",
//       textoBotao: "Receba direcionamento",
//       link: "#mentoria-do-mes",
//       // 2. USANDO A IMAGEM IMPORTADA AQUI SEM ASPAS
//       imagem: imagemMentoria,
//     },
//     {
//       id: 3,
//       titulo: "Mapa da Prosperidade",
//       descricao:
//         "Entenda a sua energia numerológica para desbloquear caminhos financeiros e ativar a abundância na sua vida profissional.",
//       textoBotao: "Ative sua prosperidade",
//       link: "/mapa-da-prosperidade",
//       // 2. USANDO A IMAGEM IMPORTADA AQUI SEM ASPAS
//       imagem: imagemProsperidade,
//     },
//   ];

//   // Efeito para mudar o slide automaticamente a cada 5 segundos (5000ms)
//   useEffect(() => {
//     const intervalo = setInterval(() => {
//       setSlideAtual((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(intervalo); // Limpa o intervalo se o componente for desmontado
//   }, [slides.length]);

//   const proximoSlide = () => {
//     setSlideAtual(slideAtual === slides.length - 1 ? 0 : slideAtual + 1);
//   };

//   const slideAnterior = () => {
//     setSlideAtual(slideAtual === 0 ? slides.length - 1 : slideAtual - 1);
//   };

//   return (
//     <section
//       style={{
//         position: "relative",
//         width: "100%",
//         minHeight: "85vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* RENDERIZAÇÃO DOS SLIDES */}
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(3, 8, 18, 0.95)), url('${slide.imagem}')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//             padding: "20px",
//             opacity: index === slideAtual ? 1 : 0,
//             visibility: index === slideAtual ? "visible" : "hidden",
//             transition: "opacity 0.8s ease-in-out, visibility 0.8s", // Efeito suave de transição
//             zIndex: index === slideAtual ? 1 : 0,
//           }}
//         >
//           <div
//             className="container"
//             style={{
//               maxWidth: "900px",
//               margin: "0 auto",
//               color: "var(--cor-texto-claro)",
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: "3.8rem",
//                 color: "var(--cor-secundaria)",
//                 marginBottom: "20px",
//                 lineHeight: "1.2",
//                 textShadow: "0px 4px 15px rgba(0,0,0,0.5)",
//               }}
//             >
//               {slide.titulo}
//             </h1>

//             <p
//               style={{
//                 fontSize: "1.3rem",
//                 marginBottom: "50px",
//                 fontFamily: "Montserrat",
//                 fontWeight: "300",
//                 opacity: 0.9,
//                 maxWidth: "700px",
//                 margin: "0 auto 50px auto",
//               }}
//             >
//               {slide.descricao}
//             </p>

//             {/* Verifica se é uma rota interna ou uma âncora na mesma página */}
//             {slide.link.startsWith("#") ? (
//               <a
//                 href={slide.link}
//                 className="botao-whatsapp"
//                 style={{
//                   padding: "18px 45px",
//                   fontSize: "1.2rem",
//                   textDecoration: "none",
//                 }}
//               >
//                 {slide.textoBotao}
//               </a>
//             ) : (
//               <Link
//                 to={slide.link}
//                 className="botao-whatsapp"
//                 style={{ padding: "18px 45px", fontSize: "1.2rem" }}
//               >
//                 {slide.textoBotao}
//               </Link>
//             )}
//           </div>
//         </div>
//       ))}

//       {/* CONTROLES DO CARROSSEL (Setas) */}
//       <button
//         onClick={slideAnterior}
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "20px",
//           transform: "translateY(-50%)",
//           zIndex: 10,
//           background: "rgba(255,255,255,0.1)",
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "50px",
//           height: "50px",
//           fontSize: "1.5rem",
//           cursor: "pointer",
//           transition: "background 0.3s",
//         }}
//         onMouseOver={(e) =>
//           (e.target.style.background = "rgba(255,255,255,0.3)")
//         }
//         onMouseOut={(e) =>
//           (e.target.style.background = "rgba(255,255,255,0.1)")
//         }
//       >
//         &#10094;
//       </button>

//       <button
//         onClick={proximoSlide}
//         style={{
//           position: "absolute",
//           top: "50%",
//           right: "20px",
//           transform: "translateY(-50%)",
//           zIndex: 10,
//           background: "rgba(255,255,255,0.1)",
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "50px",
//           height: "50px",
//           fontSize: "1.5rem",
//           cursor: "pointer",
//           transition: "background 0.3s",
//         }}
//         onMouseOver={(e) =>
//           (e.target.style.background = "rgba(255,255,255,0.3)")
//         }
//         onMouseOut={(e) =>
//           (e.target.style.background = "rgba(255,255,255,0.1)")
//         }
//       >
//         &#10095;
//       </button>

//       {/* INDICADORES (Bolinhas) */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "30px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 10,
//           display: "flex",
//           gap: "10px",
//         }}
//       >
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setSlideAtual(index)}
//             style={{
//               width: "12px",
//               height: "12px",
//               borderRadius: "50%",
//               border: "none",
//               cursor: "pointer",
//               background:
//                 index === slideAtual
//                   ? "var(--cor-secundaria)"
//                   : "rgba(255,255,255,0.3)",
//               transition: "background 0.3s",
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Hero;
