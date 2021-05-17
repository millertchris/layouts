import Head from "next/head";

export default function Home() {
  function justifyContent(e) {
    var position = e.target.getAttribute("data-style");
    document.querySelector(".scene").style.justifyContent = position;
  }

  function alignItems(e) {
    var position = e.target.getAttribute("data-style");
    document.querySelector(".scene").style.alignItems = position;
  }

  return (
    <>
      <div className="site-wrap">
        <aside className="panel">
          <h1>Controls</h1>

          <div className="btn-group horizontal">
            <h2>Horizontal</h2>
            <button
              className="btn"
              data-style="flex-start"
              onClick={justifyContent}
            >
              Left
            </button>
            <button
              className="btn"
              data-style="center"
              onClick={justifyContent}
            >
              Center
            </button>
            <button
              className="btn"
              data-style="flex-end"
              onClick={justifyContent}
            >
              Right
            </button>
          </div>

          <div className="btn-group vertical">
            <h2>Horizontal</h2>
            <button
              className="btn"
              data-style="flex-start"
              onClick={alignItems}
            >
              Left
            </button>
            <button className="btn" data-style="center" onClick={alignItems}>
              Center
            </button>
            <button className="btn" data-style="flex-end" onClick={alignItems}>
              Right
            </button>
          </div>
        </aside>

        <main className="scene">
          <div className="shape"></div>
        </main>
      </div>
    </>
  );
}
