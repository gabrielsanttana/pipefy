import React, {useRef, useContext} from 'react';
import BoardContext from '../Board/context';
import {useDrag, useDrop} from 'react-dnd';
import {Container, Header, Label} from './styles';

export interface CardProps {
  id: number;
  index?: number;
  labels: string[];
  description: string;
  userAvatar?: string;
  listIndex?: number;
}

const Card: React.FC<CardProps> = ({
  id,
  index,
  labels,
  description,
  userAvatar,
  listIndex,
}) => {
  const ref: any = useRef();

  const {moveCard} = useContext<any>(BoardContext);

  const [{isDragging}, dragRef] = useDrag({
    item: {
      type: 'CARD',
      id,
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: any, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        console.log(`card ${draggedIndex} antes do card ${targetIndex}`);
      }

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        console.log(`card ${draggedIndex} depois do card ${targetIndex}`);
      }

      moveCard(draggedIndex, targetIndex);
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
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
