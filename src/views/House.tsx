import React, { ReactElement } from 'react'
import { HouseModel } from '../model/HouseModel';
import { useLoaderData } from 'react-router-dom';
import '../styles/house.scss';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';

export default function House() {
    const house = useLoaderData() as HouseModel;

    function displayRating(rating: number) {
        let returnElts: Array<ReactElement> = [];
        for (let i: number = 0; i < 5; i++) {
            returnElts.push(React.createElement("div", {
                className: i < rating ? 'rating-full' : 'rating-none',
                key: `${rating}-${i}`
            }, `★`));
        }
        const container = React.createElement("div", { className: "rating" }, returnElts);

        return (<>{container}</>)
    }
    return (
        <div id="house">
            <Carousel pictures={house.pictures} />
            <div id='infos'>
                <div className="house">
                    <div className='title'>{house.title}</div>
                    <div className='location'>{house.location}</div>
                    <div className='tags-container'> {house.tags.map(
                        (tag: string) => { return <span className='tag' key={tag}>{tag}</span> }
                    )}</div>
                </div>
                <div className='host'>
                    <div className='host-details'>
                        <div className='host-name'>
                            {house.host.name.split(' ').map(
                                (word: string) => { return (<span key={word}>{word}</span>) }
                            )}
                        </div>
                        <img src={house.host.picture} alt={`${house.host.name}-portrait`} className='host-picture' key={`${house.host.name}-portrait`} />
                    </div>
                    {displayRating(Number(house.rating))}
                </div>
            </div>

            <div id="dropdowns-container">
                <Dropdown title="Description">
                    <span>{house.description}</span>
                </Dropdown>

                <Dropdown title="Équipements">
                    <React.Fragment>
                        {house.equipments.map((equipment: string) => {
                            return (
                                <span key={equipment}>{equipment}</span>
                            )
                        })}
                    </React.Fragment>
                </Dropdown>
            </div>

        </div >
    )
}
