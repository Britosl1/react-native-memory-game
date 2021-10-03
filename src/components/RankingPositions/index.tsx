import React from 'react';
import {RankingContainer, TextRankingContainer} from './styles';

interface IRankingPositionsProps {
  name: Promise<string> | string;
  score: Promise<string> | string;
}

const RankingPositions: React.FC<IRankingPositionsProps> = ({name, score}) => {
  return (
    <RankingContainer>
      <TextRankingContainer>{`Name: ${name}`}</TextRankingContainer>
      <TextRankingContainer>{`Score: ${score}`}</TextRankingContainer>
    </RankingContainer>
  );
};

export default RankingPositions;
