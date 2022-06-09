import './App.css';
import Person from './components/Person/Person';
import PersonClass from './components/PersonClass/PersonClass';

function App() {
  const persons = [
    {id: 1 ,name:"Amanda",surname:"Huevos",age:53},
    {id: 2 ,name:"Elena",surname:"Nito del Bosque",age:23},
    {id: 3 ,name:"Mar",surname:"y Ano",age:12}
  ]

  return (
    <div className="App">
      <Person obj={persons}/>
      <PersonClass obj={persons}/>
    </div>
  );
}

export default App;
