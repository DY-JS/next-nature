import Head from 'next/head';
import Header from './Header';
import Traveles from './Traveles';
import Team from './Team';
import Info from './Info';
import LoginForm from './LoginForm';
import Actions from './Actions';
import Slider from './Slider';
import Footer from './Footer';

function Layout({ teamRef, missionRef, placesRef }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Traveles placesRef={placesRef} />
      <Team teamRef={teamRef} />
      <Info />
      <LoginForm />
      <Actions missionRef={missionRef} />
      <Slider />
      <Footer />
    </>
  );
}

Layout.getInitialProps = async (ctx) => {
  return {};
};

export default Layout;
