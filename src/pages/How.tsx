import PageWrapper from './PageWrapper';
import Technology from '../components/Technology';
import {
  CSharpLogo,
  ElixirLogo,
  JavaScriptLogo,
  PhpLogo,
  RabbitMQLogo,
  ReactLogo,
  RustLogo,
  SolidityLogo,
  TypescriptLogo,
} from '../components/Icons';
import { Helmet } from 'react-helmet';

const How = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>/conoscenze</title>
      </Helmet>
      <h1>/conoscenze</h1>

      <Technology
        color="#877b9e"
        icon={<CSharpLogo />}
        name="C#"
        type="Backend"
        useCase={'Linguaggio di programmazione multi-paradigma che supporta tutti i concetti della programmazione orientata agli oggetti'}
      />

      <Technology
        color="#f0db4f"
        icon={<JavaScriptLogo />}
        name="JavaScript"
        type="Scripting"
        useCase={'Linguaggio di programmazione multi paradigma orientato agli eventi'}
      />

      <Technology
        color="#007acc"
        icon={<TypescriptLogo />}
        name="TypeScript"
        type="JS Framework"
        useCase={'Estensione che aggiunge tipi, classi, interfacce e moduli opzionali al JavaScript tradizionale'}
      />

        <Technology
        color="#8993BE"
        icon={<PhpLogo />}
        name="Php"
        type="Server side"
        useCase={'Linguaggio di programmazione multi paradigma orientato agli eventi'}
      />

      <Technology
        color="#232340"
        icon={<ReactLogo />}
        name="React"
        type="Frontend framework"
        useCase={'Libreria JS per la costruzione di interfacce durevoli per web app grandi e interattive'}
      />
    </PageWrapper>
  );
};

export default How;
