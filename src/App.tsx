import React from 'react';
import styled from 'styled-components';
import ComicsContainer from './modules/ComicList/container/ComicsContainer';


const PageWrapper = styled.div`
  background: linear-gradient(
    to bottom right, 
    #9B0000 0%,
    #9B0000 25%,
    #FFB946 50%,
    #FFD246 75%,
    #FFF046 100%
  );
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {

  return (
      <PageWrapper>
          <ComicsContainer/>
      </PageWrapper>
  );
}

export default App;
