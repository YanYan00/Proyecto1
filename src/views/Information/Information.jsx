import './Information.css'

function Information(){
    return(
        <div className='information-cont'>
            <div className='vueltas'>
                <h2>Tarifa y duracion de las reservas</h2>
                <table className='tabla'>
                    <thead>
                        <tr>
                            <th>Número de vueltas o tiempo máximo</th>
                            <th>Precios regulares</th>
                            <th>Duración total de la reserva</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10 vueltas o máx 10 min</td>
                            <td>15.000</td>
                            <td>30 min</td>
                        </tr>
                        <tr>
                            <td>15 vueltas o máx 15 min</td>
                            <td>20.000</td>
                            <td>35 min</td>
                        </tr>
                        <tr>
                            <td>20 vueltas o máx 20 min</td>
                            <td>25.000</td>
                            <td>40 min</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Tarifa y duracion de las reservas</h2>
                <table className='tabla'>
                    <thead>
                        <tr>
                            <th>Número de vueltas o tiempo máximo</th>
                            <th>Precios regulares</th>
                            <th>Duración total de la reserva</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10 vueltas o máx 10 min</td>
                            <td>15.000</td>
                            <td>30 min</td>
                        </tr>
                        <tr>
                            <td>15 vueltas o máx 15 min</td>
                            <td>20.000</td>
                            <td>35 min</td>
                        </tr>
                        <tr>
                            <td>20 vueltas o máx 20 min</td>
                            <td>25.000</td>
                            <td>40 min</td>
                        </tr>
                    </tbody>
                </table>   
            </div>  
        </div>
    )
}

export default Information;