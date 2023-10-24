import imagem1 from "../images/1.jpg";
import imagem2 from "../images/2.jpg";
import imagem3 from "../images/3.jpg";
import imagem4 from "../images/4.jpg";
import imagem5 from "../images/5.jpg";
import imagem6 from "../images/6.jpg";


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
      title: "Essa Folha Está Controlando a Minha Vida",
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
  ];

  return (
    <div>
      {/* Começa aqui o carrossel  */}
      <div className="container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="//picsum.photos/id/25/1300/400" className="d-block" />
            </div>
            <div className="carousel-item">
              <img src="//picsum.photos/id/45/1300/400" className="d-block" />
            </div>
            <div className="carousel-item">
              <img src="//picsum.photos/id/75/1300/400" className="d-block" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* termina  aqui o carrossel  */}

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

      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Livre</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title"></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Acesso à central de ajuda</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary"
                  >
                    Cadastre-se gratuitamente
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">1</div>
            <div className="col-md-4">2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
