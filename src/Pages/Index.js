import Projects from "../Components/Projects";

export default function Index({setErrorPage}) {
  return <div className="mx-4 pb-10 sm:mx-8 md:mx-48 xl:mx-52 2xl:mx-72"><Projects setErrorPage={setErrorPage}/></div>;
}