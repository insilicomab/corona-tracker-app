import Selector from "../components/Selector";
import Title from "../components/Title";
import Results from "../components/Results"

const TopPage =(props)=> {
    return(
        <div>
            <Title />
            <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
            <Results />
        </div>
    );
};

export default TopPage;