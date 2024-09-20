import css from "./ImageCard.module.css";

const ImageCard = ({ alt, likes, src, autor, portfolio }) => {
  return (
    <div className={css.item}>
      <img src={src} alt={alt} width="300" height="100" />
      <div>
        <p>
          Autor:<span>{autor}</span>
        </p>
        <a href={portfolio} target="_blank" rel="noopener noreferrer">
          portfolio
        </a>
        <p>{likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
