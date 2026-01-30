import React, { Suspense } from "react";

const MFE1 = React.lazy(() =>
  import("mfe1/App").catch((err) => {
    console.error("Erro ao carregar MFE1", err);
    return { default: () => <div>Erro ao carregar MFE1</div> };
  })
);

const MFE2 = React.lazy(() =>
  import("mfe2/App").catch((err) => {
    console.error("Erro ao carregar MFE2", err);
    return { default: () => <div>Erro ao carregar MFE2</div> };
  })
);

window.addEventListener('addItem', (e) => console.log('Event add Item received', e.detail));

function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Dashboard</span>
        </div>
      </nav>
      <div className="container text-center mt-5">
        <div className="row mt-4">
          <div className="col">
            <Suspense fallback={<div>Carregando MFE1...</div>}>
              <MFE1 />
            </Suspense>
          </div>
          <div className="col">
            <Suspense fallback={<div>Carregando MFE2...</div>}>
              <MFE2 />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
