import Topo from "./Topo";
import Stories from "./Stories";

export default function App() {
  return (
    <>
      <Topo />
      <div className="container">
        <div className="conteudo">
          <div className="feed">
            <Stories />
          </div>
        </div>
      </div>
    </>
  );
}
