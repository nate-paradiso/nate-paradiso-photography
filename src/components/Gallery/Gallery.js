import { useEffect, useState } from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export const Gallery = () => {
  const [resizedDims, setResizedDims] = useState({ width: 1000, height: 500 });

  const container = {
    width: resizedDims.width,
    height: resizedDims.height,
  };

  const items = [
    {
      // Image Item:
      itemId: 1,
      mediaUrl:
        "https://res.cloudinary.com/hzjhihahh/image/upload/v1706222674/portfolio-nate-paradiso-photography/rl4jbg7pxtjrmistqwfs.jpg",
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
  ];
  const eventListener = (eName, eData) => {
    console.log({ eName, eData });
    // Handle gallery events if needed
  };

  const setContainer = dims => {
    // Set container dimensions
    setResizedDims(dims);
  };

  useEffect(() => {
    // Add event listener for resizing
    window.addEventListener("resize", () =>
      setContainer({ width: window.innerWidth, height: window.innerHeight }),
    );

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", () =>
        setContainer({ width: window.innerWidth, height: window.innerHeight }),
      );
    };
  }, []);
  return (
    <ProGallery
      id={1} // Add a unique id for the gallery
      items={items}
      container={container}
      scrollingElement={document.getElementById("gallery") || window}
      eventsListener={eventListener}
    />
  );
};
