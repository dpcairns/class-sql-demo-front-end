import React, { Component } from 'react'
import request from 'superagent';

export default class App extends Component {
  state = { songs: [] }

  componentDidMount = async () => {
    const data = await request.get('https://mysterious-lowlands-33204.herokuapp.com/songs');

    this.setState({ songs: data.body })
  }

  render() {
    return (
      <div>
        My list:
        {
          this.state.songs.map(song => {
            return <div>
              <p>{song.name}</p>
              <p>{song.length}</p>
              <p>{song.is_single 
                ? 'it is a single' 
                : 'is is not a single'}
              </p>
            </div>
          })
        }
      </div>
    )
  }
}
