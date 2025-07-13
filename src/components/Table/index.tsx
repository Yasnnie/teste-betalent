import styles from "./Table.module.scss"

import { Employe } from "../../types/Employees"
import { formatDateDDMMYY, formatPhone } from "../../utils/formater"
interface Props{
    data: Employe[]
}

export function Table({data}:Props){
    return <table className={styles.table}>
        <thead>
            <td>Foto</td>
            <td>Nome</td>
            <td>Cargo</td>
            <td>DATA DE ADMISSÃO</td>
            <td>TELEFONE</td>
        </thead>


        <tbody>
            {data.map((employe)=> 
                <tr key={employe.id}> 
                    <td>
                        <img 
                            className={styles["employee-img"]} 
                            src={employe.image} 
                            alt={`Funcionário - ${employe.name}`}
                            onError={(e) => {
                                e.currentTarget.onerror = null 
                                e.currentTarget.src = '/assets/user-img.jpg'
                            }}
                        />
                    </td>
                    <td>
                        {employe.name}
                    </td>
                    <td>
                        {employe.job}
                    </td>
                    <td>
                        {formatDateDDMMYY(employe.admission_date)}
                    </td>
                    <td>
                        {formatPhone(employe.phone)}
                    </td>
                </tr>
            )}
            
        </tbody>
    </table>
}