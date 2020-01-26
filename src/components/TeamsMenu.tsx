import React, {ReactElement, Fragment, useContext, Dispatch} from 'react';
import TeamsContext from '../TeamsContext';
import Team from '../interfaces/Team';
import LeagueList from './LeagueList';
import {AnyAction} from '../interfaces/Action';

type TeamMenuProps = {
    dispatch: Dispatch<AnyAction>;
};

export default function TeamsMenu(props: TeamMenuProps): ReactElement {
    const {dispatch} = props;
    const {teams} = useContext(TeamsContext);
    return (
        <div>
            <ul>
                {splitTeamNamesItems(teams, dispatch)}
            </ul>
        </div>
    );
}

function splitTeamNamesItems(teams: Array<Team>, dispatch: Dispatch<AnyAction>): ReactElement {
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
