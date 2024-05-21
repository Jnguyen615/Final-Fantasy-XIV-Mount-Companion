import './MainPage.scss';
import { Link } from 'react-router-dom';
import Minion from '../../Images /minion.avif';
import CoolMount from '../../Images /coolmount.avif';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';

const MainPage = () => {
  return (
    <main>
      <Header />
      <FFXIVLogo />
      <div className='buttons-container'>
        <br></br>
        <img className='mount-img' src={CoolMount} />
        <br></br>
        <Link to='/mounts'>
          <button className='mounts-button'>Mounts</button>
        </Link>
        <br></br>
        <img className='minion-img' src={Minion} />
        <br></br>
        <Link to='/minions'>
        <button className='minions-button'>Minions</button>
        </Link>
      </div>
    </main>
  );
};
export default MainPage;
