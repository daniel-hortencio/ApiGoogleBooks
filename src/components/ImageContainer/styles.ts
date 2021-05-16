import styled from 'styled-components';

export const ImageContainer = styled.div`
  background-color: ${props => props.theme.colors.grayLight};
  width: 100%;
  padding-top: 56%;
  position: relative;
  border-radius: 1rem;

  img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: contain;
    padding: 1rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
  }
`
