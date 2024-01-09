import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function EmployeeForm({ isUpdate = false }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
    });

    useEffect(() => {
        if (isUpdate) {
            // If it's an update, fetch the employee's data
            EmployeeService.getEmployeeById(id).then((res) => {
                setEmployee(res.data);
            });
        }
    }, [id, isUpdate]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isUpdate) {
            // If it's an update, send a PUT request
            EmployeeService.updateEmployee(employee, id)
                .then(() => {
                    navigate('/employees');
                })
                .catch((error) => {
                    console.error('Error updating employee:', error);
                });
        } else {
            // If it's not an update, send a POST request to add a new employee
            EmployeeService.createEmployee(employee)
                .then(() => {
                    navigate('/employees');
                })
                .catch((error) => {
                    console.error('Error adding employee:', error);
                });
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2 className="text-center">
                        {isUpdate ? 'Update Employee' : 'Add Employee'}
                    </h2>
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
                                value={employee.firstName}
                                onChange={handleInputChange}
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
                                value={employee.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailId">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailId"
                                name="emailId"
                                value={employee.emailId}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {isUpdate ? 'Update' : 'Save'}
                        </button>
                        <button
                            onClick={() => navigate('/employees')}
                            className="btn btn-secondary ml-2"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;
