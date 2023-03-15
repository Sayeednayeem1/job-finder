import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div className='bg-[#EAECFF]' style={{
      height: '100vh'
    }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
