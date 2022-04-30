import { useEffect, useState } from "react";

const useNavLinks = (url) => {
  const [navLinks, setNavLinks] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNavLinks(data));
  }, [url]);

  return [navLinks, setNavLinks];
};

export default useNavLinks;
