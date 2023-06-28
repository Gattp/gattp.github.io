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
      <h2>Italiano 🇮🇹 &#127470;&#127481; &#x1F1EE;&#x1F1F9; &#127470</h2>
      <p>
      Sono Tommy, 
{/* @ts-ignore */}
        <Tooltip arrow title={'19 Ottobre 2004'}>
          {age}
        </Tooltip>{' '}
        anni, studente, sviluppatore e gamer.
      </p>

      <p>
        Appassionato di Web Developing e di UX, ho studiato questo, e tanto altro, nella scuola d'istruzione secondaria in cui mi sono formato, prima di fare il grande salto verso l'università.
      </p>

      <p>
      Nel mio tempo libero mi diverto a provare nuovi videogame, una delle mie passioni. Come tutte le passioni e gli interessi, ci sono degli alti e bassi, ma la costanza è uno dei miei punti di forza, in tutti gli ambiti. Altro mio interesse è lo sport, non per migliorare l'estetica o per seguire le mode, ma migliorare le mie performance fisiche e, mano a mano, puntare a superare prove che prima non sarei riuscito a superare.
      </p>

      <h2>English &#127468</h2>

      <p>I'm Tommy, an eighteen-years-old student, developer and gamer.</p>

      <p>My passions are Web Developing and UX, both studied in the secondary school where I trained, before taking the leap towards university.</p>

      <p>In my spare time I dedicate myself to one of my main passions: I enjoy trying new video games.
      As in all passions and interests, however, there are ups and downs. Despite this, constancy is one of my strengths, in all areas.
      Another interest of mine is sport, not to improve aesthetics or to follow fashions, but to improve my physical performance so that I can aim, little by little, to overcome tests that I would not have been able to overcome before.</p>

    </PageWrapper>
  );
};

export default Home;
