import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 3rem;
`;

const LandingPage: React.SFC<{}> = (): React.ReactElement => {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  );
};

export default LandingPage;
