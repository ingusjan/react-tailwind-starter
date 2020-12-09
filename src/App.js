import React, { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark && "dark"} `}>
      <div className="pt-12 w-screen h-screen bg-gray-100 dark:bg-gray-800 dark:text-white text-center">
        <h1 className="text-4xl font-sans mb-4">React + Tailwind = Awesome</h1>
        <p>Forget about writing CSS files... It's all about CSS-in-JS now</p>
        <img
          class="m-auto mt-12"
          src="https://media1.tenor.com/images/6461310eeb6751d0537b6951dbc15af3/tenor.gif"
          alt="Surprised Cat Gif"
        />

        <button
          class="mt-12 bg-gray-300 dark:bg-gray-700 p-2 px-4 rounded-lg"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default App;
