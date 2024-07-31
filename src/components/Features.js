import React from 'react';
import styled from 'styled-components';

const FeaturesWrapper = styled.div`
  font-family: 'Pretendard';
  margin-top: 200px;
`;

const FeatureImage = styled.img`
  position: relative;
  top: 460px;
`;

const FeaturesContent = styled.div`
  margin-top: 220px;
`;

const Feature = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  border-radius: 10px;
  width: 250px;
  height: 65px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Feature1 = styled(Feature)`
  margin: auto;
`;

const Feature2 = styled(Feature)`
  margin: auto;
`;

const SecondFeatures = styled.div`
  display: flex;
  justify-content: center;
  gap: 600px;
  margin-top: 20px;
`;

const ThirdFeatures = styled.div`
  display: flex;
  justify-content: center;
  gap: 600px;
  margin-top: 120px;
`;

export const Features = () => (
    <FeaturesWrapper>
      <FeatureImage src="/images/소중한 프로젝트, 다양한 기능이 필요하죠.png" alt="Project needs" />
      <FeaturesContent>
        <Feature1>프로젝트 소개</Feature1>
        <SecondFeatures>
          <Feature>역할 분담</Feature>
          <Feature>칸반보드</Feature>
        </SecondFeatures>
        <ThirdFeatures>
          <Feature>게시판</Feature>
          <Feature>개인 캘린더</Feature>
        </ThirdFeatures>
        <Feature2>개인 일정 관리</Feature2>
      </FeaturesContent>
    </FeaturesWrapper>
);