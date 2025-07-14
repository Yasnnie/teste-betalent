import styles from "./TableMobile.module.scss"
import { Employee } from "../../types/Employees"
import { formatDateDDMMYY, formatPhone } from "../../utils/formater"
import { EmployeeImage } from "../EmployeeImage"

interface Props{
    data: Employee[]
}

export function TableMobile({data}:Props){
    return <div className={styles["mobile-table"]}>
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
                                    <EmployeeImage
                                        src={employe.image} 
                                        alt={`Funcionário - ${employe.name}`}
                                        
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
        
}