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
      listIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: any, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedCardIndex = item.index;
      const targetCardIndex = index;

      if (
        draggedCardIndex === targetCardIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedCardIndex < targetCardIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedCardIndex > targetCardIndex && draggedTop > targetCenter) {
        return;
      }

      moveCard(
        draggedListIndex,
        targetListIndex,
        draggedCardIndex,
        targetCardIndex,
      );

      item.index = targetCardIndex;
      item.listIndex = targetListIndex;
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
