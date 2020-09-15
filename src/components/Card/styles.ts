import styled from 'styled-components';

interface LabelProps {
  color: string;
}

export const Container = styled.li`
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-top: 5px;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: -9px;
  left: 15px;
`;

export const Label = styled.span<LabelProps>`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${(props) => props.color};
  margin-right: 5px;
`;
