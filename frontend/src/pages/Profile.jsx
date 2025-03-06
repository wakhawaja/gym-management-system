import { useAuth } from "../context/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <main className="section-1" aria-label="User Profile">
      <h1>Your Profile</h1>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </main>
  );
};

export default Profile;
