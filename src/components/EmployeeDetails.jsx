import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Employee Details</h2>
      <div>
        <strong>First Name:</strong> {employee.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {employee.lastName}
      </div>
      <div>
        <strong>Email:</strong> {employee.emailId}
      </div>
    </div>
  );
}

export default EmployeeDetails;
