import { Link } from 'react-router-dom'
import '../styles/components/housecard.scss';

interface HouseCardProps {
  id: string;
  title: string;
  cover: string;
}

export default function HouseCard(props: HouseCardProps) {
  return (
    <Link to={`house/${props.id}`} className="house-card" key={props.id}>
      <img className="cover" src={props.cover} alt={`${props.title}-cover`} />
      <div className="title"><span className='text'>{props.title}</span></div>
    </Link>
  )
}
