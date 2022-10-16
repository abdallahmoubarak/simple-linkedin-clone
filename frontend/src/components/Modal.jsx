export default function Modal({ openModal, setOpenModal, children }) {
  return (
    <>
      <>
        {openModal && (
          <div
            className="modal-background"
            onClick={() => setOpenModal(false)}></div>
        )}
        <div className={`modal ${openModal && "show"}`}>{children}</div>
      </>
      <style jsx="true">{`
        .modal-background {
          background-color: transparent;
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          z-index: 20;
        }
        .modal {
          width: 100vw;
          max-width: 30rem;
          min-height: calc(100% - 4rem);
          height: calc(100% - 4rem);
          background: white;
          position: fixed;
          right: 6rem;
          top: 2rem;
          border: 1px solid #0072b1;
          z-index: 24;
          font-size: 1.2rem;
          overflow: hidden;
          overflow-y: auto;
          -webkit-clip-path: circle(0% at 95% 5%);
          clip-path: circle(0% at 95% 5%);
          -webkit-transition: -webkit-clip-path 0.5s ease-in-out;
          transition: -webkit-clip-path 0.5s ease-in-out;
          -o-transition: clip-path 0.5s ease-in-out;
          transition: clip-path 0.5s ease-in-out;
          transition: clip-path 0.5s ease-in-out,
            -webkit-clip-path 0.5s ease-in-out;
        }

        .show {
          -webkit-clip-path: circle(100%);
          clip-path: circle(100%);
        }
      `}</style>
    </>
  );
}
