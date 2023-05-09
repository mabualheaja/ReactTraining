import Profile from "./components/Profile";


export default function App() {
  return (
    <>
      <Profile
        person ={{
          ImageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />
      <Profile
        person ={{
          ImageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
        />
    </>
  );
}

