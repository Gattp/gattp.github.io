import PageWrapper from './PageWrapper';
import Co from '../components/Co';
import styled from 'styled-components';
import HopIcon from '../assets/images/hop-social-icon.png';
import HivenAppIcon from '../assets/images/hiven-app-icon.png';
import GigglAppIcon from '../assets/images/giggl-app-icon.jpg';
import HonkAppIcon from '../assets/images/honk-app-icon.jpg';
import Repo from '../components/Repo';
import AltesiaLogo from '../assets/images/PCTO/altesiaLogo807.png';
import Brexit from '../assets/images/brexit.jpg';
import { Helmet } from 'react-helmet';

const Where = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>/progetti</title>
      </Helmet>
      <h1>/progetti</h1>
      <h3>Aziende</h3>
      <CoWrapper>
        <Co
          url="https://www.altesia.it/"
          name="PCTO"
          iconReference={AltesiaLogo}
          tagline="Logistica e Produzione"
          role={'Stagista'}
          what={
            "Ho lavorato ad un progetto didattico per la gestione centralizzata di vari magazzini di un'azienda. Mi sono avvalso principalmente delle conoscenze relative al C# ed SQL apprese in ambito scolastico. L'obiettivo (poi raggiunto) era lo sviluppo un programma per fornire RESTful API e permettere quindi la visualizzazione e modifica di tutti gli oggetti da qualsiasi client nel mondo. Assieme ad esso, la creazione del database alla base di tutto, comprendendo all'interno le varie sedi, magazzini, oggetti, compratori e venditori."
          }
          pretext='ho fatto'
          when='Giugno/Settembre 2022'
        />
        <Co
          url="https://tommasomartarelli.onrender.com/public/LavoroEdCivica_Inglese(BarcanMoscaMandoliniMartarelli).pptx.pdf"
          name="Brexit, fake-news and Facebook"
          iconReference={Brexit}
          tagline="Inglese"
          role={'Partecipante'}
          what={
            "Ho lavorato ad un progetto didattico per la gestione centralizzata di vari magazzini di un'azienda. Mi sono avvalso principalmente delle conoscenze relative al C# ed SQL apprese in ambito scolastico. L'obiettivo (poi raggiunto) era lo sviluppo un programma per fornire RESTful API e permettere quindi la visualizzazione e modifica di tutti gli oggetti da qualsiasi client nel mondo. Assieme ad esso, la creazione del database alla base di tutto, comprendendo all'interno le varie sedi, magazzini, oggetti, compratori e venditori."
          }
          pretext='ho fatto'
          when='Dicembre 2022'
        />
        <Co
          url="https://www.altesia.it/"
          name="PCTO"
          iconReference={AltesiaLogo}
          tagline="Logistica e Produzione"
          role={'Stagista'}
          what={
            "Ho lavorato ad un progetto didattico per la gestione centralizzata di vari magazzini di un'azienda. Mi sono avvalso principalmente delle conoscenze relative al C# ed SQL apprese in ambito scolastico. L'obiettivo (poi raggiunto) era lo sviluppo un programma per fornire RESTful API e permettere quindi la visualizzazione e modifica di tutti gli oggetti da qualsiasi client nel mondo. Assieme ad esso, la creazione del database alla base di tutto, comprendendo all'interno le varie sedi, magazzini, oggetti, compratori e venditori."
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://www.altesia.it/"
          name="PCTO"
          iconReference={AltesiaLogo}
          tagline="Logistica e Produzione"
          role={'Stagista'}
          what={
            "Ho lavorato ad un progetto didattico per la gestione centralizzata di vari magazzini di un'azienda. Mi sono avvalso principalmente delle conoscenze relative al C# ed SQL apprese in ambito scolastico. L'obiettivo (poi raggiunto) era lo sviluppo un programma per fornire RESTful API e permettere quindi la visualizzazione e modifica di tutti gli oggetti da qualsiasi client nel mondo. Assieme ad esso, la creazione del database alla base di tutto, comprendendo all'interno le varie sedi, magazzini, oggetti, compratori e venditori."
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://www.altesia.it/"
          name="PCTO"
          iconReference={AltesiaLogo}
          tagline="Logistica e Produzione"
          role={'Stagista'}
          what={
            "Ho lavorato ad un progetto didattico per la gestione centralizzata di vari magazzini di un'azienda. Mi sono avvalso principalmente delle conoscenze relative al C# ed SQL apprese in ambito scolastico. L'obiettivo (poi raggiunto) era lo sviluppo un programma per fornire RESTful API e permettere quindi la visualizzazione e modifica di tutti gli oggetti da qualsiasi client nel mondo. Assieme ad esso, la creazione del database alla base di tutto, comprendendo all'interno le varie sedi, magazzini, oggetti, compratori e venditori."
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://www.altesia.it/"
          name="PCTO"
          iconReference={AltesiaLogo}
          tagline="Logistica e Produzione"
          role={'Stagista'}
          what={
            "Ho lavorato ad un progetto didattico per la gestione centralizzata di vari magazzini di un'azienda. Mi sono avvalso principalmente delle conoscenze relative al C# ed SQL apprese in ambito scolastico. L'obiettivo (poi raggiunto) era lo sviluppo un programma per fornire RESTful API e permettere quindi la visualizzazione e modifica di tutti gli oggetti da qualsiasi client nel mondo. Assieme ad esso, la creazione del database alla base di tutto, comprendendo all'interno le varie sedi, magazzini, oggetti, compratori e venditori."
          }
          pretext='ho fatto'
          when='2022'
        />
      </CoWrapper>

    </PageWrapper>
  );
};

const CoWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 2rem 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 1800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default Where;