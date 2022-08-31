import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Places() {
  const placesRef = useRef();

  const scrollToMyRef = () => {
    const getCoords = placesRef.current.getBoundingClientRect();
    window.scrollTo(0, getCoords.top);
  };

  useEffect(() => {
    scrollToMyRef();
  }, []);

  return (
    <>
      <Layout placesRef={placesRef} />
    </>
  );
}
