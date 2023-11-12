import { useState } from "react";
import useWeather from "../hooks/useWeather";

const Form = () => {

    const [alert, setAlert] = useState('')

    const {search, dataSearch, consultWeather, setResult} = useWeather()

    const {city, country} = search

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }
        setAlert('')
        consultWeather(search)
        setResult({})
    }

  return (
    <div className="container">

        {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="city">Ciudad</label>
          <input type="text" id="city" name="city" onChange={dataSearch} value={city}/>
        </div>
        <div className="field">
          <label htmlFor="country">Pais</label>
          <select id="country" name="country" onChange={dataSearch} value={country}>
            <option value=""> Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input type="submit" value="consultar clima" />
      </form>
    </div>
  );
};

export default Form;
