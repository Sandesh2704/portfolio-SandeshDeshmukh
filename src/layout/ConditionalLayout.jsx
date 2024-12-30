import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import MenuSideBar from '../components/MenuSideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function ConditionalLayout() {
    return (
        <>
            <Router>
                <div className="">
                    <Routes>
                        {/* Home page with Navbar and Footer */}
                        <Route
                            path="/"
                            element={
                                <div  className="home-body  px-4 md:px-7 xl:px-10"  >
                                    <NavBar />
                                    <Home />
                                    <Footer />
                                </div>
                            }
                        />
                        {/* Resume page without Navbar and Footer */}
                        <Route
                            path="/resume"
                            element={
                                <div className="resume-body px-4 lg:px-7 xl:px-10">
                                    <Resume />
                                </div>
                            }
                        />
                    </Routes>
                    <MenuSideBar />
                </div>
            </Router>
        </>
    );
}