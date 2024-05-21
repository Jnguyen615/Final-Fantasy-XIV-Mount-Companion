// import MinionCard from '../MinionCard/MinionCard';
// import Header from '../Header/Header';
// import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
// import NavBar from '../NavBar/NavBar';
// import ScrollFollowButton from '../ScrollFollowButton/ScrollFollowButton';
// import Search from '../Search/Search';
// import { useState } from 'react';

// const MainMinionDisplay = ({
//   minions,
//   collectedMinions,
//   setFilteredMinions,
//   openIndividualMinionPage,
//   toggleCollectedMinions,
// }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = term => {
//     setSearchTerm(term);
//     setFilteredMinions(term);
//   };

//   const filteredMinions = minions.filter(minion =>
//     minion.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   const minionCards = filteredMinions.map(minion => (
//     <div key={`${minion.id}-${minion.name}`}>
//       <MinionCard
//         id={minion.id}
//         minion={minion}
//         name={minion.name}
//         image={minion.image}
//         description={minion.description}
//         collectedMinions={collectedMinions}
//         toggleCollectedMinions={id => toggleCollectedMinions(id)}
//         openIndividualMinionPage={openIndividualMinionPage}
//       />
//     </div>
//   ));
//   return (
//     <main className='main-display'>
//       <Header />
//       <FFXIVLogo />
//       <NavBar />
//       <ScrollFollowButton />
//       <Search
//         onSearch={handleSearch}
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//       />
//       {filteredMinions.length > 0 ? (
//         <div className='minions-container'>{minionCards}</div>
//       ) : (
//         <div className='no-minions-container'>
//           <h1 className='no-minions-message'>
//             No minions found! Search again!
//           </h1>
//           {/* <img className='moogle' src={Moogle} alt='moogle image'/> */}
//         </div>
//       )}
//     </main>
//   );
// };

// export default MainMinionDisplay;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MinionCard from '../MinionCard/MinionCard';
import Header from '../Header/Header';
import FFXIVLogo from '../FFXIVLogo/FFXIVLogo';
import NavBar from '../NavBar/NavBar';
import ScrollFollowButton from '../ScrollFollowButton/ScrollFollowButton';
import Search from '../Search/Search';

const MainMinionDisplay = ({
  minions,
  collectedMinions,
  setFilteredMinions,
  openIndividualMinionPage,
  toggleCollectedMinions,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = term => {
    setSearchTerm(term);
    setFilteredMinions(term);
  };

  const filteredMinions = minions.filter(minion =>
    minion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const minionCards = filteredMinions.map(minion => (
    <div key={`${minion.id}-${minion.name}`}>
      <MinionCard
        id={minion.id}
        name={minion.name}
        image={minion.image}
        description={minion.description}
        collectedMinions={collectedMinions}
        toggleCollectedMinions={toggleCollectedMinions}
        openIndividualMinionPage={openIndividualMinionPage}
      />
    </div>
  ));

  return (
    <main className='main-display'>
      <Header />
      <FFXIVLogo />
      <NavBar />
      <ScrollFollowButton />
      <Search
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {filteredMinions.length > 0 ? (
        <div className='minions-container'>{minionCards}</div>
      ) : (
        <div className='no-minions-container'>
          <h1 className='no-minions-message'>
            No minions found! Search again!
          </h1>
          {/* <img className='moogle' src={Moogle} alt='moogle image'/> */}
        </div>
      )}
    </main>
  );
};

MainMinionDisplay.propTypes = {
  minions: PropTypes.arrayOf(PropTypes.object).isRequired,
  collectedMinions: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilteredMinions: PropTypes.func.isRequired,
  openIndividualMinionPage: PropTypes.func.isRequired, 
  toggleCollectedMinions: PropTypes.func.isRequired,
};

export default MainMinionDisplay;
