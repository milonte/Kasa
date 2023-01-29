export interface HouseModel {
    id: string;
    title: string;
    pictures: Array<string>;
    cover: string;
    description: string;
    host: HostModel;
    rating: string;
    location: string;
    equipments: Array<string>;
    tags: Array<string>;
}

interface HostModel {
    name: string;
    picture: string;
}