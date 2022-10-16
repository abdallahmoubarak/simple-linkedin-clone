export default function Button({ text = "click", onClick, dark, font }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
      <style jsx="true">{`
        button {
          background: ${dark ? "white" : "#0072b1"};
          color: ${dark ? "#0072b1" : "white"};
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
          background: ${dark ? "#eeddff" : "#0092d1"};
        }
      `}</style>
    </>
  );
}
