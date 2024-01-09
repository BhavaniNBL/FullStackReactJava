// import React, { Component } from 'react';
// import EmployeeService from '../services/EmployeeService';
// import { Link } from 'react-router-dom'; 


// class ListEmployee extends Component {
//     constructor(props) {
//         super(props) 
//             this.state = {
//                 employees: []
            
//         }
//         // this.addEmployee = this.addEmployee.bind(this);
//     }
//     componentDidMount() {
       
//         EmployeeService.getEmployees().then((res) => {
//             console.log("res.data", res.data);
//             this.setState({ employees: res.data});
//         });
//     }
//     // editEmployee = (id) => {
//     //     this.props.history.push(`/update-employees/${id}`);
//     // }

//     // addEmployee = () => {
        
//     //     this.props.history.push('/add-employees');
//     // }
   
//     render() {
//         return (
//             <div>
//                 <h2 className='text-center' >Employee List</h2>
//                 <div className="row">
//                     {/* <button className="btn btn-primary" onClick={this.addEmployee}>
//                         Add Employee
//                     </button> */}
//                       <Link to="/add-employees" className="btn btn-primary">
//                         Add Employee
//                     </Link>
//                 </div>
//                 <div className="row table-responsive">
                
//                     <table className='table table-bordered table-striped'>
//                         <thead>
//                             <tr>
//                             <th>Employee first name</th>
//                             <th>Employee last name</th>
//                             <th>Employee email id</th>
//                             <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.employees.map(
//                                     employee => 
//                                     <tr key={employee.id}>
//                                         <td>{employee.firstName}</td>
//                                         <td>{employee.lastName}</td>
//                                         <td>{employee.emailId}</td>
//                                         <td>
//                                             {/* <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button> */}
//                                                 <Link to={`/update-employees/${id}`} className="btn btn-primary">
//                                                     Update
//                                                 </Link>
//                                         </td>
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
                        

//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }

// export default ListEmployee;
import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom'; 
import { useNavigate, useParams } from 'react-router-dom';

function ListEmployee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const navigate = useNavigate();

    const editEmployee = (id) => {
        navigate(`/update-employees/${id}`);
    }
    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    }
    const deleteEmployee = (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
          EmployeeService.deleteEmployee(id)
            .then(() => {
              // Filter out the deleted employee from the employees list
              setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
            })
            .catch((error) => {
              console.error('Error deleting employee:', error);
            });
        }
      };
      

    return (
        <div>
            <h2 className='text-center'>Employee List</h2>
            <div className="row">
                <Link to="/add-employees" className="btn btn-primary">
                    Add Employee
                </Link>
            </div>
            <div className="row table-responsive">
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Employee first name</th>
                            <th>Employee last name</th>
                            <th>Employee email id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                    <button onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                    <button onClick={() => viewEmployee(employee.id)} className="btn btn-info">View</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployee;



