import React, { createContext } from "react";

export const HeinsbergContext = createContext();

class HeinsbergContextProvider extends React.Component {
  //console.log("data alindi",data);
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      sorted: [],
      essenundtrinken: [],
      type: "alle",
      preise: "-",
      freizeitunderholung: []
    };
  }

  componentDidMount = () => {
    this.getData(this.props.data.data);
  };

  getData = async datafromEffect => {
    try {
      const {
        loading,
        sorted,
        essenundtrinken,
        freizeitunderholung
      } = datafromEffect;
      //console.log("bilgi geliyor", datafromEffect);

      //console.log("sorted restaurant bilgisi alindi",sortedRestaurants);

      await this.setState({
        loading,
        sorted,
        essenundtrinken,
        freizeitunderholung
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

    this.setState({ sorted: restaurant }, () => console.log(this.state));
  };
  handleChange = async e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    await this.setState({ ...this.state, [name]: value });
    this.filterRestaurants();
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
