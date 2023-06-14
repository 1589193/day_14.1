function App() { 
    let user = { id: 1, name: "sanjay" };
    return (
        <>
            <h1>
                {user.id}
            </h1>
            <h2>
                {user.name}
            </h2>
        </>
    );
    
}
export default App;