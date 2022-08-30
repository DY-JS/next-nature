import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';

export default function Team() {
  const teamRef = useRef(null);
  const scrollToMyRef = () => {
    window.scrollTo(0, teamRef.current.scrollHeight + 1700);
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
