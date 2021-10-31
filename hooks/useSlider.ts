import { useEffect, useState } from "react";
import React from "react";
import movieService from "../services/movieService";
import { Credits } from "../types/types";
const useSlider = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Credits | undefined>(undefined);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await movieService.getCredits(id);
        setLoading(false);
        setData(res);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [id]);
  return { loading, data, error };
};

export default useSlider;
