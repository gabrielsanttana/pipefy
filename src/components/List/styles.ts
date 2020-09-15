import styled from 'styled-components';

interface ListProps {
  done: boolean;
}

export const Container = styled.div<ListProps>`
  height: 100%;
  flex: 0 0 320px;
  padding: 0 15px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
`;

export const LeftComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
`;

export const CardsCount = styled.span``;

export const RightComponent = styled.div``;

export const AddButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 18px;
  border: 0;
  background-color: #3b5dfd;
  cursor: pointer;
`;

export const OptionsButton = styled.button``;

export const CardList = styled.ul`
  margin-top: 30px;
  list-style: none;
`;
