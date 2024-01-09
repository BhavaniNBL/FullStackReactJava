// import "./App.css";
// import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
// import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
// import FooterComponent from "./components/FooterComponent";
// import HeaderComponent from "./components/HeaderComponent";
// import ListEmployee from "./components/ListEmployee";
// import { BrowserRouter as Router , Route, Routes} from "react-router-dom";


// function App() {
//   return (
//     <Router>
//       {/* <div className="container"> */}
//         <HeaderComponent></HeaderComponent>
//         <div className="container">
//           <Routes>
//             <Route path="/" exact element={<ListEmployee />}></Route>
//             <Route path="/employees" element={<ListEmployee />}></Route>
//             <Route path="/add-employees" element={<CreateEmployeeComponent />}></Route>
//             <Route path="/update-employees/:id" element={<UpdateEmployeeComponent />}></Route>
//              {/* <ListEmployee /> */}
//           </Routes>
//         </div>
//         <FooterComponent></FooterComponent>
//       {/* </div> */}
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EmployeeForm";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-employees" element={<EmployeeForm />} />
          <Route path="/update-employees/:id" element={<EmployeeForm isUpdate={true} />} />
          <Route path="/view-employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </div>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;

