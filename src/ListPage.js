import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent';

export default class App extends Component {
  state = { songs: [] }

  componentDidMount = async () => {
    const data = await request.get('http://localhost:3003/songs');
    console.log('=============================\n')
    console.log('|| data', data)
    console.log('\n=============================')

    this.setState({ songs: data.body })
  }

  render() {
    return (
      <div>
        My list:
        {
          this.state.songs.map(song => {
            return <div style={{ margin: '10px', border: 'solid 1px black'}} key={song.id}>
            <Link to={`/song/${song.id}`}>

              <p>{song.name}</p>
              <p>{song.length}</p>
              <p>{song.is_single 
                ? 'it is a single' 
                : 'is is not a single'}
              </p>

            </Link>
            </div>
          })
        }
      </div>
    )
  }
}
