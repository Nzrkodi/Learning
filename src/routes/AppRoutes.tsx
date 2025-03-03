import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Example from '../pages/Example';
import Layouts from '../layouts';

const AppRoutes = () => {
    return (
        <Router>
          <Routes>

          <Route path='/' element={<Layouts/>}>
            <Route index element={<Home />} />
            <Route path="/example" element={<Example />} />
          </Route>
            
            {/* <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route> */}
          </Routes>
        </Router>
      );
}

export default AppRoutes