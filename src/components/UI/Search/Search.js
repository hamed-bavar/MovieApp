import searchIcon from '../../../assets/icons/searchIcon/icons8-search-100.png'
import classes from './Search.module.css'
const Search = () => {
    return (
        <div className='flex items-center'>
            <input placeholder="search movie ..." type="text" className={classes['input']}></input>
            <button className='-ml-8 rounded-full  w-7 h-7 flex justify-center transform scale-110 hover:scale-125'>
                <img src={searchIcon} alt="searchIcon" className='transform scale-50 shadow'></img>
            </button>
        </div>
    )
}

export default Search;
