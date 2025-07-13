import styles from "./Default.module.scss"

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Table } from "../../components/Table";

export function Default() {
    return <>
        <Header />

        <div className={styles.container}>
            <main>
                <div className={styles.container__row}>
                    <h2>Funcionários</h2>

                    <Search />
                </div>

                <Table />
            </main>
        </div>
    </>
}