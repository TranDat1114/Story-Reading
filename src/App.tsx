
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/layout';
import {routes} from '@components/pages/routes';


function App() {

  return (
    <div className='App'>
      <Router>
        <Layout >
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
