import React from 'react';
import { ReactDOM } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  Routes,
} from 'react-router-dom';

// Pages
import HomePage from './pages';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import NotFoundPage from './pages/404';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          // Home
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/index" element={<Navigate replace to="/" />} />
          <Route path="/index.html" element={<Navigate replace to="/" />} />
          // About
          <Route path="/about" element={<AboutPage />} />
          // Portfolio
          <Route path="/projects" element={<ProjectsPage />} />
          // 404
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRouter;
