import About from "@/components/about";
import Artist from "@/components/artists";
import Hero from "@/components/hero";
import Management from "@/components/team";
import MyRelease from "@/components/release";
import {
  artistApi,
  clientApi,
  managerApi,
  releaseApi,
} from "@/utility/constants";
import Clients from "@/components/clients";
import Services from "@/components/services";
import { Roboto_Condensed, Bricolage_Grotesque } from "next/font/google";
import Loading from "@/components/loading";

const titleFont = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "900"],
});
const textFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300"],
});

const Home = async () => {
  const managers = await fetch(managerApi, { cache: "no-cache" }).then(
    (res) => {
      return res.json();
    }
  );

  const artists = await fetch(artistApi, {
    cache: "no-cache",
  }).then((res) => {
    return res.json();
  });

  const ReleaseData = await fetch(releaseApi, {
    cache: "no-cache",
  }).then((res) => {
    return res.json();
  });

  const ClientData = await fetch(clientApi, {
    cache: "no-cache",
  }).then((res) => {
    return res.json();
  });

  return (
    <main className={textFont.className}>
      <Loading />
      <Hero />
      <About font={titleFont} />

      <Artist artists={artists} font={titleFont} />
      <Management managers={managers} font={titleFont} />
      <MyRelease ReleaseData={ReleaseData} font={titleFont} />
      <Services font={titleFont} />
      <Clients ClientData={ClientData} font={titleFont} />
    </main>
  );
};

export default Home;
