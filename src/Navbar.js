const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Todo List</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Task</a>
            </div>
        </nav>
    );
}
 
export default Navbar;