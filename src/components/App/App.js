import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainMountDisplay from '../MainMountDisplay/MainMountDisplay';
import ErrorPage from '../ErrorPage/ErrorPage';
import CollectedMountDisplay from '../CollectedMountsDisplay/CollectedMountsDisplay';
import LogoPage from '../LogoPage/LogoPage';
import IndividualMountPage from '../IndividualMountPage/IndividualMountPage';
import { retrieveMounts, retrieveMinions } from '../../ApiCall';
import MainPage from '../MainPage/MainPage';
import MainMinionDisplay from '../MainMinionDisplay/MainMinionDisplay';
import CollectedMinionDisplay from '../CollectedMinionDisplay/CollectedMinionDisplay';

function App() {
  const [mounts, setMounts] = useState([]);
  const [collectedMounts, setCollectedMounts] = useState([]);
  const [selectedMountId, setSelectedMountId] = useState(null);
  const [filteredMounts, setFilteredMounts] = useState([]);
  const navigate = useNavigate();
  const [minions, setMinions ] = useState([]);
  const [filteredMinions, setFilteredMinions] = useState([]);
  const [collectedMinions, setCollectedMinions] = useState([])
  const [selectedMinionId, setSelectedMinionId] = useState(null);


  useEffect(() => {
    retrieveMounts()
      .then(data => {
        setMounts(data);
        setFilteredMounts(data);
      })
      .catch(error => {
        console.error('Error fetching mounts data:', error);
      });
  }, []);

  useEffect(() => {
    retrieveMinions()
      .then(data => {
        setMinions(data);
        setFilteredMinions(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching mounts data:', error);
      });
  }, []);

  useEffect(() => {
    const storedCollectedMounts = localStorage.getItem('collectedMounts');
    if (storedCollectedMounts) {
      setCollectedMounts(JSON.parse(storedCollectedMounts));
    }
  }, []);
  
  const openIndividualMountPage = mountId => {
    setSelectedMountId(mountId);
    navigate(`/mount/${mountId}`);
  };
  

  const openIndividualMinionPage = minionId => {
    setSelectedMinionId(minionId);
    navigate(`/minion/${minionId}`);
  };

  const toggleCollectedMounts = (mount) => {
    const isNowCollected = collectedMounts.some((favMount) => favMount.id === mount.id);
  
    if (isNowCollected) {
      const updatedCollected = collectedMounts.filter((favMount) => favMount.id !== mount.id);
      setCollectedMounts(updatedCollected);
      localStorage.setItem('collectedMounts', JSON.stringify(updatedCollected));
    } else {
      setCollectedMounts((prevCollected) => [...prevCollected, mount]);
      localStorage.setItem('collectedMounts', JSON.stringify([...collectedMounts, mount]));
    }
  };

  const toggleCollectedMinions = (minion) => {
    const isNowCollected = collectedMinions.some((favMinion) => favMinion.id === minion.id);
  
    if (isNowCollected) {
      const updatedCollected = collectedMinions.filter((favMinion) => favMinion.id !== minion.id);
      setCollectedMinions(updatedCollected);
      localStorage.setItem('collectedMinions', JSON.stringify(updatedCollected));
    } else {
      setCollectedMinions((prevCollected) => [...prevCollected, minion]);
      localStorage.setItem('collectedMinions', JSON.stringify([...collectedMinions, minion]));
    }
  };
      
  return (
    <main className="app">
      <Routes>
        <Route exact path="/" element={<LogoPage />} />
        <Route exact path="/main" element={<MainPage />}/>
        <Route
          exact
          path="/mounts"
          element={
            <MainMountDisplay
              mounts={mounts}
              collectedMounts={collectedMounts}
              toggleCollectedMounts={toggleCollectedMounts}
              setFilteredMounts={setFilteredMounts}
              openIndividualMountPage={openIndividualMountPage}
            />
          }
        />
        <Route
          exact
          path="/mount/:id"
          element={
            <IndividualMountPage
              mounts={mounts}
              toggleCollectedMounts={toggleCollectedMounts}
              collectedMounts={collectedMounts}
            />
          }
        />
        <Route
          exact
          path="/collectedmounts"
          element={
            <CollectedMountDisplay
              collectedMounts={collectedMounts}
              toggleCollectedMounts={toggleCollectedMounts}
              openIndividualMountPage={openIndividualMountPage}
            />
          }
        />
        <Route
          exact
          path="/minions"
          element={
            <MainMinionDisplay
              minions={minions}
              filteredMinions={filteredMinions}
              setFilteredMinions={setFilteredMinions}
              collectedMinions={collectedMinions}
              toggleCollectedMinions={toggleCollectedMinions}
              openIndividualMinionPage={openIndividualMinionPage}
            />
          }
        />
         <Route
          exact
          path="/collectedminions"
          element={
            <CollectedMinionDisplay
              collectedMinions={collectedMinions}
              toggleCollectedMinions={toggleCollectedMinions}
              openIndividualMinionPage={openIndividualMinionPage}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
}

export default App;
