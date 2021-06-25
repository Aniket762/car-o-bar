import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';

import { HomePage } from './app/container/Homepage';
import { Navbar } from './app/components/navbar';
const AppContainer = styled.div`
${tw`
  w-full
  h-full
  flex
  flex-col
`};

`

function App() {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  );
}

export default App;
