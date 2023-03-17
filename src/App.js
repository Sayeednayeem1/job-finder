import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Particle from './Particles/Particle';
import { router } from './Router/Router';

function App() {
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
