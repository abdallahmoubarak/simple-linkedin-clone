export default function ProfilePage({ setProfile }) {
  return (
    <>
      <div className="pointer" onClick={() => setProfile(false)}>
        back to offers
      </div>
      <div>Profile</div>
    </>
  );
}
