
import styles from './page.module.css';
import axios from 'axios';

export default function Home({ result }) {
  console.log(result);
  // const [patients, setPatients] = useState([]);
  // useEffect(
  //   () => {
  //     getList();
  //   }, []
  // )
  // const getList = async () => {
  //   const result = await getAll();
  //   setPatients(result);
  // }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Vietnam's COVID-19 Information</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Confirmed</th>
              <th className={styles.th}>Active</th>
              <th className={styles.th}>Recovered</th>
              <th className={styles.th}>Deaths</th>

            </tr>
          </thead>
          <tbody>
            {result.map(patient => (
              <tr className={styles.tr} key={patient.id}>
                <td className={styles.td}>{patient.Date}</td>
                <td className={styles.td}>{patient.Confirmed}</td>
                <td className={styles.td}>{patient.Active}</td>
                <td className={styles.td}>{patient.Recovered}</td>
                <td className={styles.td}>{patient.Deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  // fetch dữ liệu từ file system, API, DB,...
  const result = (await axios.get('http://localhost:4444/patient')).data;
  console.log(result);
  // Giá trị của `props` sẽ được truyền tới component `Home`
  return {
    props: {
      result
    }
  }
}
