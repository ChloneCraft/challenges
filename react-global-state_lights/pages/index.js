import Link from "../components/Link";
import { lightsState } from "./atoms.jsx";
import { atom, useRecoilValue } from "recoil";

export default function HomePage() {
  const lights = useRecoilValue(lightsState);
  console.log(lightsState);
  return (
    <div>
      <h1>Home</h1>
      <p>{lights.filter((light) => light.isOn).length} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
