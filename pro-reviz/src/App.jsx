import "./App.css";
import revizLogo from "./assets/revizLogo.png";

function App() {
  return (
    <>
      <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <img src={revizLogo} alt="Reviz Logo" class="w-1/2" />
        <h1 class="text-4xl font-bold mb-4">Stránky se připravují...</h1>
        <p class="text-lg mb-8 px-4 md:px-0">
          V případě jakýchkoliv dotazů kontaktujte:{" "}
          <strong class="font-bold">info@pro-reviz.cz</strong>
        </p>
        <div class="flex justify-center items-center space-x-4"></div>
      </div>
    </>
  );
}

export default App;
