import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { StyledGlobal } from 'theme';

import AppLayout from 'routes';

function App() {
  return (
    <main className='position-relative'>
      <StyledGlobal/>
      <AppLayout/>
    </main>
  );
}

export default App;
