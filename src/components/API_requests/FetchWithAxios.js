import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

class FetchWithAxios extends Component {
  // initialize the state at the top
  state = { posts: [], loading: true };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        console.log(posts);
        // this.setState updates the component's state
        // This triggers a re-render
        this.setState({ posts, loading: false });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { posts, loading } = this.state;
    return (
      <div className="m-5">
        {/* <button
          type="button"
          onClick={() => this.fetchData()}
          className="btn-warning rounded"
        >
          Get Posts About React
        </button> */}
        {loading ? (
          <Loading />
        ) : (
          posts.map(post => (
            <div key={post.id} className="text-left p-2">
              <b>Title:</b>{' '}
              <span className="text-primary ml-2">
                {post.title ? post.title : 'No title'}
              </span>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default FetchWithAxios;
