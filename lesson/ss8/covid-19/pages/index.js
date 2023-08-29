
import axios from 'axios';

export default function Home({ result }) {
  console.log(result);
    return (
    <div >
      <main >
        <h1>Vietnam's COVID-19 Information</h1>
        <table border={1} >
          <thead>
            <tr >
              <th >Date</th>
              <th >Confirmed</th>
              <th >Active</th>
              <th >Recovered</th>
              <th >Deaths</th>
            </tr>
          </thead>
          <tbody>
            {result.map(patient => (
              <tr  key={patient.id}>
                <td >{patient.Date}</td>
                <td >{patient.Confirmed}</td>
                <td >{patient.Active}</td>
                <td >{patient.Recovered}</td>
                <td >{patient.Deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const result = (await axios.get('http://localhost:4444/patient')).data;
  return {
    props: {
      result
    }
  }
}
