import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ButtonLink from '../components/ButtonLink';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='px-4 md:px-8 max-w-md min-h-screen justify-center mx-auto flex flex-col'>
      <Head>
        <title>Wordle ID - Wordle dengan tebakan bahasa Indonesia</title>
        <meta name='description' content='Wordle dengan tebakan bahasa Indonesia' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='title text-center space-y-4'>
        <h1 className='text-4xl md:text-6xl uppercase tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-700'>
          Wordle ID
        </h1>
        <p>Wordle, dengan tebakan bahasa Indonesia</p>
      </div>

      <div className=' my-8 space-y-4'>
        <div className='flex flex-col'>
          <ButtonLink href='/daily'>DAILY</ButtonLink>
          <p className='text-xs mt-1 font-medium text-center'>
            Tebakan baru{' '}
            <strong className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-700'>
              setiap hari
            </strong>
          </p>
        </div>
        {/* <ButtonLink href='/daily'>STORY</ButtonLink> */}
        <div className='flex flex-col'>
          <ButtonLink href='/endless'>ENDLESS</ButtonLink>
          <p className='text-xs mt-1 font-medium text-center'>
            Main terus{' '}
            <strong className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-500'>
              sesukamu
            </strong>
            !
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
