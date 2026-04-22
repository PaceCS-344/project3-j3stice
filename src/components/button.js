function Button({ text, link }) {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <button className="btn">{text}</button>
      </a>
    );
  }
  
  export default Button;