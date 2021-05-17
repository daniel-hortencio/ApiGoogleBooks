import styled, { css } from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;

  box-shadow: 0px 1px 6px 0 rgba(0,0,0,0.06);

  @media(min-width: ${props => props.theme.breakpoints.notebook}){
    :hover {
      box-shadow: 0px 4px 20px 0 rgba(0,0,0,0.15);
      transform: translateY(-0.5rem);
    }
  }

`

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

export const Row = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content:space-between;
  align-items: flex-end;
  margin-top: -1.5rem;
  position: relative;
  z-index: 2;

  small {
    opacity: 0.5;
  }
`

interface ButtonLike {
  isFavorite: boolean;
}

export const ButtonLike = styled.button< ButtonLike>`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  border: solid 2px ${props => props.theme.colors.grayLight};

  svg {
    stroke: ${props => props.theme.colors.gray};
    fill: transparent;
  }

  :hover {
    svg {
      stroke: ${props => props.theme.colors.secondary};
      fill: transparent;
    }
  }

  ${props => props.isFavorite && css`
    svg {
      stroke: ${props => props.theme.colors.secondary};
      fill: ${props => props.theme.colors.secondary} !important;
    }
  `}

`

export const Details = styled.div`
  padding: 1rem;

  h3, p{
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  footer {
    display: flex;
    align-items: center;

    a {
      flex: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
      border-radius: 1rem;
      padding: 0.5rem;

      :hover {
        background-color: ${props => props.theme.colors.primaryDark};
      }

      svg {
        margin-left: 1rem;
        fill: #fff;
      }
    }
  }
`
