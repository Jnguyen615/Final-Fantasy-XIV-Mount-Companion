import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/collectedmounts">
        <button className='my-mounts-btn'>My Mounts</button>
      </Link>
      <Link to="/collectedminions">
        <button className='my-minions-btn'>My Minions</button>
      </Link>
    </div>
  );
};

export default NavBar;
