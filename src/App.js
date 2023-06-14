function App() { 
    let str = "Hii Ayushi";
    let pi = 3.14;
    let active = true;
    return (
        <><h1>
            {str}
        </h1>
            <h1>
                pi={pi}
            </h1>
            {active ? <h1>{str}</h1> : <h2>{pi}</h2>}
        </>
    )
    
}
export default App;