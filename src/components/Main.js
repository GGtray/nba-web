import React, {Component} from 'react';
import nba from 'nba';
import {Profile} from "./Profile";

class Main extends Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {},
    }

    componentDidMount() {
        console.log('nba.stats --', nba.stats);
        // something

        nba.stats.playerInfo({ PlayerID: this.state.playerId })
            .then((info) => {
                console.log(info);
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log('playerInfo', playerInfo);
                this.setState({ playerInfo });
                console.log(1)
                console.log(2)
            })
            .catch((e) => console.log(e))

    }

    render() {
        console.log('player --', this.state.playerInfo);
        return (
            <div className="main">
                <Profile playerInfo = {this.state.playerInfo}/>
                this is player
            </div>
        );
    }
}

export default Main;