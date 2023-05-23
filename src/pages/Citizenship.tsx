import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Citizenship = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/cittadinanza</h1>

    <h2>Azienda ShareSpace</h2>

    <p>Nasce in simultanea all'omonimo Social Network che punta alla pubblicazione, da parte degli utenti registrati, di foto e video, potendo scegliere se renderli visualizzabili da tutti o unicamente dagli amici più stretti.</p>

    <h3>Etica Digitale</h3>

    <p>E' un insieme di principi e valori che portano gli utenti della rete ad un corretto uso di quest'ultima</p>

    <h3>Principi di ShareSpace</h3>

    <p>
      <ul>
        <li>Privacy</li>
        <li>Sicurezza</li>
        <li>Inclusione e Diversità</li>
        <li>Trasparenza</li>
        <li>Impatto ambientale</li>
      </ul>
    </p>

    <h3>Privacy e Sicurezza</h3>

    <p>ShareSpace utilizza i dati degli utenti per creare esperienze personalizzate, ma lascia a questi il totale controllo sui loro dati e ne garantisce la sicurezza</p>

    <h3>Inclusione</h3>

    <p>ShareSpace si prende cura della propria utenza, facendo attenzione ai bisogni di ognuno. Un esempio è la mancanza di animazioni troppo lampeggianti per evitare attacchi epilettici a chi ne soffre</p>

    <p>Puoi trovare tutti i dettagli sul <a href='/public/AziendaPrincipi.pdf' target='_blank'>manifesto</a> sull'etica digitale relativo all'azienda</p>

    <p>
      ~
    </p>

    <h2>Sistemi</h2>

    <p>
      <a href='https://www.raiplay.it/video/2021/09/Presa-diretta---La-guerra-dei-soldi---PresaDiretta-06092021-a5a33644-be51-4d8a-9ec4-8a17ad426112.html'>Puntata</a> relativa alle Criptovalute presa dal programma TV "Presadiretta".
      <p>
      Risponde alle domande "Quali sono i rischi per chi decide di investire in criptovalute? E come rispondono le banche alla sfida lanciata dalle nuove criptomonete?"
      </p>
    </p>

    <p>
      <a href='https://www.raiplay.it/video/2022/10/La-guerra-informatica---Presa-Diretta---Puntata-del-24102022-8291cbad-b764-42b6-8c2b-950da072bd9d.html'>Puntata</a> relativa alla Guerra Informatica presa dal programma TV "Presadiretta".
      <p>
        Risponde alle domande "Chi sono i nuovi banditi digitali, chi c'è dietro? Cos'è successo in Germania circa il coinvlgimento del capo dell'Agenzia federale tedesca per la sicurezza informatica, accusato di aver avuto contatti con i servizi segreti russi? E tutto riguardo le InfoWar (guerre combattutue con l'informazione per influenzare l'opinione pubblica)"
      </p>
    </p>

    <p>
      ~
    </p>

    <h2>English</h2>

    <p>Fake news refers to false or misleading information presented as factual news. It can be spread through various mediums, including social media, websites, television, and print media.</p>

    <p>
      Fonte: <a href='https://www.clickvieweducation.com/free-teaching-resources/fake-news/'>www.clickvieweducation.com</a>
    </p>

  </PageWrapper>
);

export default Citizenship;
