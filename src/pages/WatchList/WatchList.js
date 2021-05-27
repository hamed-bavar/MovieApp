import { useWatchListState } from "../../Context/watchList/watchListProvider";
import Card from "../../components/Card/Card";
import { useHistory } from "react-router-dom";
const WatchList = () => {
  const watchList = useWatchListState();
  const history = useHistory();
  return (
    <div className="bg-gray-dark min-h-screen grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 justify-items-center relative">
      {watchList.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            release_date={item.release_date}
            imageUrl={item.imageUrl}
            alt={item.alt}
            rate={item.rate}
            watch={true}
          ></Card>
        );
      })}
      {watchList.length === 0 && (
        <p
          className="text-red-700 font-bold cursor-pointer text-lg ml-4"
          onClick={() => history.push("/popular")}
        >
          watchlist is Empty. click here to explore movies
        </p>
      )}
    </div>
  );
};

export default WatchList;
