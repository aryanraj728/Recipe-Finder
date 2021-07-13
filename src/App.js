import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import './App.css';

var mealName = 'pasta';

// Class getMeal
export default class getMeal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Handle input 
  handleChange(event) {
    this.setState({ value: event.target.value });
    mealName = this.state.value;
  }

  // Submit Input
  handleSubmit(event) {
    document.getElementById('box2').style.visibility = 'visible';
    this.componentDidMount();
    event.preventDefault();
  }

  state = {
    loading: true,
    meal: null
  };

  async componentDidMount() {
    try {
      {/*  Fetch details from the api */ }
      const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ meal: data.meals[0], loading: false });
      document.getElementById('belowSearch').innerHTML = "Type a Dish Name to Search for it's ingredient";
    }
    catch (error) {
      {/*  No Data Has been recieved text */ }
      document.getElementById('box2').style.visibility = 'hidden';
      document.getElementById('belowSearch').innerHTML = 'No Data Has been recieved';
    }
  }

  render() {
    {/*  Check Result */ }
    if (this.state.loading) {
      return <div></div>;
    }

    if (!this.state.meal) {
      return <div>loading...</div>;
    }

    return (
      // Main Content
      <div className="main">
        {/*  Title */}
        <div className="title">
          Recipe Finder
        </div>
        {/*  Search Bar */}
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input className="searchBar" type="text" value={this.state.value} placeholder="Enter the Name of the Dish" onChange={this.handleChange} />
            </label>
            <input className="resBtn" type="submit" value="Get Ingredients" />
          </form>
        </div>
        <div className="belowSearch" id='belowSearch'>
        {/*  Result */}
        </div>
        <div className="searchResult" id="box2">
          {/*  Result Header */}
          <div className="header">
            <div>
              {/*  Meal Name */}
              <center>
                {this.state.meal.strMeal}
              </center>
            </div>
            {/*  Like */}
            <div className="heart" id='heart'>
              ♡
            </div>
          </div>
          {/*  Result Details */}
          <div className="resContainer">
            <div className="leftCont">
              {/*  Meal Image */}
              <div className="resImg"><img src={this.state.meal.strMealThumb} /></div>
            </div>
            {/*  Meal Details */}
            <div className="rightCont">
              {/*  Meal Category */}
              <div className="resCat">Category of Meal -
                <div className="resCatRes">{this.state.meal.strCategory}</div>
              </div>
              {/*  Meal Area */}
              <div className="resArea">Area of the Meal -
                <div className="resAreaRes">{this.state.meal.strArea}</div>
              </div>
              {/*  Meal Ingredients */}
              <div class="ingMain">Ingredients</div>
              <div className="resIng">
                <p>{this.state.meal.strIngredient2}  {this.state.meal.strMeasure2} </p>
                <p>{this.state.meal.strIngredient1}  {this.state.meal.strMeasure1} </p>
                <p>{this.state.meal.strIngredient3}  {this.state.meal.strMeasure3} </p>
                <p>{this.state.meal.strIngredient4}  {this.state.meal.strMeasure4} </p>
                <p>{this.state.meal.strIngredient5}  {this.state.meal.strMeasure5} </p>
                <p>{this.state.meal.strIngredient6}  {this.state.meal.strMeasure6} </p>
                <p>{this.state.meal.strIngredient7}  {this.state.meal.strMeasure7} </p>
                <p>{this.state.meal.strIngredient8}  {this.state.meal.strMeasure8} </p>
                <p>{this.state.meal.strIngredient9}  {this.state.meal.strMeasure9} </p>
                <p>{this.state.meal.strIngredient10}  {this.state.meal.strMeasure10} </p>
                <p>{this.state.meal.strIngredient11}  {this.state.meal.strMeasure11} </p>
                <p>{this.state.meal.strIngredient12}  {this.state.meal.strMeasure12} </p>
                <p>{this.state.meal.strIngredient13}  {this.state.meal.strMeasure13} </p>
                <p>{this.state.meal.strIngredient14}  {this.state.meal.strMeasure14} </p>
                <p>{this.state.meal.strIngredient15}  {this.state.meal.strMeasure15} </p>
                <p>{this.state.meal.strIngredient16}  {this.state.meal.strMeasure16} </p>
                <p>{this.state.meal.strIngredient17}  {this.state.meal.strMeasure17} </p>
                <p>{this.state.meal.strIngredient18}  {this.state.meal.strMeasure18} </p>
                <p>{this.state.meal.strIngredient19}  {this.state.meal.strMeasure19} </p>
                <p>{this.state.meal.strIngredient20}  {this.state.meal.strMeasure20} </p>
              </div>
              {/*  Rescipes heading */}
              <div className="resRec"><center>Recipes</center><br /></div>
              {/*  Recipies */}
              <div className="resRecDetails">{this.state.meal.strInstructions}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}