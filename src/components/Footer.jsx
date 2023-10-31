import youtube from "../images/youtube-footer.png";

export default function Footer() {
    return (
      <footer className="bg-dark-subtle">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <img src={youtube} id="youtube-footer" alt="" />
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <h4>2023 - Todos os direitos reservados</h4>
            </div>
          </div>
        </div>
      </footer>
    );
}