import { useMemo } from 'react';
import { Tooltip } from 'react-tippy';
import PageWrapper from './PageWrapper';

const BIRTH = new Date('2004-10-19T10:15:00Z');
const YEAR_MILLIS = 31556952000;

const Home = () => {
  const age = useMemo(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_MILLIS), []);

  return (
    <PageWrapper forceReadableWidth>
      <h1>/me</h1>
      <p>
        Tommy, {/* @ts-ignore */}
        <Tooltip arrow title={'19 Ottobre 2004'}>
          {age}
        </Tooltip>{' '}
        anni. Studente, sviluppatore e gamer.
      </p>
      <p>
        Appassionato del Web Developing e di UX, studio questo e tanto altro nella scuola che mi ha formato e mi sta formando tutt'ora, prima di fare il grande salto verso l'università.
      </p>

      <p>
        Nel mio tempo libero mi diverto a provare nuovi videogame, una delle mie passioni. Come tutte le passioni e gli interessi, ci sono degli alti e bassi, ma la costanza è uno dei miei punti di forza, in tutti gli ambiti. 
        Altro mio interesse è lo sport, non per l'estetica, ma per rendere capace il mio corpo di fare cose e su superare prove che prima non sarebbe riuscito a superare. 
      </p>

      <h3>Info</h3>

      <p> . . . </p>

    </PageWrapper>
  );
};

export default Home;
