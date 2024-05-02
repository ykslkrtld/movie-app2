import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const SerieDetail = () => {
  const { id } = useParams();
  const [serieDetail, setSerieDetail] = useState({});
  const [videoKey, setVideoKey] = useState("");

  const {
    name,
    poster_path,
    overview,
    vote_average,
    first_air_date,
    vote_count,
  } = serieDetail;

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const serieDetailBaseUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const videoUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`;


  const getSerieDetail = async () => {
    try {
      const res = await axios(serieDetailBaseUrl)
      setSerieDetail(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSerieDetail()
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [serieDetailBaseUrl, videoUrl]);

  return (
    <div className="md:container px-10 mx-auto py-5">
      <h1 className="text-center dark:text-white text-3xl">{name}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="md:container flex justify-center px-10">
        <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 dark:bg-gray-dark-second shadow-lg">
          <img
            className=" lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt="poster"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h5 className="text-gray-900 dark:text-gray-50 text-xl font-medium mb-2">
                Overview
              </h5>
              <p className="text-gray-700 dark:text-gray-300  text-base mb-4">
                {overview}
              </p>
            </div>
            <ul className="rounded-lg border border-gray-400 text-gray-900 dark:text-gray-300">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                {"Release Date : " + first_air_date}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Rate : " + vote_average}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Total Vote : " + vote_count}
              </li>
              <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
                <Link
                  to={"/series"}
                  className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
                >
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerieDetail;
