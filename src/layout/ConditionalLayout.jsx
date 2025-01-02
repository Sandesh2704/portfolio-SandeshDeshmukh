import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Resume from '../pages/Resume';
import MenuSideBar from '../components/MenuSideBar';

export default function ConditionalLayout() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [location]); // Runs every time the route changes
  
  return (
    <>
      {/* <Preloader/> */}
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <Home isAnimationComplete={isAnimationComplete} setIsAnimationComplete={setIsAnimationComplete} />
            }
          />
          <Route
            path="/resume"
            element={
              <div className="resume-body px-4 lg:px-7 xl:px-10">
                <Resume />
              </div>
            }
          />
        </Routes>

        {isAnimationComplete && <MenuSideBar />}
      </div>
    </>
  );
}
