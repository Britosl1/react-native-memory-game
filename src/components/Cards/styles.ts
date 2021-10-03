import styled, {css} from 'styled-components/native';

type CardStyleProps = {
  flipped: boolean;
};

const cardStyle = css`
  border-radius: 5px;
  width: 60px;
  height: 60px;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const FrontCard = styled.Image<CardStyleProps>`
  ${cardStyle}
  z-index: ${props => (props.flipped ? 2 : 1)};
  transform: ${props => (props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)')};
`;

export const BackCard = styled.Image<CardStyleProps>`
  ${cardStyle}
  z-index: ${props => (props.flipped ? 1 : 2)};
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)')};
  position: absolute;
  top: 0px;
  left: 0px;
`;
