import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Navbar from './components/nav';
import Newsletters from './components/newsletters';
import Signup from './components/signup';

// 1) Import your SingleNewsletter detail component
import SingleNewsletter from './components/SingleNewsletter';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="header">
          <Navbar />
        </div>
        <div className="main">

          {/* 2) Define your routes here */}
          <Routes>
            {/* Home page at "/", which includes your sections */}
            <Route
              path="/"
              element={
                <>
                  <Signup />
                  <About />
                  <Newsletters />
                </>
              }
            />

            {/* Single Newsletter page at "/newsletter/:slug" */}
            <Route path="/newsletter/:slug" element={<SingleNewsletter />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
