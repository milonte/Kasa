import React from 'react'
import HouseCard from '../components/HouseCard'
import { useLoaderData } from 'react-router-dom';
import { HouseModel } from '../model/HouseModel';
import '../styles/home.scss';
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Home() {
  const houses = useLoaderData() as Array<HouseModel>;
  return (
    <div id="home">
      <HelmetProvider>
        <Helmet>
          <title>Accueuil</title>
        </Helmet>
      </HelmetProvider>
      <div className="banner">Chez vous, partout et ailleurs</div>
      <div className="houses-container">
        {houses.map((house) => (
          <HouseCard key={house.id} id={house.id} title={house.title} cover={house.cover} />
        ))}
      </div>
    </div>
  )
}
