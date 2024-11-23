// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact'; 
import WorkPage from './pages/Work'
import ShowcasePage from './pages/Showcase';
import withTransition from "./transition";

// Wrap your page components with the HOC to apply transition
const HomePageWithTransition = withTransition(HomePage);
const AboutPageWithTransition = withTransition(AboutPage);
const WorkPageWithTransition = withTransition(WorkPage);
const ShowcasePageWithTransition = withTransition(ShowcasePage);
const ContactPageWithTransition = withTransition(ContactPage);

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageWithTransition />} />
        <Route path="/about" element={<AboutPageWithTransition />} />
        <Route path="/work" element={<WorkPageWithTransition />} />
        <Route path="/showcase" element={<ShowcasePageWithTransition />} />
        <Route path="/contact" element={<ContactPageWithTransition />} />
      </Routes>
    </Router>
  );
}

export default App;