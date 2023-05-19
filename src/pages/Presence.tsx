import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';

const Presence = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Attività</title>
    </Helmet>
    <h1>👀 Attività</h1>
    <p>
      Tramite l'uso delle RESTful API e WebSocket, le mie attività fornite dalla visualizzazione delle attività su discord verranno visualizzate in diretta.
    </p>
  </PageWrapper>
);

export default Presence;
