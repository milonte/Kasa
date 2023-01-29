import React from 'react'
import HouseCard from '../components/HouseCard'
import { useLoaderData } from 'react-router-dom';
import { HouseModel } from '../model/HouseModel';

export default function Home() {
  const houses = useLoaderData() as Array<HouseModel>;
  return (
    <div>
      <div>Home</div>
            <ul>
            {houses.map((house) => (
              <HouseCard key={house.id} id={house.id} title={house.title}/>
          ))}
        </ul>
    </div>
  )
}
