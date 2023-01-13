function App() {
  return (
    <div className="App bg-black h-screen flex justify-center items-center flex-col gap-28">
      <h1 className="neonText text-7xl text-pink-400 lg:text-9xl ">
        Framfickan
      </h1>
      {/* add <a> tag that downloads the pds from public folder */}

      <div className="flex gap-16">
        <a href="/Meny.pdf" className="neonText underline text-5xl">
          Meny
        </a>
        <a href="/Drinkmeny.pdf" className="neonText underline text-5xl">
          Dryck
        </a>
      </div>
    </div>
  );
}

export default App;
