import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, description, likes, urls, user }) => (
        <li key={id} className={css.item}>
          <ImageCard
            alt={description}
            likes={likes}
            src={urls.small}
            href={urls.regular}
            autor={user.name}
            portfolio={user.links.html}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
