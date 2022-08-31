import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Team() {
  const teamRef = useRef(null);
  const scrollToMyRef = () => {
    const getCoords = teamRef.current.getBoundingClientRect();
    window.scrollTo(0, getCoords.top);
  };

  useEffect(() => {
    scrollToMyRef();
  }, []);

  return (
    <>
      <Layout teamRef={teamRef} />
    </>
  );
}
