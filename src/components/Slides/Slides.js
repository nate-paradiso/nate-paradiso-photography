import { cloudinaryPortfolioPhotos } from "../../data/PortfolioGallery/PortfolioGallery";
import { cloudinaryWeddingPhotos } from "../../data/WeddingGallery/WeddingGallery";
import { cloudinaryRealEstatePhotos } from "../../data/RealEstateGallery/RealEstateGallery";
import { cloudinaryCouplesPhotos } from "../../data/CouplesGallery/CouplesGallery";
import { cloudinaryStillLifePhotos } from "../../data/StillLifeGallery/StillLifeGallery";

const breakpoints = [1200, 640, 320];

const cloudinaryLink = (publicId, width, height) =>
  `https://res.cloudinary.com/hzjhihahh/image/upload/w_${width},h_${height}/${publicId}.jpg`;

export const cloudinaryPortfolioSlides = cloudinaryPortfolioPhotos.map(photo => {
  const width = photo.width;
  const height = photo.height;

  const maxWidth = 660;
  const scaledWidth = Math.min(width, maxWidth);
  const scaledHeight = Math.round((height / width) * scaledWidth);

  return {
    src: cloudinaryLink(photo.publicId, scaledWidth, scaledHeight), // Use scaledWidth and scaledHeight here
    width: scaledWidth,
    height: scaledHeight,
    srcSet: breakpoints.map(breakpoint => {
      const breakpointWidth = Math.min(breakpoint, scaledWidth);
      const breakpointHeight = Math.round((scaledHeight / scaledWidth) * breakpointWidth);

      return {
        src: cloudinaryLink(photo.publicId, breakpointWidth, breakpointHeight),
        width: breakpointWidth,
        height: breakpointHeight,
      };
    }),
  };
});

export const cloudinaryWeddingSlides = cloudinaryWeddingPhotos.map(photo => {
  const width = photo.width;
  const height = photo.height;

  const maxWidth = 750;
  const scaledWidth = Math.min(width, maxWidth);
  const scaledHeight = Math.round((height / width) * scaledWidth);

  return {
    src: cloudinaryLink(photo.publicId, scaledWidth, scaledHeight), // Use scaledWidth and scaledHeight here
    width: scaledWidth,
    height: scaledHeight,
    srcSet: breakpoints.map(breakpoint => {
      const breakpointWidth = Math.min(breakpoint, scaledWidth);
      const breakpointHeight = Math.round((scaledHeight / scaledWidth) * breakpointWidth);

      return {
        src: cloudinaryLink(photo.publicId, breakpointWidth, breakpointHeight),
        width: breakpointWidth,
        height: breakpointHeight,
      };
    }),
  };
});

export const cloudinaryRealEstateSlides = cloudinaryRealEstatePhotos.map(photo => {
  const width = photo.width;
  const height = photo.height;

  const maxWidth = 750;
  const scaledWidth = Math.min(width, maxWidth);
  const scaledHeight = Math.round((height / width) * scaledWidth);

  return {
    src: cloudinaryLink(photo.publicId, scaledWidth, scaledHeight), // Use scaledWidth and scaledHeight here
    width: scaledWidth,
    height: scaledHeight,
    srcSet: breakpoints.map(breakpoint => {
      const breakpointWidth = Math.min(breakpoint, scaledWidth);
      const breakpointHeight = Math.round((scaledHeight / scaledWidth) * breakpointWidth);

      return {
        src: cloudinaryLink(photo.publicId, breakpointWidth, breakpointHeight),
        width: breakpointWidth,
        height: breakpointHeight,
      };
    }),
  };
});
export const cloudinaryCoupleSlides = cloudinaryCouplesPhotos.map(photo => {
  const width = photo.width;
  const height = photo.height;

  const maxWidth = 1200;
  const scaledWidth = Math.min(width, maxWidth);
  const scaledHeight = Math.round((height / width) * scaledWidth);

  return {
    src: cloudinaryLink(photo.publicId, scaledWidth, scaledHeight), // Use scaledWidth and scaledHeight here
    width: scaledWidth,
    height: scaledHeight,
    srcSet: breakpoints.map(breakpoint => {
      const breakpointWidth = Math.min(breakpoint, scaledWidth);
      const breakpointHeight = Math.round((scaledHeight / scaledWidth) * breakpointWidth);

      return {
        src: cloudinaryLink(photo.publicId, breakpointWidth, breakpointHeight),
        width: breakpointWidth,
        height: breakpointHeight,
      };
    }),
  };
});
export const cloudinaryStillLifeSlides = cloudinaryStillLifePhotos.map(photo => {
  const width = photo.width;
  const height = photo.height;

  const maxWidth = 1200;
  const scaledWidth = Math.min(width, maxWidth);
  const scaledHeight = Math.round((height / width) * scaledWidth);

  return {
    src: cloudinaryLink(photo.publicId, scaledWidth, scaledHeight), // Use scaledWidth and scaledHeight here
    width: scaledWidth,
    height: scaledHeight,
    srcSet: breakpoints.map(breakpoint => {
      const breakpointWidth = Math.min(breakpoint, scaledWidth);
      const breakpointHeight = Math.round((scaledHeight / scaledWidth) * breakpointWidth);

      return {
        src: cloudinaryLink(photo.publicId, breakpointWidth, breakpointHeight),
        width: breakpointWidth,
        height: breakpointHeight,
      };
    }),
  };
});
