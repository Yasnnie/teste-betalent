import styles from "./Table.module.scss"

import { Employe } from "../../types/Employees"
import { formatDateDDMMYY, formatPhone } from "../../utils/formater"
interface Props{
    data: Employe[]
}

export function Table({data}:Props){
    return<> 
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Foto</td>
                    <td>Nome</td>
                    <td>Cargo</td>
                    <td>DATA DE ADMISSÃO</td>
                    <td>TELEFONE</td>
                </tr>
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

        <div className={styles["mobile-table"]}>
            <header>
                <span>Foto</span>
                <span>Nome</span>
                <span className={styles.dot} />
            </header>
            <ul>
                {data.map((employe)=>
                    <li key={employe.id}>
                        <details>
                            <summary>
                                <div className={styles["mobile-table__c-img"]}>
                                    <img 
                                        className={styles["employee-img"]} 
                                        src={employe.image} 
                                        alt={`Funcionário - ${employe.name}`}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null 
                                            e.currentTarget.src = '/assets/user-img.jpg'
                                        }}
                                    />
                                </div>

                                <strong>{employe.name}</strong>

                                <img src="/assets/chevron.svg" alt="Abrir" className={styles["chevron"]}/>
                            </summary>

                            <div className={styles["mobile-table__employe-data"]}>
                                <p><b>Cargo:</b> {employe.job}</p>
                                <p><b>Data de admissão:</b>  {formatDateDDMMYY(employe.admission_date)}</p>
                                <p><b>Telefone:</b>  {formatPhone(employe.phone)}</p>
                            </div>
                        </details>
                    </li>
                )}
                
            </ul>
        </div>
        
    </>
}