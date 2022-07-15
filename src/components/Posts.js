import meowed from "../assets/img/stories/meowed 1.png";
import gato from "../assets/img/gato-telefone 1.png";
import respondeai from "../assets/img/respondeai 2.png";
import barked from "../assets/img/stories/barked 1.png";
import dog from "../assets/img/dog 1.png";
import adorable from "../assets/img/adorableanimals 2.png";

const ContentPost = [
  {
    imgTop: meowed,
    altTop: "meowed",
    titleTop: "meowed",
    imgPost: gato,
    altPost: "gato-telefone",
    imgFooter: respondeai,
    altFooter: "respondeai2",
  },
  {
    imgTop: barked,
    altTop: "barked",
    titleTop: "barked",
    imgPost: dog,
    altPost: "dog",
    imgFooter: adorable,
    altFooter: "adorableanimals2",
  },
  {
    imgTop: meowed,
    altTop: "meowed",
    titleTop: "meowed",
    imgPost: gato,
    altPost: "gato-telefone",
    imgFooter: respondeai,
    altFooter: "respondeai2",
  },
];

function Post(props) {
  return (
    <>
      <div class="new-feeds">
        <div class="newfeed-box border">
          <div class="top-bar border">
            <div class="top-title">
              <img src={props.imgTop} alt={props.altTop} />
              <h6>{props.titleTop}</h6>
            </div>
            <div>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
          </div>
          <div class="image-post">
            <img src={props.imgPost} alt={props.altPost} />
          </div>
          <div class="box-footer">
            <div class="first-line">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>
            <div>
              <img src={props.imgFooter} alt={props.altFooter} />
              <p>
                Curtido por <span>respondeai</span> e
                <span> outras 101.523 pessoas</span>
              </p>
            </div>
            <div>
              <p>
                <span>Lorem ipsum</span> dolor sit amet consectetur adipisicing
                elit. Numquam a neque, ducimus officiis distinctio explicabo
                eius voluptatem doloremque dolorum mollitia ut aspernatur id
                facilis adipisci tempore pariatur aliquam. Fuga, tempore!
              </p>
              <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="happy-outline"></ion-icon>
              <input
                type="text"
                name="comment"
                id="comment"
                placeholder="Adicione um comentário..."
              />
              <button type="button">Publicar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Posts() {
  return (
    <>
      {ContentPost.map((contents) => (
        <Post
          imgTop={contents.imgTop}
          altTop={contents.altTop}
          titleTop={contents.titleTop}
          imgPost={contents.imgPost}
          altPost={contents.altPost}
          imgFooter={contents.imgFooter}
          altFooter={contents.altFooter}
        />
      ))}
    </>
  );
}
