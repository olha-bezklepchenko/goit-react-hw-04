const ErrorMessage = ({ title, message }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
