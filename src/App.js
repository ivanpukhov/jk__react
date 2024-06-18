import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Abit from "./components/Abit";
import Stud from "./components/Stud";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contacts from "./components/Contacts";
import Schedule from "./components/Schedule";
import NewsPage from "./components/NewsPage";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/abit" element={<Abit/>}/>
                <Route path="/stud" element={<Stud/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/news" element={<NewsPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
