import React from "react";


export default class Quotable extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.getNewQuote();
  }

  getNewQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(resp => resp.json())
    .then((data) => {
      this.setState({ data })
    })
  }

  render() {
    const { data } = this.state;
    if (!data) return null;
    return (
      <div className="quote-app">
            <blockquote className="blockquote">
              <p>{data.content}</p>
              {data.author && (
                <footer className="blockquote-footer">
                  <cite title="Source Title">{data.author}</cite>
                </footer>
              )}
            </blockquote>
      </div>
    );
  }
}





  // getNewQuote = async () => {
  //   try {
  //     const response = await fetch("https://api.quotable.io/random");
  //     const data = await response.json();
  //     if (!response.ok) throw new Error(data);
  //     this.setState({ data });
  //   } catch (error) {
  //     // If the API request failed, log the error to console and update state
  //     // so that the error will be reflected in the UI.
  //     console.error(error);
  //     this.setState({ data: { content: "Opps... Something went wrong" } });
  //   }
  // };