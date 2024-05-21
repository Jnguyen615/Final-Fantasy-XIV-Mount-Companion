// // import CollectedIcon from '../CollectedIcon/CollectedIcon';

// // const MinionCard = ({
// //   id,
// //   name,
// //   image,
// //   description,
// //   collectedMinions,
// //   toggleCollectedMinions,
// //   openIndividualMinionPage,
// // }) => {
// //   console.log('collectedMinions', collectedMinions)
// //   const isCollected = collectedMinions.some(mount => mount.id === id);

// //   const handleImageClick = () => {
// //     openIndividualMinionPage(id);
// //   };

// //   const handleToggleCollected = () => {
// //     toggleCollectedMinions({ id, name, image, description });
// //   };

// //   return (
// //     <div className="minion-card">
// //       <h3 className="minion-name">{name}</h3>
// //       <img
// //         id={id}
// //         src={image}
// //         alt={name}
// //         className="minion-card-image"
// //         onClick={handleImageClick}
// //       />
// //       <p className="minion-description">{description}</p>
// //       <CollectedIcon
// //         className="collected-minions-icon"
// //         toggleCollectedMinions={handleToggleCollected}
// //         isCollected={isCollected}
// //       />
// //     </div>
// //   );
// // };

// // export default MinionCard
// import CollectedMinionIcon from '../CollectedMinionIcon/CollectedMinionIcon';

// const MinionCard = ({
//   id,
//   name,
//   image,
//   description,
//   collectedMinions,
//   toggleCollectedMinions, 
//   openIndividualMinionPage,
// }) => {
//   console.log('collectedMinions', collectedMinions)
//   const isCollected = collectedMinions.some(minion => minion.id === id);

//   const handleImageClick = () => {
//     openIndividualMinionPage(id);
//   };

//   const handleToggleCollected = () => {
//     toggleCollectedMinions({ id, name, image, description });
//   };

//   return (
//     <div className="minion-card">
//       <h3 className="minion-name">{name}</h3>
//       <img
//         id={id}
//         src={image}
//         alt={name}
//         className="minion-card-image"
//         onClick={handleImageClick}
//       />
//       <p className="minion-description">{description}</p>
//       <CollectedMinionIcon
//         className="collected-minions-icon"
//         toggleCollectedMinions={handleToggleCollected} 
//         isCollected={isCollected}
//       />
//     </div>
//   );
// };

// export default MinionCard;
import React from 'react';
import PropTypes from 'prop-types';
import CollectedMinionIcon from '../CollectedMinionIcon/CollectedMinionIcon';

const MinionCard = ({
  id,
  name,
  image,
  description,
  collectedMinions,
  toggleCollectedMinions, 
  openIndividualMinionPage,
}) => {
  const isCollected = collectedMinions.some(minion => minion.id === id);

  const handleImageClick = () => {
    openIndividualMinionPage(id);
  };

  const handleToggleCollected = () => {
    toggleCollectedMinions({ id, name, image, description });
  };

  return (
    <div className="minion-card">
      <h3 className="minion-name">{name}</h3>
      <img
        id={id}
        src={image}
        alt={name}
        className="minion-card-image"
        onClick={handleImageClick}
      />
      <p className="minion-description">{description}</p>
      <CollectedMinionIcon
        className="collected-minions-icon"
        toggleCollectedMinions={handleToggleCollected} 
        isCollected={isCollected}
      />
    </div>
  );
};

MinionCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  collectedMinions: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCollectedMinions: PropTypes.func.isRequired,
  openIndividualMinionPage: PropTypes.func.isRequired,
};

export default MinionCard;
