import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos.map(({ id, alt_description, likes, urls }) => (
        <ImageCard
          key={id}
          alt={alt_description}
          likes={likes}
          src={urls.small}
          href={urls.full}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
