import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [urlImageModal, setUrlImageModal] = useState<string>('');

  function handleViewImage(url: string): void {
    setUrlImageModal(url);
    onOpen();
  }

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </Grid>

      <ModalViewImage
        imgUrl={urlImageModal}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
