import styles from "./Default.module.scss"

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";
import { useEffect, useState } from "react";
import { Employe } from "../../types/Employees";
import { getEmployees } from "../../services/EmployeesService";

export function Default() {
    const [employees, setEmployees] = useState<Employe[]>([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        getEmployees().then(({data})=> setEmployees(data))
    },[])

    return <>
        <Header />

        <div className={styles.container}>
            <main>
                <div className={styles.container__row}>
                    <h2>Funcionários</h2>

                    <Search />
                </div>

                <Table data={employees}/>
            </main>
        </div>
    </>
}