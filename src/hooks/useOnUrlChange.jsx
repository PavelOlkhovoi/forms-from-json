import { useEffect, useState } from "react";

const useOnUrlChange = (param) => {
  const [urlParams, setUrlParams] = useState(null);

  const handleHashChange = (params) => {
    const newParam = getQueryParamsFromURL(params.newURL, param);
    const oldParams = getQueryParamsFromURL(params.oldURL, param);

    if (newParam !== oldParams) {
      setUrlParams(newParam[0].split("=")[1]);
    }
  };

  useEffect(() => {
    if (!urlParams) {
      const hash = window.location.hash;
      if (hash.length > 0) {
        const getParamValue = getQueryParamsFromURL(hash, param)[0].split(
          "="
        )[1];
        setUrlParams(getParamValue);
      }
    }
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return urlParams;
};

export default useOnUrlChange;

function getQueryParamsFromURL(url, param) {
  const paramsArr = url
    .split("?")
    .slice(1)[0]
    .split("&")
    .filter((p) => {
      return p.startsWith(param);
    });

  return paramsArr;
}
