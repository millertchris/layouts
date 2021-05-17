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
          <h1>How to center a div</h1>
          <p>
            All jokes aside — using display: flex; on the parent div will allow
            you manipulate how items inside of it can be positioned.
          </p>

          <p>
            Then — using the properties below you are able to set the position
            for the child elements.
          </p>

          <div className="btn-group horizontal">
            <h2>justify-content</h2>
            <button
              className="btn"
              data-style="flex-start"
              onClick={justifyContent}
            >
              flex-start
            </button>
            <button
              className="btn"
              data-style="center"
              onClick={justifyContent}
            >
              center
            </button>
            <button
              className="btn"
              data-style="flex-end"
              onClick={justifyContent}
            >
              flex-end
            </button>
          </div>

          <div className="btn-group vertical">
            <h2>align-items</h2>
            <button
              className="btn"
              data-style="flex-start"
              onClick={alignItems}
            >
              flex-start
            </button>
            <button className="btn" data-style="center" onClick={alignItems}>
              center
            </button>
            <button className="btn" data-style="flex-end" onClick={alignItems}>
              flex-end
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
