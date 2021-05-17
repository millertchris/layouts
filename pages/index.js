import Head from "next/head";
import ButtonGroup from "../components/buttonGroup";

export default function Home() {
  function alignItems(e) {
    var position = e.target.getAttribute("data-style");
    document.querySelector(".scene").style.alignItems = position;
  }

  return (
    <>
      <div className="site-wrap">
        <aside className="panel">
          <h1>How to center a div</h1>
          <p>
            All jokes aside — using display: flex; on the parent div will allow
            you manipulate how items inside of it can be positioned.
          </p>

          <p>
            Then — using the properties below you are able to set the position
            for the child elements.
          </p>

          <ButtonGroup title="justify-content" flexAlign="justifyContent" />
          <ButtonGroup title="align-items" flexAlign="alignItems" />
        </aside>

        <main className="scene">
          <div className="shape"></div>
        </main>
      </div>
    </>
  );
}
