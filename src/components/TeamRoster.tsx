import React, {Dispatch, ReactElement, useContext} from 'react';
import RosterPlayer from '../interfaces/RosterPlayer';
import {AnyAction} from '../interfaces/Action';
import TeamsContext from '../TeamsContext';
import PlayerCard from './PlayerCard';

type TeamRosterProps = {
    dispatch: Dispatch<AnyAction>
}

export default function TeamRoster(props: TeamRosterProps): ReactElement {
    const {selectedTeam, selectedTeamName} = useContext(TeamsContext);
    if (selectedTeam.length > 0) {
        const rosterMarkup = selectedTeam.map((p: RosterPlayer) => {
            return (
                <PlayerCard dispatch={props.dispatch} key={p.player_id} player={p} />
            );
        }) ;
        return (
            <div>
                <h2>{selectedTeamName}</h2>
                {rosterMarkup}
            </div>
        );
    }
    return (
        <div>
            <p>Select a Team</p>
        </div>
    );
}
