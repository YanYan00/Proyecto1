import { Link } from 'react-router';
import './Home.css';

function Home(){
    return(
        <div className='home'>
            <div className='hero-home'>
                <h1>Bienvenido a KartingRM</h1>
                <div className='info-home'>
                    <h2>Horarios de atención:</h2>
                    <p className='dias'>-Lunes a Viernes: 14:00 a 22:00 horas.</p>
                    <p className='dias'>-Sábados, Domingos y Feriados: 10:00 a 22:00 horas. </p>    
                </div>
                <Link><button className='btn-home'>Reservar ahora</button></Link>
            </div>
            
        </div>
    )
    
}

export default Home;