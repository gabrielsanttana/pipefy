import React from 'react';
import {MdAdd} from 'react-icons/md';
import {FaEllipsisV} from 'react-icons/fa';
import Card, {CardProps} from '../Card';
import {
  Container,
  Header,
  LeftComponent,
  Title,
  CardsCount,
  RightComponent,
  AddButton,
  OptionsButton,
  CardList,
} from './styles';

export interface ListProps {
  title: string;
  creatable: boolean;
  cards: CardProps[];
  done: boolean;
}

const List: React.FC<ListProps> = ({title, creatable, cards, done}) => {
  return (
    <Container done={done}>
      <Header>
        <LeftComponent>
          <Title>{title}</Title>
          <CardsCount>{cards?.length}</CardsCount>
        </LeftComponent>

        <RightComponent>
          <AddButton>
            <MdAdd color="#fff" size={24} />
          </AddButton>
          <OptionsButton>
            <FaEllipsisV color="#999" size={14} />
          </OptionsButton>
        </RightComponent>
      </Header>

      <CardList>
        {cards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            labels={card.labels}
            description={card.description}
            userAvatar={card.userAvatar}
          />
        ))}
      </CardList>
    </Container>
  );
};

export default List;
