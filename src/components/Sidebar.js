import catana from "../assets/img/stories/catanacomics 1.png";
import badvibes from "../assets/img/sugestoes/badvibesmemes 1.png";
import adorable from "../assets/img/sugestoes/adorableanimals 1.png";
import chibirdart from "../assets/img/sugestoes/chibirdart 1.png";
import razoes from "../assets/img/sugestoes/razoesparaacreditar 1.png";
import small from "../assets/img/sugestoes/smallcutecats 1.png";

const SideContent = [
  {
    image: badvibes,
    alt: "badvibesmemes",
    title: "bad.vibes.memes",
  },
  {
    image: chibirdart,
    alt: "chibirdart",
    title: "chibirdart",
  },
  {
    image: razoes,
    alt: "razoesparaacreditar",
    title: "razoesparaacreditar",
  },
  {
    image: adorable,
    alt: "adorableanimals",
    title: "adorable_animals",
  },
  {
    image: small,
    alt: "smallcutecats",
    title: "smallcutecats",
  },
];

function Sugestion(props) {
  return (
    <>
      <div class="sugestoes-pages">
        <div>
          <img src={props.image} alt={props.alt} />
          <div>
            <h6>{props.title}</h6>
            <p>Segue você</p>
          </div>
        </div>
        <div>
          <button>Seguir</button>
        </div>
      </div>
    </>
  );
}

export default function Sidebar() {
  return (
    <div class="side-bar">
      <div class="current-page">
        <div class="img-page">
          <img src={catana} alt="catanacomics" />
        </div>
        <div class="title-page">
          <h6>catanacomics</h6>
          <p>Catana</p>
        </div>
      </div>
      <div class="sugestoes">
        <div>
          <h6>Sugestões para você</h6>
        </div>
        <div>
          <p>Ver tudo</p>
        </div>
      </div>

      {SideContent.map((sideuser) => (
        <Sugestion
          image={sideuser.image}
          alt={sideuser.alt}
          title={sideuser.title}
        />
      ))}

      <div class="sidebar-footer">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
