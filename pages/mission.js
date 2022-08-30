import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Mission() {
  let missionRef = useRef(null);

  const scrollToMyRef = () => {
    window.scrollTo(
      0,
      missionRef.current.scrollHeight +
        (window.screen.width > 756 ? 3650 : 4850)
    );
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
