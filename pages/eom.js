import styles from '../styles/eom.module.css'
import { Toolbar } from '../components/Toolbar'

export const Eom = ({ employee }) => {
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>
                    Un osito de peluche de Taiwan  as,man
                </h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
    )

    const employee = await apiResponse.json()

    return {
        props: {
            employee
        }
    }
}

export default Eom;