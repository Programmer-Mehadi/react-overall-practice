import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  return (
    <div className="min-h-[100vh]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
