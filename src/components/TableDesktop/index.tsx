import styles from './TableDesktop.module.scss'
import { Employee } from '../../types/Employees'
import { formatDateDDMMYY, formatPhone } from '../../utils/formater'
import { EmployeeImage } from '../EmployeeImage'


interface Props {
  data: Employee[]
}

export function TableDesktop({ data }: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Cargo</th>
          <th>Data de admissão</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employe) => (
          <tr key={employe.id}>
            <td>
              <EmployeeImage
                src={employe.image}
                alt={`Funcionário - ${employe.name}`}
              />
            </td>
            <td>{employe.name}</td>
            <td>{employe.job}</td>
            <td>{formatDateDDMMYY(employe.admission_date)}</td>
            <td>{formatPhone(employe.phone)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
