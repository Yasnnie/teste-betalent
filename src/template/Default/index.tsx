import { useEffect, useMemo, useState } from "react"
import styles from "./Default.module.scss"
import { useMediaQuery } from 'react-responsive'

import { useDebouncedValue } from "../../hooks/useDebouncedValue"
import { Employee } from "../../types/Employees"

import { getEmployees } from "../../services/EmployeesService"

import { Header } from "../../components/Header"
import { Search } from "../../components/Search"
import { TableMobile } from "../../components/TableMobile"
import { TableDesktop } from "../../components/TableDesktop"

export function Default() {
  const isMobile = useMediaQuery({ maxWidth: 750 })
  const [employees, setEmployees] = useState<Employee[]>([])
  const [search, setSearch] = useState("")
  const debouncedSearch = useDebouncedValue(search, 400)

  useEffect(() => {
    getEmployees().then(({ data }) => setEmployees(data))
  }, [])

  const filtered = useMemo(() => {
    const query = debouncedSearch.toLowerCase().trim()
    if (!query) return employees

    return employees.filter(({ name, job, phone }) =>
      [name, job, phone].some((field) =>
        field.toLowerCase().includes(query)
      )
    )
  }, [debouncedSearch, employees])

  return (
    <>
      <Header />

      <div className={styles.container}>
        <main>
          <div className={styles.container__row}>
            <h2>Funcionários</h2>
            <Search value={search} onChange={setSearch} />
          </div>

           {isMobile ? (
            <TableMobile data={filtered} />
          ) : (
            <TableDesktop data={filtered} />
          )}
        </main>
      </div>
    </>
  )
}
