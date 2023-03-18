import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import Particle from './Particles/Particle';
import Spinner from './ReactSpinner/Spinner';
import { router } from './Router/Router';

function App() {
  const { loading } = useContext(AuthContext);

  // todo loading function
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className='bg-[#E9EEF1] bg-cover'>
      <Particle></Particle>
      <div>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;

// className='bg-[#EAECFF] bg-cover'
