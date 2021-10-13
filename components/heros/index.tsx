import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

import Title from '../title';
import Styles from './heros.module.css';
import CharacterSlider from './character-slider';

const data = [
  {
    name: 'Dakota Fray',
    description:
      'A western cowboy lady who can knock down all the obstacles with her two guns. Be careful! She is not as friendly as you think',
    maxim: [`"Wanna kill me? Ask my guns."`, `"We all know that I am the best."`],
    star: 3,
    image: require('public/images/character-1.png'),
    background: require('public/images/character-1-bg.png')
  },
  {
    name: 'Ace Wyatt',
    description:
      'He has all the qualities of a leader. He is a brave and talented warrior who fights for the sake of defeating all enemies and winning.',
    maxim: [
      `"The last one standing is the winner, and that's me."`,
      `"Life is short. I mean...your life, 'cause now it's over for you."`
    ],
    star: 5,
    image: require('public/images/character-2.png'),
    background: require('public/images/character-2-bg.png')
  },
  {
    name: 'Gary Dan Maverick',
    description:
      "He can be ponderous, but he is the strongest. He destroys all enemies like the way he eats: there's nothing left in the end.",
    maxim: [
      `"Can we finish them soon? I'm starving..."`,
      `"The man who goes farthest is generally the one who is willing to do and dare."`
    ],
    star: 4,
    image: require('public/images/character-3.png'),
    background: require('public/images/character-3-bg.png')
  },
  {
    name: 'Emyrs Quinn',
    description:
      'A lovely girl has her eyes well in at shooting. Even though she is adorable, you better not tangle with her.',
    maxim: [`"I can see everything even your death."`, `"Ladies do not start fights, but they can finish them."`],
    star: 4,
    image: require('public/images/character-4.png'),
    background: require('public/images/character-4-bg.png')
  }
];

export default function Heros() {
  return (
    <section id="characters" className={Styles.characters}>
      <Container>
        <Row>
          <Title text="characters" />
        </Row>
        <CharacterSlider data={data} />
      </Container>
    </section>
  );
}
