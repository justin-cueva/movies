import { useEffect, useState } from "react";
// "(max-width: 1200px)"

const useMediaQuery = () => {
  const [colsPerRow, setColsPerRow] = useState(9);

  const defaultMatches = () => {
    const xxSmallMedia = window.matchMedia("(max-width: 420px)");
    const xSmallMedia = window.matchMedia("(max-width: 620px)");
    const smallMedia = window.matchMedia("(max-width: 820px)");
    const mediumMedia = window.matchMedia("(max-width: 1020px)");
    const largeMedia = window.matchMedia("(max-width: 1220px)");
    const xLargeMedia = window.matchMedia("(max-width: 1420px)");

    if (xLargeMedia.matches) setColsPerRow(8);
    if (largeMedia.matches) setColsPerRow(7);
    if (mediumMedia.matches) setColsPerRow(6);
    if (smallMedia.matches) setColsPerRow(5);
    if (xSmallMedia.matches) setColsPerRow(4);
    if (xxSmallMedia.matches) setColsPerRow(3);
  };

  useEffect(() => {
    defaultMatches();
  }, []);

  useEffect(() => {
    const xxSmallMedia = window.matchMedia("(max-width: 420px)");
    const xSmallMedia = window.matchMedia("(max-width: 620px)");
    const smallMedia = window.matchMedia("(max-width: 820px)");
    const mediumMedia = window.matchMedia("(max-width: 1020px)");
    const largeMedia = window.matchMedia("(max-width: 1220px)");
    const xLargeMedia = window.matchMedia("(max-width: 1420px)");
    const xxLargeMedia = window.matchMedia("(min-width: 1421px)");

    const listener = () => {
      if (xxLargeMedia.matches) setColsPerRow(9);
      if (xLargeMedia.matches) setColsPerRow(8);
      if (largeMedia.matches) setColsPerRow(7);
      if (mediumMedia.matches) setColsPerRow(6);
      if (smallMedia.matches) setColsPerRow(5);
      if (xSmallMedia.matches) setColsPerRow(4);
      if (xxSmallMedia.matches) setColsPerRow(3);
    };

    // if (media.matches !== matches) setMatches(media.matches);
    xLargeMedia.addListener(listener);
    largeMedia.addListener(listener);
    mediumMedia.addListener(listener);
    smallMedia.addListener(listener);
    xSmallMedia.addListener(listener);
    xxSmallMedia.addListener(listener);

    return () => {
      xLargeMedia.removeListener(listener);
      largeMedia.removeListener(listener);
      mediumMedia.removeListener(listener);
      smallMedia.removeListener(listener);
      xSmallMedia.removeListener(listener);
      xxSmallMedia.removeListener(listener);
    };
  }, []);

  return { colsPerRow };
};

export default useMediaQuery;
