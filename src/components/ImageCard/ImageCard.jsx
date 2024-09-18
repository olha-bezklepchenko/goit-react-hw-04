const ImageCard = ({ alt, likes, src, href }) => {
  return (
    <li>
      <div>
        <a href={href}>
          <img src={src} alt={alt} />
        </a>
        <div>
          <p>{likes}</p>
        </div>
      </div>
    </li>
  );
};

export default ImageCard;
