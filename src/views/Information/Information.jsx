import { useContext } from 'react';
import './Information.css'
import { InformationContext } from '../../context/InformationContext';

const Information = () =>{
    const {tarifas,descuentos} = useContext(InformationContext);
    console.log(tarifas);
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
                        {tarifas.length>0?(
                                tarifas.map((tarifa,index)=>(
                                <tr key={index}>
                                    <td>{tarifa.vueltasTiempo}</td>
                                    <td>{tarifa.precio}</td>
                                    <td>{tarifa.duracion}</td>
                                </tr>
                            ))
                            ):(
                                <tr>
                                    <td>Cargando tarifas...</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <h2>Tarifa y duracion de las reservas</h2>
                <table className='tabla'>
                    <thead>
                        <tr>
                            <th>Número de vueltas o tiempo máximo</th>
                            <th>Precios regulares</th>
                        </tr>
                    </thead>
                    <tbody>
                        {descuentos.length>0?(
                            descuentos.map((dscto,index)=>(
                                <tr>
                                    <td>{dscto.numeroPersonas}</td>
                                    <td>{dscto.descuento}%</td>
                                </tr>
                            )
                        )):(
                            <tr>
                                <td>Cargando descuentos...</td>
                                
                            </tr>
                        )}
                    </tbody>
                </table>   
            </div>  
        </div>
    )
}

export default Information;