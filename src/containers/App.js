import React from "react";
import "./App.css";
import Header from "../components/Header";
import RecipesList from "../components/RecipesList";
import RecipeDetail from "../components/RecipeDetail";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

const proxy = "https://cors-anywhere.herokuapp.com/";
// const key = "7d7b90e7ec6273b9c786502ba5aaf5dc";
// const key = "dda0e333667ea982d69119090c03ccf4";
// const key = "5babede0c0e663b94cd36fb22d574fe1";
const key = "16ef46bfa7bf38bd8452758c86e77ac9";
// const key = "37227132f45a69ca2b850e62640c8307";
// const key = "8d622fa4cd54fb4acf85d04d1d484e33";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      selectedRecipe: null,
      storage: [],
      term: "",
      isPending: false,
      sort: ""
    };
  }

  onSubmit = async (term, page = 1, r = "r") => {
    this.setState({ isPending: true });
    this.setState({ term: term });
    this.setState({ sort: r });
    try {
      await fetch(
        `${proxy}https://food2fork.com/api/search?key=${key}&q=${term}&page=${page}&sort=${r}`
      )
        .then(responce => responce.json())
        .then(results =>
          this.setState({ recipes: results.recipes, isPending: false })
        );
    } catch (err) {
      console.log(err);
    }
  };

  onRecipeSelect = async recipe => {
    this.setState({ isPending: true });
    try {
      await fetch(
        `${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${recipe}`
      )
        .then(responce => responce.json())
        .then(results =>
          this.setState({ selectedRecipe: results.recipe, isPending: false })
        );
    } catch (err) {
      console.log(err);
    }
  };

  onRecipePopUpClose = () => {
    this.setState({ selectedRecipe: null });
  };

  async componentDidMount() {
    this.onSubmit("");
    this.restoreStorage();
  }

  restoreStorage = async () => {
    let arrayOfValues = [];
    for (let i in localStorage) {
      if (localStorage.hasOwnProperty(i)) {
        arrayOfValues.push(JSON.parse(localStorage.getItem(i)));
      }
    }
    await this.setState({ storage: arrayOfValues });
  };

  readStorage = e => {
    const data = [e.image_url, e.title, e.recipe_id, e.publisher];
    localStorage.setItem(e.recipe_id, JSON.stringify(data));
    this.restoreStorage();
  };

  deleteFromStorage = e => {
    localStorage.removeItem(e);
    this.restoreStorage();
  };

  renderSpinner = () => {
    if (this.state.isPending) {
      return <Spinner />;
    } else {
      return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header
          onSubmit={this.onSubmit}
          storage={this.state.storage}
          deleteFromStorage={this.deleteFromStorage}
          onRecipeSelect={this.onRecipeSelect}
          term={this.state.term}
        />
        <div className="App">
          <RecipesList
            recipes={this.state.recipes}
            onRecipeSelect={this.onRecipeSelect}
            onReadStorage={this.readStorage}
            onSubmit={this.onSubmit}
            term={this.state.term}
            sort={this.state.sort}
          />
          <RecipeDetail
            selectedRecipe={this.state.selectedRecipe}
            onRecipePopUpClose={this.onRecipePopUpClose}
            onReadStorage={this.readStorage}
          />
          {this.renderSpinner()}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
