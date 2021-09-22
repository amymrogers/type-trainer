import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div class="flex flex-col justify-between min-h-screen bg-gray-100 lining-nums">
      <Pokedex />
      <SiteFooter />
    </div>
  );
}

export default App;