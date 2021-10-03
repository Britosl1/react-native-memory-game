import styled from 'styled-components/native';

export const GameContainer = styled.View`
  background-color: #bca0dc;
  align-items: center;
  align-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const GameTopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #7c5295;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  height: 30px;
  align-items: center;
`;

export const GameBottomContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3c1361;
`;

export const GameTextContainer = styled.Text`
  flex: 1;
  font-size: 20px;
  color: white;
  font-weight: 500;
  text-align: left;
`;
