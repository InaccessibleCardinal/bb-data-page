import React, {ReactElement} from 'react';
import Team from '../interfaces/Team';

type TeamMenuProps = {
    teams: Array<Team>
};

function getTeamNamesItems(teams: Array<Team>): Array<ReactElement> {
    return teams.map((t: Team, i: number) => {
        const name: string = t.name_display_full;
        return <li key={i}>{name}</li>
    });
}

export default function TeamsMenu(props: TeamMenuProps): ReactElement {
    console.log('props: ', props);
    const {teams} = props;
    return (
        <div>
            <ul>
                {getTeamNamesItems(teams)}
            </ul>
        </div>
    );
}