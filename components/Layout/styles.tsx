import styled from '../../styles/themed-styled';

const Container = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 3rem;
  grid-template-areas:
    'header'
    'main'
    'footer';
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
`;

export { Container };
