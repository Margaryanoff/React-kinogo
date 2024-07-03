import '../Nav/Nav.css'

const Nav = () =>{
    return(
        <nav>
            <div className="container nav_main">
                <div className='nav_logo'>
                    <h1>KINOGO</h1>
                </div>
                <div>
                    
                    <ul>
                        <li><a href="">Sign In /</a></li>
                        <li><a href="">Register /</a></li>
                        <li><a href="">History</a></li>
                    </ul>
                </div>
                <form action="">
                    <input type="text" />
                    <input type="submit" value={'OK'} className='button_nav'/>
                </form>
            </div>
        </nav>
    )
}
export default Nav