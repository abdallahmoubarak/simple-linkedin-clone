export default function Button({ text = "click", onClick, dark, font }) {
  return (
    <>
      <button onClick={onClick} className={dark ? "dark" : ""}>
        {text}
      </button>
      <style jsx="true">{`
        button {
          background: #0072b1;
          color: white;
          padding: 0.6rem 3rem;
          border-radius: 30rem;
          font-size: ${font || "1.2rem"};
          border: none;
          cursor: pointer;
          font-weight: 600;
          width: 100%;
          border: 1px solid #0072b1;
        }
        button:hover {
          background: #0092d1;
        }
        .dark {
          background: white;
          color: #0072b1;
        }
        .dark:hover {
          background: #a1cbe2;
        }
      `}</style>
    </>
  );
}
