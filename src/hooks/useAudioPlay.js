import { useState, useEffect, useRef } from "react";

const useAudioPlayer = () => {
  const audioRef = useRef(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioUrlHandler = (url) => {
    console.log(url);
    if (!audioUrl) {
      setAudioUrl(url);
      setIsLoading(true);
    } else {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (audioUrl && audioRef) {
      audioRef.current.src = audioUrl;
      audioRef.current.addEventListener("loadeddata", handleLoadedData);
      audioRef.current.addEventListener("canplay", handleCanPlay);
      audioRef.current.addEventListener("ended", handleEnded);
    }
  }, [audioUrl, audioRef]);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleCanPlay = () => {
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return {
    audioRef,
    isLoading,
    isPlaying,
    audioUrlHandler,
    setIsPlaying,
  };
};

export default useAudioPlayer;
