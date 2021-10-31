import { GetStaticPropsContext, NextPage } from "next";
import React from "react";
import Filter from "../../../components/Filter/Filter";
import Cards from "../../../components/Cards/Cards";
import classes from "./home.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import movieService from "../../../services/movieService";
import { MoviesType } from "../../../types/types";
import { generatePath } from "../../../utils/generateMoviePath";
import { useRouter } from "next/dist/client/router";
interface IndexProps {
  movies: MoviesType["results"];
  category: string;
}
const Index: NextPage<IndexProps> = ({ category, movies }) => {
  const router = useRouter();
  const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    router.push(`/${category}/1`);
  };
  const onChangePage = (page: number) => {
    const category = router.query.category;
    router.push(`/${category}/${page}`);
  };
  return (
    <div className={classes.homepageContainer}>
      <Filter category={category} onChangeFilter={onChangeFilter}></Filter>
      <Cards movies={movies} />
      <Pagination numberOfPages={50} onChangePage={onChangePage} />
    </div>
  );
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  let movies: MoviesType["results"] = [] as any;
  try {
    movies = await movieService.getMovieByCatAndPage(
      context.params!.category as string,
      +context!.params!.page! as number
    );
    return {
      props: {
        movies: movies,
        category: context.params!.category,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
export const getStaticPaths = async () => {
  const paths = generatePath();
  return {
    paths: paths,
    fallback: true,
  };
};

//get staticprops in next js
export default Index;
