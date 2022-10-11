import {Box, Center, Heading, Stack, Text} from '@chakra-ui/react';
import styles from '../styles/IntroSections.module.css';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import {Grid, GridItem} from '@chakra-ui/react';
import {useEffect, useRef, useState} from 'react';

const FadeIn = ({children}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((cards) => {
      cards.forEach((card) => setVisible(card.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <Box
      ref={domRef}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
    >
      {children}
    </Box>
  );
};
const IntroCard = ({entry, id}) => {
  const image = (
    <GridItem colSpan={3} rowSpan={4} className={styles.dataImage}>
      <Image
        src={'/images/home-data-image-' + id + '.jpeg'}
        alt="testImage"
        width={'600px'}
        height={'300px'}
      />
    </GridItem>
  );
  const body = (
    <GridItem colSpan={1} rowSpan={4}>
      <Text fontSize="lg">{entry.body}</Text>
    </GridItem>
  );

  return (
    <Center marginLeft="15%" marginRight="15%" marginTop="200px">
      <Grid
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={1}
      >
        <GridItem colSpan={4}>
          <Heading as="h1" size="4xl">
            {entry.title}
          </Heading>
        </GridItem>

        {id % 2 == 0 ? (
          <>
            {body}
            {image}
          </>
        ) : (
          <>
            {image}
            {body}
          </>
        )}
      </Grid>
    </Center>
  );
};

const IntroScroll = ({children}) => {
  return (
    <Stack>
      {children.map((entry, i) => {
        return (
          <>
            <FadeIn key={'fade' + i}>
              <IntroCard entry={entry} id={i} key={'card' + i} />
            </FadeIn>
            <FadeIn key={'doubleFade' + i}>
              <div className={styles.divSpacer}></div>
            </FadeIn>
          </>
        );
      })}
    </Stack>
  );
};

IntroScroll.propTypes = {
  children: PropTypes.object,
};
FadeIn.propTypes = {
  children: PropTypes.object,
};

IntroCard.propTypes = {
  entry: PropTypes.string,
  id: PropTypes.number,
};

export default IntroScroll;
