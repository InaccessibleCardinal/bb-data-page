import React, {Dispatch, useCallback, useContext, ReactElement} from 'react';
import RosterPlayer from '../interfaces/RosterPlayer';
import {AnyAction} from '../interfaces/Action';
import {TOGGLE_SELECTED_PLAYER_SHOWING} from '../reducers/constants';
import TeamsContext from '../TeamsContext';

type PlayerStatsProps = {
    dispatch: Dispatch<AnyAction>;
};

export default function PlayerStats(props: PlayerStatsProps): ReactElement {
    const {selectedPlayer, selectedTeam} = useContext(TeamsContext);
    const {dispatch} = props;
    const hidePlayerStats = useCallback(() => {
        dispatch({type: TOGGLE_SELECTED_PLAYER_SHOWING});
    }, [dispatch]);

    if (selectedPlayer && selectedTeam) {
        let selectedRosterPlayer = selectedTeam.find((p: RosterPlayer) => p.player_id === selectedPlayer.player_id);
        let name = selectedRosterPlayer ? selectedRosterPlayer.name_display_first_last : '';
        let {avg, hr, rbi, r, player_id} = selectedPlayer;
        
        return (
            <div className="player-stats-modal active">
                <div className="player-stats-content">
                    <button data-testid="close_stats_button" onClick={hidePlayerStats}>CLOSE</button>
                    <p>{name}</p>
                    <img alt={`Headshot of ${name}`} src={`https://securea.mlb.com/mlb/images/players/head_shot/${player_id}@2x.jpg`} width="100" />
                    <p>Avg: {avg}</p>
                    <p>HR: {hr}</p>
                    <p>RBI: {rbi}</p>
                    <p>Runs: {r}</p>
                </div>
            </div>
        );
    } 
    return <div className="player-stats-modal"></div>;
}