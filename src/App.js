import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { CircularProgress } from '@mui/material';
const Appointments = React.lazy(() => import('./pages/Appointments'));
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Provider store={store}>
      <div className="px-40 py-20">
        <BrowserRouter>
          <Suspense
            fallback={
              <>
                <div className="flex flex-col h-[calc(100vh-80px)] gap-5 justify-center w-full items-center ">
                  <div className="  py-16 px-8 flex flex-col gap-5">
                    <CircularProgress />
                  </div>
                </div>
              </>
            }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appointments/:lawyersid" element={<Appointments />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;