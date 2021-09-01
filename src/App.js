import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import axios from "axios";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];
const initialState = { hideBtn: false };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

  methodUpdate() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }

  methodReturnsValue(number) {
    return number + 1;
  }
  fetch() {
    this.props.fetchPostsFn();
    this.methodUpdate();
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
          {!hideBtn && <SharedButton {...configButton} />}
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                  key: index,
                };
                return <ListItem {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostsFn: () => dispatch(fetchPosts()),
});

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
