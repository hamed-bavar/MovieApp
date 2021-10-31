import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React, { useEffect, useState } from "react";
import movieService from "../../../services/movieService";
import { MovieDetails } from "../../../types/types";
import ShowDetails from "../../../components/ShowDetails/ShowDetails";
import Slider from "../../../components/Slider/Slider";
import Gallery from "../../../components/Gallery/Gallery";
import { useRouter } from "next/router";
import Notif from "../../../components/Notif/Notif";
interface MovieDetailsPageProps {
  movie: MovieDetails;
}
const Index: NextPage<MovieDetailsPageProps> = ({ movie }) => {
  const router = useRouter();
  const [id, setId] = useState(router.query.id as string);
  const [notif, setNotif] = useState(false);
  const addNotif = () => {
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 700);
  };
  useEffect(() => {
    setId(router.query.id as string);
  }, [router.query.id]);
  return (
    <>
      <ShowDetails {...movie} id={id} addNotif={addNotif} />
      <Slider id={id}></Slider>
      <Gallery id={id}></Gallery>
      {notif && <Notif></Notif>}
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.query;
  const movie = await movieService.getMovieById(id as string);
  return {
    props: { movie },
  };
};
export default Index;
