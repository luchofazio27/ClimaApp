import Form from "./Form";
import Result from "./Result";
import Loading from "./Loading";
import useWeather from "../hooks/useWeather";

const AppWeather = () => {
  const { result, loading, noResult } = useWeather();

  return (
    <>
      <main className="two-columns">
        <Form />
        {
        loading ? <Loading /> : 
        result?.name ? <Result /> : 
        noResult ? <p>{noResult}</p> : <p>El clima se va a mostrar aqui</p>
        }
      </main>
    </>
  );
};

export default AppWeather;
