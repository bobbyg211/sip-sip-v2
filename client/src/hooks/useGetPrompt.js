import { useState, useEffect } from "react";
import axios from "axios";

export default function useGetPrompt() {
  const [seed, setSeed] = useState(0);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);

  // Update to start at beginning when prompts run out

  const action = async (newSeed = false) => {
    try {
      if (!newSeed) {
        const response = await axios.get(`/api/prompt`, {
          params: {
            seed: seed,
            offset: offset,
          },
        });

        const newOffset = offset + 1;
        setOffset(newOffset);

        setData(response.data);
      } else {
        setOffset(0);
        setData([]);
        setSeed(Math.floor(Math.random() * 999 + 1));
      }
    } catch (err) {
      console.log("Get prompt:", err);
    }
  };

  useEffect(() => {
    if (!seed) {
      setSeed(Math.floor(Math.random() * 999 + 1));
    } else {
      action();
    }
  }, [seed]);

  return { action, data };
}
