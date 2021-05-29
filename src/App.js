import {
  Header,
  NewProductBanner,
  AdBanner,
  HelpineBanner,
  Terms,
  Footer,
} from './container/index';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <NewProductBanner />
      <AdBanner />
      <Terms />
      <HelpineBanner />
      <Footer />
    </div>
  );
}

export default App;
