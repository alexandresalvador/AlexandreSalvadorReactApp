export default function HomeScreen() {
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
    </div>
  );
}
