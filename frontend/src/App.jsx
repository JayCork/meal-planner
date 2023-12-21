import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="main">
          <div className="next-meal">
            <div className="top">
              <div className="header-main">
                {" "}
                <h3>Carbonara</h3>
                <button>more</button>
              </div>
              <div className="header-additonal">
                <p>Starting cooking at</p>
              </div>
            </div>
            <img
              className="media"
              alt="Finished Carbonara"
              loading="lazy"
              src="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></img>
            <div className="bottom">
              <div className="bottom-info">
                <p>Calories 215 Kcal</p>
              </div>
              <div className="bottom-actions">
                <button>Cook now</button>
              </div>
            </div>
          </div>
          <div className="accordion">
            <button className="accordion-button">
              <h3>Expires Soon</h3>
              <button>Expand</button>
            </button>
            <div className="content"></div>
            <div className="content-item">
              <div className="content__item__sub-item">
                <p>Potatoes</p>
                <p>2 days</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
