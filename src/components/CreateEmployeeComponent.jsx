import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6

function CreateEmployeeComponent() {
    const navigate = useNavigate(); // Get the navigate function

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const emailId = e.target.emailId.value;

        const employee = {
            firstName,
            lastName,
            emailId,
        };

        EmployeeService.createEmployee(employee)
            .then(() => {
                navigate('/employees'); // Redirect to the list of employees
            })
            .catch((error) => {
                console.error('Error adding employee:', error);
            });
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className='text-center'>Add Employee</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailId"
                                name="emailId"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                        <Link to="/employees" className="btn btn-secondary ml-2">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;
