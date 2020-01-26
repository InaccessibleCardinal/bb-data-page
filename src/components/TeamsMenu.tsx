import React, {ReactElement, Fragment, useContext} from 'react';
import TeamsContext from '../TeamsContext';
import Team from '../interfaces/Team';
import LeagueList from './LeagueList';

type TeamMenuProps = {
    dispatch: any;
};

export default function TeamsMenu(props: TeamMenuProps): ReactElement {
    const {dispatch} = props;
    const ctx = useContext(TeamsContext);
    return (
        <div>
            <ul>
                {splitTeamNamesItems(ctx.teams, dispatch)}
            </ul>
        </div>
    );
}

function splitTeamNamesItems(teams: Array<Team>, dispatch: any): ReactElement {
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
            <LeagueList league='National League' teams={nl} dispatch={dispatch} />
            <LeagueList league='American League' teams={al} dispatch={dispatch} />
        </Fragment>
    );
}
