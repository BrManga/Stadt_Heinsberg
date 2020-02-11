import React, { createContext } from "react";
import alldata from "./data";
export const HeinsbergContext = createContext();

class HeinsbergContextProvider extends React.Component {
  //console.log("data alindi",data);
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sorted: [],
      essenundtrinken: [],
      type: "alle",
      preise: "-",
      freizeitunderholung: []
    };
  }

  componentDidMount = () => {
    this.getData(alldata.data);
  };

  getData = async datafromEffect => {
    try {
      const {
        loading,
        sorted,
        essenundtrinken,
        freizeitunderholung
      } = datafromEffect;
      console.log("bilgi geliyor", datafromEffect);

      //console.log("sorted restaurant bilgisi alindi",sortedRestaurants);

      await this.setState({
        sorted,
        essenundtrinken,
        freizeitunderholung,
        loading: false
      });
    } catch (error) {
      console.log("get data fonksiyonunda hata", error);
    }
  };
  filterRestaurants = () => {
    // console.log("yazmamali", this.state);
    const { type, essenundtrinken, preise } = this.state;

    let tempRestaurants = essenundtrinken.restaurant;
    if (type !== "alle") {
      //console.log(tempRestaurants);
      //console.log("type", type);

      tempRestaurants = tempRestaurants.filter(
        restaurant => restaurant.type === type
      );
    }
    if (preise !== "-") {
      tempRestaurants = tempRestaurants.filter(
        restaurant => restaurant.preise === preise
      );
    }

    var restaurant = { restaurant: tempRestaurants };
    var sortedAll = { ...this.state.sorted, restaurant };
    this.setState({ sorted: sortedAll }, () => console.log(this.state));
  };
  filterFreizeitUndErholung = () => {
    // console.log("yazmamali", this.state);
    const { type, freizeitunderholung } = this.state;
    console.log("fonksiyon icinden", freizeitunderholung, type);

    let { sehenswertesundsport } = freizeitunderholung;
    if (type !== "alle") {
      sehenswertesundsport = sehenswertesundsport.filter(
        item => item.type === type
      );
    }
    console.log("fonksiyon icindena", sehenswertesundsport);

    var sortedAll = {
      ...this.state.sorted,
      freizeitunderholung: sehenswertesundsport
    };
    this.setState({ sorted: sortedAll }, () =>
      console.log("state", this.state)
    );
  };

  handleChange = async e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    await this.setState({ ...this.state, [name]: value });
    this.filterRestaurants();
    this.filterFreizeitUndErholung();
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
