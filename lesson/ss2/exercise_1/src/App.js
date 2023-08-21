import logo from './logo.svg';
import './App.css';

function App() {
  const students = [
    {
      id: 1,
      name: 'Ha Van Nam',
      age: 30,
      address: 'Ha Noi'
    },
    {
      id: 2,
      name: 'Chuong van Dinh',
      age: 23,
      address: 'Kien Giang'
    },
    {
      id: 3,
      name: 'Dam Thoai Tin ',
      age: 26,
      address: 'Da Nang'
    },
    {
      id: 4,
      name: 'Banh Thi Queen',
      age: 29,
      address: 'Quang Ngai'
    },
    {
      id: 5,
      name: 'Ngo Huu Hoang Nhat',
      age: 27,
      address: 'Quang Tri'
    },
    {
      id: 6,
      name: 'Tran Viet Duy',
      age: 36,
      address: 'Hoi An'
    }
  ]
  
  return (
  <table className=''>
    {students.map(student => (
          <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
          </tr>
        ))}
  </table>
  );
}

export default App;
