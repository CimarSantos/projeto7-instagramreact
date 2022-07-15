import Topo from "./Topo";
import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

export default function App() {
  return (
    <>
      <Topo />
      <div className="container">
        <div className="conteudo">
          <Sidebar />
          <div className="feed">
            <Stories />
          </div>
        </div>
      </div>
      <div className="new-feeds">
        <Posts />
      </div>
    </>
  );
}
