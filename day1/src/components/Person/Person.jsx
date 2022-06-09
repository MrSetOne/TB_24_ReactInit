const Person = (props) => {
    const person = props.obj.map(person => {
        return (
          <div key={person.id} className="person__item" >
                <h2>{person.name} {person.surname}</h2>
                <h3>{person.age}</h3>   
            </div>
        )
    })
    return (
        <div className="person__container">
            <h1>Personas</h1>
            <p>(renderizado funcionál)</p>
            <div>
                {person}
            </div>
        </div>
    );
}

export default Person