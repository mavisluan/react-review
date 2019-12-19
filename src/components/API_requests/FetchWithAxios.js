import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

class FetchWithAxios extends Component {
  // initialize the state at the top
  state = { posts: [], loading: true };

  // is executed after the component mounts for the first time
  // is only executed once during the component's life time
  componentDidMount() {
    console.log('[componentDidMount]');
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        console.log('fetched data', posts);
        // this.setState updates the component's state
        // This triggers a re-render
        this.setState({ posts, loading: false });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    console.log('[render]');

    const { posts, loading } = this.state;
    // console.log(`State Posts: ${posts}`);
    return (
      <div className="m-5">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.setState({ posts: [] })}
        >
          Clear Posts
        </button>
        <button
          type="button"
          onClick={() => this.fetchData()}
          className="btn btn-warning rounded"
        >
          Get Posts About React
        </button>
        {loading ? (
          <Loading />
        ) : (
          posts.map(post => (
            <div key={post.id} className="text-left p-2">
              <b>Title:</b>
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
