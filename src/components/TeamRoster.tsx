import React, {ReactElement, useContext} from 'react';
import RosterPlayer from '../interfaces/RosterPlayer';
import TeamsContext from '../TeamsContext';
import PlayerCard from './PlayerCard';

export default function TeamRoster(): ReactElement {
    const {selectedTeam, selectedTeamName} = useContext(TeamsContext);
    if (selectedTeam.length > 0) {
        const rosterMarkup = selectedTeam.map((p: RosterPlayer) => {
            return (
                <PlayerCard key={p.player_id} player={p} />
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