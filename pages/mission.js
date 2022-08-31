import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Mission() {
  let missionRef = useRef();
  const scrollToMyRef = () => {
    const getCoords = missionRef.current.getBoundingClientRect();
    window.scrollTo(0, getCoords.top);
  };

  useEffect(() => {
    scrollToMyRef();
  }, []);

  return (
    <>
      <Layout missionRef={missionRef} />
    </>
  );
}
