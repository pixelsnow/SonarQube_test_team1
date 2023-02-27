import "./App.css";
// Tuan made error 

function App() {
  const render =(banner,idea)=>{
  console.log(banner)
  }
  return (
    <div className="App">
      <h1>SonarQube test</h1>
      <p>Lera was here</p>
    {render('hello world')}
    </div>
  );
}

export default App;
