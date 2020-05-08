import React, { Component } from 'react'
import { getSong } from './api-calls.js';

export default class DetailPage extends Component {
    state = { song: null }
    componentDidMount = async () => {
        const fetchedData = await getSong(this.props.match.params.id)


        this.setState({ song: fetchedData })
    }
    render() {
        return (
            <div>
                detail
                <div>
                    { 
                    this.state.song 
                    ? JSON.stringify(this.state.song)
                    : 'LOADING LOADING LOADING LOADING'}
                </div>
            </div>
        )

    }
}
