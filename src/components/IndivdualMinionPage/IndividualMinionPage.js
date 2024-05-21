import NavBar from '../NavBar/NavBar';
import './IndividualMountPage.scss';
import CollectedMountsIcon from '../CollectedIcon/CollectedIcon';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo'
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IndividualMinionPage = ({
  moinionss,
  collectedMinions,
  toggleCollectedMinions,
}) => {
  const { id } = useParams();
  const minionId = parseInt(id);
  const minion = minions.find(mount => minion.id === minionId);
  const collectedMinion = collectedMinions.some(mount => mount.id === mountId);
 

  const handleToggleFavoriteMinion = () => {
    if(minion){
    toggleCollectedMinions(minion);
    }
  };

  return (
    <div className="minion-page">
      <Header />
      <FFXIVLogo />
      <NavBar />
      <div className="wrapper">
        <CollectedMountsIcon
        className='fav-icon-indiv-mount-page'
          isCollected={isCollected}
          toggleCollectedMounts={handleToggleFavoriteMinion}
        />

        <Link to="/main">
          <button className="close-btn">x</button>
        </Link>
      </div>
      {mount && (
        <div className="mount-container">
          <h3 className="mount-name">{mount.name}</h3>
          <img src={mount.image} alt={mount.name} className="modal-image" />
          <p className="enhanced-description">{mount.enhanced_description}</p>
          <div className="mount-info">
            <p className="movement-type">Movement-Type: {mount.movement}</p>
            <p className="order">Order: {mount.order}</p>
            <p className="patch">Patch: {mount.patch}</p>
          </div>
        </div>
      )}
    </div>
  );
};

IndividualMountCard.propTypes = {
  mounts: PropTypes.array.isRequired,
  collectedMounts: PropTypes.array.isRequired,
  toggleCollectedMounts: PropTypes.func.isRequired,
};

export default IndividualMountCard;
