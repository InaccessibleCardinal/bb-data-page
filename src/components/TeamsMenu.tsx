import React, {ReactElement, Fragment} from 'react';
import Team from '../interfaces/Team';

type TeamMenuProps = {
    teams: Array<Team>
};

type LeagueListProps = {
    league: string, 
    teams: Array<Team>
};

function splitTeamNamesItems(teams: Array<Team>): ReactElement {
    const nl: Team[] = [];
    const al: Team[] = [];
    teams.forEach((team) => {
        if (team.league === 'NL') {
            nl.push(team);
        } else {
            al.push(team);
        }
    });
    return (
        <Fragment>
            <LeagueList league='National League' teams={nl} />
            <LeagueList league='American League' teams={al} />
        </Fragment>
    );
}

function LeagueList(props: LeagueListProps): ReactElement {
    const {league, teams} = props;
    const items: ReactElement[] = teams.map((t: Team, i: number) => {
        const {name_display_full, team_id} = t;
        return <li key={team_id}>{name_display_full}</li>
    });
    return (
        <ul>
            <li>{league}</li>
            <ul>{items}</ul>
        </ul>
    );
}

export default function TeamsMenu(props: TeamMenuProps): ReactElement {
    console.log('props: ', props);
    const {teams} = props;
    return (
        <div>
            <ul>
                {splitTeamNamesItems(teams)}
            </ul>
        </div>
    );
}