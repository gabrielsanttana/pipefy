import React from 'react';
import {useDrag} from 'react-dnd';
import {Container, Header, Label} from './styles';

export interface CardProps {
  id: number;
  labels: string[];
  description: string;
  userAvatar?: string;
}

const Card: React.FC<CardProps> = ({labels, description, userAvatar}) => {
  useDrag({
    item: {
      type: 'CARD',
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container>
      <Header>
        {labels.map((label, index) => (
          <Label color={label} key={index} />
        ))}
        <Label color="#7159c1" />
      </Header>

      <p>{description}</p>

      <img src={userAvatar} alt="User avatar" />
    </Container>
  );
};

export default Card;
