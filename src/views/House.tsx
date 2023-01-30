import React from 'react'
import { HouseModel } from '../model/HouseModel';
import { useLoaderData } from 'react-router-dom';
import ErrorComponent from '../components/ErrorComponent';
import '../styles/house.scss';
import Carousel from '../components/Carousel';

export default function House() {
  const house = useLoaderData() as HouseModel;

  if (!house) {
    return <div><ErrorComponent /></div>
  }
  return (
    <div id="house">
      <Carousel pictures={house.pictures} />
      <ul>
        <li>{house.cover}</li>
        <li>{house.title}</li>
        <li>{house.description}</li>
        {house.pictures.map((picture: string) => { return <li>{picture}</li> })}
        <li>{house.host.name}</li>
        <li>{house.host.picture}</li>
        <li>{house.rating}</li>
        <li>{house.location}</li>
        {house.equipments.map((equipment: string) => { return <li>{equipment}</li> })}
        {house.tags.map((tag: string) => { return <li>{tag}</li> })}
      </ul>
    </div>
  )
}
