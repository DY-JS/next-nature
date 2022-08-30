import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Places() {
  const placesRef = useRef(null);
  const scrollToMyRef = () => {
    window.scrollTo(
      0,
      placesRef.current.scrollHeight + (window.screen.width > 756 ? 1200 : 1650)
    );
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
