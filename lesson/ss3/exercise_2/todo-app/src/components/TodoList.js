import { Component } from "react";
class TodoList extends Component {
   constructor() {
      super();
      this.state = {
         todoName: "",
         todoList: ['nhat beo', 'nam']
      }
   }
   handleInputName(nameTodo) {
         this.setState({
            todoName: nameTodo
         })
  
      
   }
   addTodo() {
      if(this.state.todoName.trim() !== ""){
               this.setState({
         todoList: [...this.state.todoList, this.state.todoName],
         todoName: ""
      })
      }

   }

   render() {
      return (
         <>
            <div
               className="mx-auto shadow-lg p-3 mb-5 bg-body rounded"
               style={{ width: "80%", marginTop: "2rem" }}
            >
               <div className=" align-items-center justify-content-center">
                  <div className="text-center">
                     <h1 style={{ fontWeight: "bolder" }}>Todo List</h1>
                  </div>
                  <div className="d-flex justify-content-center p-3">
                     <input type="text" value={this.state.todoName} onChange={(event) => this.handleInputName(event.target.value)} />
   
                     <button className="btn btn-outline-primary" onClick={() => this.addTodo()}>Add</button>
                  </div>
               </div>
               <div
                  className="d-flex align-items-center justify-content-center mx-auto"
                  style={{ width: "40%" }}
               >
                  <table className="table table-light table-bordered table-striped-columns table-hover table-responsive-sm text-center">
                     <tbody>
                        <tr>

                           <th>Name</th>
                        </tr>
                        {this.state.todoList.map((element) => {
                           return (
                            <tr>
                                <td>{element}</td>
                            </tr>  
                           )

                        })}
                     </tbody>
                  </table>
               </div>
            </div>
         </>
      );
   }
}
export default TodoList;