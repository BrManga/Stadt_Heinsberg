import React, { createContext } from "react";
import { data } from "./data";
export const HeinsbergContext = createContext();

class HeinsbergContextProvider extends React.Component {
  //console.log("data alindi",data);
  constructor(props) {
    super(props);
    this.state = {
      type: "alle",
      preise: "-"
    };
  }

  componentDidMount = async () => {
    await this.getData(data);
    var sortedAll = await {
      freizeitunderholung: [...this.state.freizeitunderholung],
      essenundtrinken: [...this.state.essenundtrinken],
      uebernachten: [...this.state.uebernachten],
      veranstaltungen: [...this.state.veranstallungen],
      tempType: "",
      tempPreise: ""
    };
    this.setState(
      { ...this.state, sorted: sortedAll, loading: false },
      () => {}
    );
  };

  getData = async data => {
    try {
      //console.log("sorted restaurant bilgisi alindi",sortedRestaurants);

      await this.setState(
        {
          ...data
        },
        () => {
          console.log("data fetched from data file", this.state);
        }
      );
    } catch (error) {
      console.log("error in getData function", error);
    }
  };
  filterEssenUndTrinkenPreise = () => {
    const { essenundtrinken, preise } = this.state;

    var newessenundtrinken = essenundtrinken.filter(
      item => item.preise === preise
    );

    var sortedAll = {
      ...this.state.sorted,
      essenundtrinken: newessenundtrinken
    };
    this.setState({ ...this.state, sorted: sortedAll });
  };
  filterEssenUndTrinkenType = value => {
    const { type, preise } = this.state;
    const { essenundtrinken } = this.state;
    var tempessentrinken = essenundtrinken;
    if (type !== this.state.sorted.tempType) {
      tempessentrinken = essenundtrinken.filter(item => item.type === type);
      var sortedAll = {
        ...this.state.sorted,
        essenundtrinken: tempessentrinken,
        tempType: type
      };
    }
    if (
      type === "deutsche" ||
      type === "kroatisch" ||
      type === "griechisch" ||
      type === "amerikanische" ||
      type === "chinesische" ||
      type === "italienisch"
    ) {
      tempessentrinken = tempessentrinken.filter(item => item.type === type);
      sortedAll = {
        ...this.state.sorted,
        essenundtrinken: tempessentrinken,
        tempType: type
      };
    }
    if (
      preise === "$" ||
      preise === "$$" ||
      preise === "$$$" ||
      preise === "$$$$" ||
      preise === "$$$$$"
    ) {
      console.log("inside preis filter");
      console.log(
        "from preise filter part inside filteressentrinkentype",
        essenundtrinken
      );
      tempessentrinken = tempessentrinken.filter(
        item => item.preise === preise
      );

      sortedAll = {
        ...this.state.sorted,
        essenundtrinken: tempessentrinken
      };
    }
    this.setState({ ...this.state, sorted: sortedAll });
  };
  filterFreizeitUndErholung = () => {
    const { type, freizeitunderholung } = this.state;

    if (type !== "alle") {
      var newfreizeitunderholung = freizeitunderholung.filter(
        item => item.type === type
      );
    }

    var sortedAll = {
      ...this.state.sorted,
      freizeitunderholung: newfreizeitunderholung
    };

    this.setState({ ...this.state, sorted: sortedAll });
  };

  handleChange = async e => {
    const target = e.target;
    const value = target.value;
    const name = e.target.name;
    //if there will be a new type of something you should enter it here inside conditions
    await this.setState({ ...this.state, [name]: value }, () => {
      console.log("inside handle change", this.state);
    });

    if (value === "sehenswertes" || value === "sport") {
      await this.filterFreizeitUndErholung();
    } else if (
      value === "deutsche" ||
      value === "kroatisch" ||
      value === "griechisch" ||
      value === "amerikanische" ||
      value === "chinesische" ||
      value === "italienisch" ||
      value === "$" ||
      value === "$$" ||
      value === "$$$" ||
      value === "$$$$" ||
      value === "$$$$$"
    ) {
      await this.filterEssenUndTrinkenType(value);
      //await this.filterEssenUndTrinkenPreise();
    } else if (value === "alle" || value === "-") {
      const { essenundtrinken } = this.state;
      console.log("hereee");

      let sortedAll = {
        ...this.state.sorted,
        essenundtrinken: essenundtrinken
      };
      this.setState({ ...this.state, sorted: sortedAll });
      this.forceUpdate();
    } else if (value === "aufsteigend" || value === "absteigend") {
      await this.filterVeranstallungen(value);
      this.forceUpdate();
    }
  };
  filterVeranstallungen = async value => {
    const {
      sorted: { veranstaltungen }
    } = this.state;
    var orderedVeranstallungen = [];
    await veranstaltungen.map(item => {
      var d = new Date(item.startdate).getTime();
      item.startdate = d;
      orderedVeranstallungen.push(item);
      return orderedVeranstallungen;
    });
    if (value === "aufsteigend") {
      orderedVeranstallungen = await orderedVeranstallungen.sort(
        (a, b) => parseFloat(a.startdate) - parseFloat(b.startdate)
      );
      let sortedAll = {
        ...this.state.sorted,
        veranstaltungen: orderedVeranstallungen
      };
      console.log("auf", orderedVeranstallungen);

      this.setState({ ...this.state, sorted: sortedAll }, () =>
        console.log("from filterVeranstaltungen aufsteigend: ", this.state)
      );
    } else if (value === "absteigend") {
      orderedVeranstallungen = await orderedVeranstallungen.sort(
        (a, b) => parseFloat(b.startdate) - parseFloat(a.startdate)
      );
      console.log("ab", orderedVeranstallungen);

      let sortedAll = {
        ...this.state.sorted,
        veranstaltungen: orderedVeranstallungen
      };

      this.setState({ ...this.state, sorted: sortedAll }, () =>
        console.log("from filterVeranstaltungen absteigend: ", this.state)
      );
    }
  };
  render() {
    return (
      <HeinsbergContext.Provider
        value={{ ...this.state, handleChange: this.handleChange }}
      >
        {this.props.children}
      </HeinsbergContext.Provider>
    );
  }
}
export default HeinsbergContextProvider;
