
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Auth from './components/Auth';
import AdminNavbar from './components/AdminNavbar';
import AdminAcademy from './components/AdminAcademy';
import AdminCourse from './components/AdminCourse';
import AdminStudents from './components/AdminStudents';
import AddStudent from './components/AddStudent';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/navbar" element={<AdminNavbar/>} />
        <Route path='/adminAcademy' element={<AdminAcademy/>} />
        <Route path='/adminCourse' element={<AdminCourse />} />
        <Route path='/adminStudents' element={<AdminStudents/>} />
        <Route path='/addStudent' element={<AddStudent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
