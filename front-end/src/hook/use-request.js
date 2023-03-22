import { useCallback } from "react";

const useRequest = () => {
  const request = useCallback(async (httpConfig, callback) => {
    try {
      const response = await fetch(httpConfig.url, {
        method: httpConfig.method ? httpConfig.method : "GET",
        headers: httpConfig.headers ? httpConfig.headers : {},
        body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const data = await response.json();
      callback(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    request,
  };
};

export default useRequest;
