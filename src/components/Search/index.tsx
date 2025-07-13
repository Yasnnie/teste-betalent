import styles from "./Search.module.scss"

export function Search(){
    return <label className={styles["c-search"]}>
        <input placeholder="Pesquisar" type="search" />

        <button>
            aqui
        </button>
    </label>
}