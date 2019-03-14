import styled from '../themed-styled';

const ContainerBase = styled.div`
  width: 100%;
  max-width: ${({ theme }) => `${theme.sizing.content.max}px`};
`;

export default ContainerBase;
