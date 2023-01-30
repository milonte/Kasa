import React from 'react'
import { HouseModel } from '../model/HouseModel';
import { useLoaderData } from 'react-router-dom';
import ErrorComponent from '../components/ErrorComponent';
import '../styles/house.scss';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';

export default function House() {
  const house = useLoaderData() as HouseModel;

  if (!house) {
    return <div><ErrorComponent /></div>
  }

  return (
    <div id="house">
      <Carousel pictures={house.pictures} />
      <li>{house.title}</li>
      <div id="dropdowns-container">
        <Dropdown title="Description">
          <>{house.description}</>
        </Dropdown>

        <Dropdown title="Équipements">
          <>
            {house.equipments.map((equipment: string) => {
              return (
                <li>{equipment}</li>)
            })}
          </>
        </Dropdown>
      </div>
      <li>{house.host.name}</li>
      <li>{house.host.picture}</li>
      <li>{house.rating}</li>
      <li>{house.location}</li>

      {house.tags.map((tag: string) => { return <li>{tag}</li> })}
    </div>
  )
}
