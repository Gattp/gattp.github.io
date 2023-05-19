import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const Etc = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>/etc</title>
    </Helmet>
    <h1>/contatti</h1>
    <h3>Email</h3>
    <p><a href='mailto: tommaso.martarelli@gmail.com'>tommaso.martarelli@gmail.com</a></p>
    <h3>Telefono</h3>
    <p><a href='tel:+393312329604'>+39 331 232 9604</a></p>
  </PageWrapper>
);

export default Etc;
