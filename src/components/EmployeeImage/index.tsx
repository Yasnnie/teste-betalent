import styles from "./EmployeeImage.module.scss"

interface Props{
    src: string
    alt:string
}

export function EmployeeImage({src, alt}:Props){

    function getFallbackImage(e: React.SyntheticEvent<HTMLImageElement>) {
        e.currentTarget.onerror = null
        e.currentTarget.src = "/assets/user-img.jpg"
    }
    
    return <img 
                className={styles["employee-img"]} 
                src={src} 
                alt={alt}
                onError={getFallbackImage}
            />
}