import Gag from "../assets/img/stories/9gag 1.png";
import Barked from "../assets/img/stories/barked 1.png";
import Catana from "../assets/img/stories/catanacomics 1.png";
import Filo from "../assets/img/stories/filomoderna 1.png";
import Memeria from "../assets/img/stories/memeriagourmet 1.png";
import Meowed from "../assets/img/stories/meowed 1.png";
import Nathan from "../assets/img/stories/nathanwpylestrangeplanet 1.png";
import Respondeai from "../assets/img/stories/respondeai 1.png";
import Wawawi from "../assets/img/stories/wawawiwacomicsa 1.png";

const Content = [
  {
    img: Gag,
    alt: "9gag",
    nome: "9gag",
  },
  {
    img: Barked,
    alt: "Barked",
    nome: "barked",
  },
  {
    img: Catana,
    alt: "catanacomics",
    nome: "catanacomics",
  },
  {
    img: Filo,
    alt: "filomoderna",
    nome: "filomoderna",
  },
  {
    img: Memeria,
    alt: "memeriagourmet",
    nome: "memeriago",
  },
  {
    img: Meowed,
    alt: "meowed",
    nome: "meowed",
  },
  {
    img: Nathan,
    alt: "nathanwpylestrangeplanet",
    nome: "nathanwpy",
  },
  {
    img: Respondeai,
    alt: "respondeai",
    nome: "respondeai",
  },
  {
    img: Wawawi,
    alt: "wawawiwacomicsa",
    nome: "wawawiwacomicsa",
  },
];

function Story(props) {
  return (
    <div>
      <img src={props.img} alt={props.alt} />
      <p>{props.nome}</p>
    </div>
  );
}

export default function Stories() {
  return (
    <div class="barra-stories border">
      {Content.map((storie) => (
        <Story img={storie.img} alt={storie.alt} nome={storie.nome} />
      ))}
      <ion-icon name="chevron-forward-circle-outline"></ion-icon>
    </div>
  );
}
