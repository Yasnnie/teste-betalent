import styles from "./Search.module.scss"

interface Props {
  value: string
  onChange: (value: string) => void
}

export function Search({ value, onChange }: Props) {
    return <label className={styles["c-search"]}>
        <input
            placeholder="Pesquisar"
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />

      <button >
        <img src="/assets/search.svg" alt="Buscar" />
      </button>
    </label>
}