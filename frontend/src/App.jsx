import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes}from 'react-router-dom' ;
import StudentViewCoursesPage from './pages/StudentViewCoursesPage.jsx';
//function App() {
//   //const [count, setCount] = useState(0)

//   return (
//     import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//     import StudentViewCoursesPage from './pages/StudentViewCoursesPage';
    
    function App() {
        return (
            <Router>
                <Routes>
                    <Route path="/StudentViewCoursesPage.jsx" element={<StudentViewCoursesPage />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
        );
    }
export default App;  
