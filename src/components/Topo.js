import Logo from "../assets/img/logo.png";

export default function Topo() {
  return (
    <>
      <div class="barra-superior">
        <div class="logos">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="div-vertical border"></div>
          <div class="logo">
            <a
              href="http://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Logo} alt="logo-instagram" />{" "}
            </a>
          </div>
        </div>
        <div class="barra-pesquisa">
          <input
            type="search"
            name="pesquisar"
            id="pesquisar"
            placeholder="Pesquisar"
          />
        </div>
        <div class="icones">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
      <div class="barra superior barra-mobile border">
        <ion-icon name="logo-instagram"></ion-icon>

        <div class="logo">
          <img src={Logo} alt="logo-instagram" />
        </div>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </>
  );
}
