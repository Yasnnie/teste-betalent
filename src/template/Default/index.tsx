import styles from "./Default.module.scss"
import { Header } from "../../components/Header"
import { Search } from "../../components/Search"
import { Table } from "../../components/Table"
import { useEffect, useMemo, useState } from "react"
import { Employe } from "../../types/Employees"
import { getEmployees } from "../../services/EmployeesService"

export function Default() {
  const [employees, setEmployees] = useState<Employe[]>([])
  const [filtered, setFiltered] = useState<Employe[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    getEmployees().then(({ data }) => {
      setEmployees(data)
      setFiltered(data)
    })
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      const query = search.toLowerCase().trim()
      if (!query) return setFiltered(employees)

      const result = employees.filter(({ name, job, phone }) =>
        [name, job, phone].some((field) =>
          field.toLowerCase().includes(query)
        )
      )

      setFiltered(result)
    }, 400)

    return () => clearTimeout(timeout)
  }, [search, employees])

  return (
    <>
      <Header />

      <div className={styles.container}>
        <main>
          <div className={styles.container__row}>
            <h2>Funcionários</h2>
            <Search value={search} onChange={setSearch} />
          </div>

          <Table data={filtered} />
        </main>
      </div>
    </>
  )
}
