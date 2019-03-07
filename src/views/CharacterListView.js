import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from "../actions"

// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchChars()
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
    
        return <h1>Loading</h1>
    }
    else{
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      )
    }
  }
}
const mapStateToProps = state => {
  return{
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  }
}


// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {fetchChars})(CharacterListView);
