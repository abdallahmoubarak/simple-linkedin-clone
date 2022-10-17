export default function NoDataPlaceholder({ name }) {
  return (
    <>
      <div className="no-data">
        <img src="/img/placeholder.png" className="placeholder-img" alt="" />
        <div>No {name}</div>
      </div>
    </>
  );
}
