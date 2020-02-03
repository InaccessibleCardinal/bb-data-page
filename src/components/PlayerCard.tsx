import React, {ReactElement, Dispatch, useCallback} from 'react';
import {AnyAction} from '../interfaces/Action';
import RosterPlayer from '../interfaces/RosterPlayer';
import {getPlayerStats} from '../async/index';
import {GET_SELECTED_PLAYER, GET_SELECTED_PLAYER_SUCCESS, GET_SELECTED_PLAYER_ERROR} from '../reducers/constants';

import StatsPlayer from '../interfaces/StatsPlayer';

export interface PlayerCardProps {
    player: RosterPlayer;
    dispatch: Dispatch<AnyAction>;
};
export interface PlayerCardStatsProps extends PlayerCardProps {
    stats: StatsPlayer;
};

const playerStyle = {
    borderTop: '1px solid'
};

export default function PlayerCard(props: PlayerCardProps): ReactElement {
    
    const {player, dispatch} = props;
    const {name_display_first_last, jersey_number, position_txt, height_feet, height_inches, weight, player_id} = player;

    const getStatsHandler = useCallback(() => {
        dispatch({type: GET_SELECTED_PLAYER});
        getPlayerStats(player_id).then(r => {
            dispatch({type: GET_SELECTED_PLAYER_SUCCESS, payload: r.data.row});
        }).catch(e => {
            dispatch({type: GET_SELECTED_PLAYER_ERROR});
        })
    }, [dispatch, player_id]);

    return (
        <div className="player-list-item" style={playerStyle}>
            <p>Name: {name_display_first_last}</p>
            <p>Number: {jersey_number}</p>
            <p>Position: {position_txt}</p>
            <p>Height: {height_feet}'-{height_inches}"</p>
            <p>Weight: {weight}</p>
            <button type="button" onClick={getStatsHandler}>Get Stats</button>
        </div>
    );
}
