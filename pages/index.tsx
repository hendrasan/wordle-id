import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ButtonLink from '../components/ButtonLink';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='px-8 max-w-md min-h-screen justify-center mx-auto flex flex-col'>
      <Head>
        <title>Wordle ID</title>
        <meta name='description' content='Wordle ID' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='title text-center'>
        <h1 className='text-4xl md:text-6xl font-bold uppercase tracking-tight'>
          Wordle ID
        </h1>
      </div>
      <div className='flex flex-col my-8 space-y-4'>
        <ButtonLink href='/daily'>DAILY</ButtonLink>
        {/* <ButtonLink href='/daily'>STORY</ButtonLink> */}
        <ButtonLink href='/endless'>ENDLESS</ButtonLink>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
