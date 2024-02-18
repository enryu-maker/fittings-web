import { Button } from '@material-tailwind/react';
import React from 'react';
import { TERipple } from 'tw-elements-react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
export default function Cards() {
    const images = [
        'https://i.pinimg.com/564x/8f/ec/d1/8fecd191e720d539f4654754f7ebfa9f.jpg',
        'https://i.pinimg.com/564x/fb/4f/c9/fb4fc9035dac89d721a4df102d0f9638.jpg',
        'https://i.pinimg.com/564x/f9/7b/2c/f97b2cc6031afd6756652702c6fd8a4f.jpg',
        'https://i.pinimg.com/236x/15/2d/91/152d910c18c3373ba369aa5266f6f62b.jpg',
        'https://i.pinimg.com/736x/1f/14/47/1f14476e2d8c36f0c7d1e388e68fbde3.jpg',
      ];
  return (
    <div>
        <h3 className="text-left m-10 font-sans text-5xl	">
            Shop By Category
        </h3>
     <div className='flex flex-row'>
     {images.map((image, index) => (

      <img
        src={image}
        className="h-60 rounded-lg w-60 m-6 "
        alt="FURNITURE"
       title='FURNITURE'
      />
     
      ))}   
        <h2> cabinet</h2>
      </div>
      <Typography
          variant="h1"
          color="black"
          className="mb-6  m-10 font-medium leading-[1.5]"
  > Our Spotlight </Typography>
     <div className='flex flex-row'>
     
      <Card
      shadow={false}
      className="relative grid h-[40rem] w-70  m-10 max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/e3/1b/bc/e31bbcd2a4b103eea8c64fe05ea14f9c.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Our fully furshined  dressing table with lights
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          Bedroom
        </Typography>
      </CardBody>
    </Card>
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-70  m-10 max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/12/cf/8c/12cf8c592289dbe297affdf5947c3849.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Our Lavish decorated Living Room with comfort
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
         Living Room
        </Typography>
      </CardBody>
    </Card>
    <Card
      shadow={false}
      className="relative grid h-[40rem] w-70  m-10 max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/66/dc/90/66dc903c6a8daa37f8514185bdd7e844.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
         Feeling Fresh Entrance with  good plants decore
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
           Entrance
        </Typography>
      </CardBody>
    </Card>
    
    </div>
    
      {/* <div className="block w-60 h-40 p-5 m-10 rounded-lg bg-grey-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black-700">
        <a href="#!">
          <img
            className=" w-50 h-60  "
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2  text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200"></p>
          <TERipple>
            <button
              type="button"
              className="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Button
            </button>
          </TERipple>
        </div>
      </div> */}
    </div>
  );
}