import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div className='bg-[#EAECFF]' style={{
      height: '80vh'
    }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
