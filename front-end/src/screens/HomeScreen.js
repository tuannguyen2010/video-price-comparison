import React, { useState, useEffect } from "react";
import styles from "./HomeScreen.module.css";
import useRequest from "../hook/use-request";

import Header from '../components/Header';
import Videos from '../components/Videos';

const HomeScreen = () => {
  const [videos, setVideos] = useState([]);
  const { request } = useRequest();

  const getVideosListHandler = (data) => {
    setVideos(data);
  };
  useEffect(() => {
    request({ url: "/videos" }, getVideosListHandler);
  }, [request]);
  return (<>
    <Header />
    <Videos videos={videos}/>
  </>);
};

export default HomeScreen;
