import classes from './Card.module.css'
import { useHistory } from "react-router-dom";
import LazyImage from '../LazyImage/LazyImage'
import deleteIcon from "../../assets/icons/deleteIcon/icons8-delete-64.png"
import {useWatchListActions} from "../../Context/watchList/watchListProvider"
const Card = (props) => {
    const history = useHistory();
    const {remove} = useWatchListActions();
    const showDetails = (event)=>{
        event.stopPropagation();
        history.push(`/movie/${props.id}`)
    }
    const removeFromWatchList = (event) =>{
        event.stopPropagation();
        remove(props.id);
    }
    return (
        <div className={classes.wrapper} onClick={showDetails}>
            <LazyImage classes="rounded-t-lg h-5/6 w-full bg-gray-dark border-2 border-purple-light" src={props.imageUrl} alt={props.alt}/>
            <div className={classes.bottom}>
                <p className="pb-1 text-center">{props.alt}</p>
                <p className="text-yellow-600">{props.release_date }</p>
                <p className={classes.rate}>{props.rate}</p>
                {props.watch && <img className={classes.delete} src={deleteIcon} alt="delete" onClick={removeFromWatchList}></img>}
            </div>
        </div>
    )
}

export default Card
