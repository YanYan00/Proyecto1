import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className='navbar'>
            <Link to='/'><button className='btn-nav'>KartingRM</button></Link>
            <Link to='/reservas'><button className='btn-nav'>Reservas</button></Link>
            <Link to='/autos'><button className='btn-nav'>Autos</button></Link>
            <Link to='/informacion'><button className='btn-nav'>Información</button></Link>
        </div>
    )
}
export default Navbar;