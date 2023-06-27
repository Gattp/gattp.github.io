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
import Europass from '../assets/images/europass.jpg';
import Sito from '../assets/images/sito.jpg';
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
          url="https://pdfhost.io/v/lplKfyh5L_LavoroEdCivica_IngleseBarcanMoscaMandoliniMartarellipptx"
          name="Brexit, Fake-news and Facebook"
          iconReference={Brexit}
          tagline="Inglese"
          role={'Lavoro di gruppo'}
          what={
            "PowerPoint di gruppo per trovare i punti in comune nelle news tra gli argomenti 'Brexit', 'Fake-news' e 'Facebook'"
          }
          pretext='ho fatto'
          when='Dicembre 2022'
        />
        <Co
          url="https://pdfhost.io/v/7vIQoURE0_Curriculum_Vitae"
          name="Curriculum Vitae"
          iconReference={Europass}
          tagline="Inglese"
          role={'Lavoro individuale'}
          what={
            "Curriculm Vitae scritto in lingua inglese"
          }
          pretext='ho fatto'
          when='Dicembre 2022'
        />
        <Co
          url="https://pdfhost.io/v/qy5r0qPDJ_Martarelli_GPOI_RelazioneFinale"
          name="Relazione Sito Personale"
          iconReference={Sito}
          tagline="GPOI"
          role={'Lavoro individuale'}
          what={
            "Relazione relativa a questo sito web, dove si prevede la realizzazione comprendendo tempi, costi e obiettivi"
          }
          pretext='ho fatto'
          when='Gennaio 2023'
        />
        <Co
          url="https://pdfhost.io/v/9lmLrFuwE_Virginia_Woolf"
          name="Virginia Woolf"
          iconReference={AltesiaLogo}
          tagline="Italiano"
          role={'Lavoro di gruppo'}
          what={
            "PowerPoint sulla vita e le opere di V.Woolf"
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://pdfhost.io/v/N1lDuxwLb_Progetto_TWEB"
          name="Progetto TWEB"
          iconReference={AltesiaLogo}
          tagline="GPOI"
          role={'Lavoro di gruppo'}
          what={
            "Relazione nella quale viene analizzata una realtà dove si offre la gestione delle prestazioni ambulatoriali in una struttura sanitaria"
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://pdfhost.io/v/0joz8mYvdT_Documento_Finale_Gestione_Proposte"
          name="Relazione Gruppo Gestione Proposte"
          iconReference={AltesiaLogo}
          tagline="GPOI"
          role={'Lavoro di gruppo'}
          what={
            "Relazione comprendente unicamente il gruppo atto alla realizzazione della sezione relativa alla gestione delle proposte di lavoro"
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://pdfhost.io/v/EBMgMy.Hv_Invasione_di_Romapptx"
          name="Invasione di Roma"
          iconReference={AltesiaLogo}
          tagline="Storia"
          role={'Lavoro di gruppo'}
          what={
            "Gli effetti su Roma dopo l'invasione fascista"
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://pdfhost.io/v/fTLPvK.Qa_Book_Review_by_Martarelli_Tommasodocx"
          name="Book Review"
          iconReference={AltesiaLogo}
          tagline="Inglese"
          role={'Lavoro individuale'}
          what={
            "Dettagliata analisi del libro 'IT' in linuga inglese"
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://pdfhost.io/v/SolAFzBSA_Giapponepptx"
          name="Giappone"
          iconReference={AltesiaLogo}
          tagline="Storia"
          role={'Lavoro di gruppo'}
          what={
            "PowerPoint sul Giappione nel passaggio dal 1800 al 1900"
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://pdfhost.io/v/fp27l4arM_Martarellis_Abstract"
          name="Abstract"
          iconReference={AltesiaLogo}
          tagline="Inglese"
          role={'Lavoro individuale'}
          what={
            "Testo riguardante la creazione di una pagina web"
          }
          pretext='ho fatto'
          when='2022'
        />
        <Co
          url="https://pdfhost.io/v/S30IN5CBD_Martarelli_ProgettoVersoIlLavoro"
          name="Progetto 'Verso il lavoro'"
          iconReference={AltesiaLogo}
          tagline="Sistemi"
          role={'Lavoro individuale'}
          what={
            "Relazione riguardante il progetto dell'anno dove si analizza la scelta di hostare il sito all'intreno della rete scolastica mediante un server proprietario, o appoggiandosi ad un servizio offerto da terzi"
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