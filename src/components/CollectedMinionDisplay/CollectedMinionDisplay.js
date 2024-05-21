import './CollectedMinionDisplay.scss';
import PropTypes from 'prop-types';
import MinionCard from '../MinionCard/MinionCard';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import ScrollFollowButton from '../ScrollFollowButton/ScrollFollowButton';

const CollectedMinionDisplay = ({
  collectedMinions,
  toggleCollectedMinions,
  openIndividualMinionPage,
}) => {

  const displayCollectedMinions = collectedMinions.map(minion => (
    <MinionCard
      key={`${minion.id}-${minion.name}`}
      id={minion.id}
      name={minion.name}
      image={minion.image}
      description={minion.description}
      collectedMinions={collectedMinions}
      toggleCollectedMinions={toggleCollectedMinions}
      openIndividualMinionPage={openIndividualMinionPage}
    />
  ));

  return (
    <main className="collected-minions-page">
      <Header />
      <FFXIVLogo />
      <ScrollFollowButton />
      <h1 className="collected-minions-title">My Minions</h1>
      <Link to="/minions">
        <button className="back-to-all-btn">Back To All Minions</button>
      </Link>
      {!displayCollectedMinions.length && (
        <div>
         
          <p className="no-favorites">
            You don't have any minions yet, add some!
          </p>
        </div>
      )}
      <div className="collected-minions-container">{displayCollectedMinions}</div>
    </main>
  );
};

CollectedMinionDisplay.propTypes = {
  collectedMinions: PropTypes.array.isRequired,
  toggleCollectedMinions: PropTypes.func.isRequired,
  openIndividualMinionPage: PropTypes.func.isRequired
};

export default CollectedMinionDisplay;
