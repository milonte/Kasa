import { Link } from 'react-router-dom'

interface HouseCardProps {
    id: string;
    title: string;
}

export default function HouseCard(props: HouseCardProps) {
  return (
    <li key={props.id}>
        <Link to={`house/${props.id}`}>{props.title}</Link>
    </li>
  )
}
