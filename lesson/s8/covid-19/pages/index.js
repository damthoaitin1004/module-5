import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ result }) {
  return (
    <>
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
    </>
  )
}
export async function getServerSideProps() {
  const result = (await axios.get('http://localhost:4444/patient')).data;
  return {
    props: {
      result
    }
  }
}

