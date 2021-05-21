import classes from './Card.module.css'
import { useHistory } from "react-router-dom";
import LazyImage from '../LazyImage/LazyImage'
const Card = (props) => {
    const history = useHistory();
    const showDetails = (event)=>{
        event.stopPropagation();
        history.push(`/movie/${props.id}`)
    }
    return (
        <div className={classes.wrapper} onClick={showDetails}>
            <LazyImage classes="rounded-t-lg h-5/6 w-full bg-gray-dark border-2 border-purple-light" src={props.imageUrl} alt={props.alt}/>
            <div className={classes.bottom}>
                <p className="pb-1 text-center">{props.alt}</p>
                <p className="text-yellow-600">{props.release_date }</p>
                <p className={classes.rate}>{props.rate}</p>
            </div>
        </div>
    )
}

export default Card
