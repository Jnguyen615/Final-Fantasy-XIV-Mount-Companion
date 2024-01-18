import './CollectedMountsDisplay.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'
import PropTypes from 'prop-types';
import MountCard from '../MountCard/MountCard';
import Firebird from '../Firebird/Firebird'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import ScrollFollowButton from '../ScrollFollowButton/ScrollFollowButton';

const CollectedMountsDisplay = ({
  collectedMounts,
  toggleCollectedMounts,
  openIndividualMountPage,
}) => {

  const displayCollectedMounts = collectedMounts.map(mount => (
    <MountCard
      key={`${mount.id}-${mount.name}`}
      id={mount.id}
      name={mount.name}
      image={mount.image}
      description={mount.description}
      collectedMounts={collectedMounts}
      toggleCollectedMounts={toggleCollectedMounts}
      openIndividualMountPage={openIndividualMountPage}
    />
  ));

  return (
    <main className="collected-mounts-page">
      <Header />
      <FFXIVLogo />
      <ScrollFollowButton />
      <h1 className="collected-mounts-title">My Mounts</h1>
      <Link to="/main">
        <button className="back-to-all-btn">Back To All Mounts</button>
      </Link>
      {!displayCollectedMounts.length && (
        <div>
          <Firebird />
          <p className="no-favorites">
            You don't have any mounts yet, add some!
          </p>
        </div>
      )}
      <div className="collected-mounts-container">{displayCollectedMounts}</div>
    </main>
  );
};

CollectedMountsDisplay.propTypes = {
  collectedMounts: PropTypes.array.isRequired,
  toggleCollectedMounts: PropTypes.func.isRequired,
  openIndividualMountPage: PropTypes.func.isRequired
};

export default CollectedMountsDisplay;
