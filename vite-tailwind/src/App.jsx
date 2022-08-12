
function App() {

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <form className="flex flex-col gap-8 bg-slate-500 w-[50%] rounded-md 
          justify-center items-start h-[50%] shadow-2xl shadow-black pl-3" >
        <div className="flex gap-4 text-xl font-medium justify-center items-center " >
          <label>Nome da categoria</label>
          <input type="Text" />
        </div>
        <div className="flex gap-4 text-xl font-medium justify-center items-center">
          <label>Descrição da categoria</label>
          <input type="text" />
        </div>
      </form>

    </div>
  )
}

export default App
