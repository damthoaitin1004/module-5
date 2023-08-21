import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [
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
    }
  }

  render() {

    return <table style={{borderCollapse:"collapse"}} border={1}>

      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
      {this.state.students.map((student, index) => {
        return (
          <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
          </tr>
        );

      })}

    </table>;
  }
}
export default StudentList;
