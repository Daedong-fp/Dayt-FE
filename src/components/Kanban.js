import styled from 'styled-components';

const KanbanWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 300px;
`;

const KanbanImg = styled.img`
  margin-bottom:200px;
  margin-top:200px;
`;

export const Kanban = () => (

    <KanbanWrapper>
      <KanbanImg src="/images/Group 52.png" alt="Kanban" />
    </KanbanWrapper>

);