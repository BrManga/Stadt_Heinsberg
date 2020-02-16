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
    console.log("did mount");
    var sortedAll = await {
      freizeitunderholung: [...this.state.freizeitunderholung],
      essenundtrinken: [...this.state.essenundtrinken],
      uebernachten: [...this.state.uebernachten],
      veranstaltungen: [...this.state.veranstaltungen]
    };
    this.setState({ ...this.state, sorted: sortedAll, loading: false }, () => {
      console.log("sil bastan", this.state);
    });
  };

  getData = async data => {
    try {
      //console.log("sorted restaurant bilgisi alindi",sortedRestaurants);

      await this.setState(
        {
          ...data
        },
        () => {
          console.log("state after fetching", this.state);
        }
      );
    } catch (error) {
      console.log("get data fonksiyonunda hata", error);
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
    this.setState({ ...this.state, sorted: sortedAll }, () =>
      console.log(
        "context filterEssenUndTrinken fonksiyonu icinden ",
        this.state
      )
    );
  };
  filterEssenUndTrinkenType = () => {
    //console.log("yazmamali", this.state);
    const { type, essenundtrinken } = this.state;

    var newessenundtrinken = essenundtrinken.filter(item => item.type === type);

    var sortedAll = {
      ...this.state.sorted,
      essenundtrinken: newessenundtrinken
    };

    this.setState({ ...this.state, sorted: sortedAll }, () =>
      console.log(
        "context filterEssenUndTrinken fonksiyonu icinden ",
        this.state
      )
    );
  };
  filterFreizeitUndErholung = () => {
    const { type, freizeitunderholung } = this.state;
    //console.log("fonksiyon icinden", freizeitunderholung, type);

    if (type !== "alle") {
      var newfreizeitunderholung = freizeitunderholung.filter(
        item => item.type === type
      );
      //console.log("yazmamali", this.state);
    }

    var sortedAll = {
      ...this.state.sorted,
      freizeitunderholung: newfreizeitunderholung
    };

    this.setState({ ...this.state, sorted: sortedAll }, () =>
      console.log("from filterFreizeitUndErholun in context file: ", this.state)
    );
  };

  handleChange = async e => {
    const target = e.target;
    const value = target.value;
    const name = e.target.name;
    console.log("valueee", value);
    //if there will be a new type of something you should enter it here inside conditions
    await this.setState({ ...this.state, [name]: value });
    console.log("valueee1", value);

    if (value === "sehenswertes" || value === "sport") {
      await this.filterFreizeitUndErholung();
    } else if (
      value === "deutsche" ||
      value === "kroatisch" ||
      value === "griechisch" ||
      value === "amerikanische" ||
      value === "chinesische" ||
      value === "italienisch"
    ) {
      await this.filterEssenUndTrinkenType();
    } else if (
      value === "$" ||
      value === "$$" ||
      value === "$$$" ||
      value === "$$$$" ||
      value === "$$$$$"
    ) {
      await this.filterEssenUndTrinkenPreise();
    } else if (value === "alle" || value === "-") {
      var sortedAll = await {
        freizeitunderholung: [...this.state.freizeitunderholung],
        essenundtrinken: [...this.state.essenundtrinken],
        uebernachten: [...this.state.uebernachten],
        veranstaltungen: [...this.state.veranstaltungen]
      };

      this.setState({ ...this.state, sorted: sortedAll });
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
