import React from 'react';
import Antonio from '../assets/images/antonio.jpeg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-left text-4xl font-bold'>
            <p>Olá, sou o Antonio Neto</p>
          </div>
          <div>
            <p className='text-justify'>
              Graduando em Análise e Desenvolvimento de Sistemas, um desenvolvedor com visão de futuro que oferece vasta experiência na criação, integração, teste e suporte web.
            </p>
          </div>
          <div>
            <img className='mx-auto align-center max-h-96 max-w-96 rounded-full' src={Antonio} alt="Foto de Antonio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;