import React from "react";
import imagem1 from "../images/1.jpg";
import imagem2 from "../images/2.jpg";
import imagem3 from "../images/3.jpg";
import imagem4 from "../images/4.jpg";
import imagem5 from "../images/5.jpg";
import imagem6 from "../images/6.jpg";
import youtube from "../images/youtube.png";

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.5)",
};

const overlayText = {
  color: "#fff",
};

export default function HomeScreen() {
  const videos = [
    {
      id: 1,
      thumbnail: imagem1,
      title: "11 Conselhos Raros de SÊNIOR para JÚNIOR (Que Não Te Ensinam)",
      timestamp: "há 30 minutos",
    },
    {
      id: 2,
      thumbnail: imagem2,
      title: "Volta Forçada: Dano é *Pior* do Que Se Pensava",
      timestamp: "há 2 horas",
    },
    {
      id: 3,
      thumbnail: imagem3,
      title: "Toma Cuidado Com Isso (Assumindo compromisso com os inscritos)",
      timestamp: "há 3 horas",
    },
    {
      id: 4,
      thumbnail: imagem4,
      title: "Entenda como essa Folha Está Controlando a Minha Vida",
      timestamp: "há 10 horas",
    },
    {
      id: 5,
      thumbnail: imagem5,
      title: "As Vagas Realmente Acabaram? (Investigação)",
      timestamp: "há 1 dia",
    },
    {
      id: 6,
      thumbnail: imagem6,
      title: "O Sistema de Produtividade INSANO de Stephen Wolfram",
      timestamp: "há 1 dia",
    },
  ]

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <img src={youtube} alt="" id="youtube" />
      </div>

      <div className="container">
        <div className="row">
          {videos.map((video) => (
            <div className="col-md-4" key={video.id}>
              <div className="card mb-4 rounded-3 shadow-sm">
                <img
                  src={video.thumbnail}
                  className="card-img-top"
                  alt={video.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.timestamp}</p>
                  <button type="button" className="btn btn-primary">
                    Assistir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
}
