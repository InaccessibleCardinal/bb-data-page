import React, {useCallback, ReactElement} from 'react';
import Team from '../interfaces/Team';
import {getTeamRoster} from '../async/index';
import { GET_SELECTED_TEAM, GET_SELECTED_TEAM_SUCCESS, GET_SELECTED_TEAM_ERROR } from '../reducers/constants';

type LeagueListProps = {
    dispatch: any;
    league: string, 
    teams: Array<Team>
};

export default function LeagueList(props: LeagueListProps): ReactElement {
    const {dispatch, league, teams} = props;
    const getSelectedTeam = useCallback((e: any) => {
        dispatch({type: GET_SELECTED_TEAM, payload: e.target.id});
        getTeamRoster(e.target.id).then(data => {
            dispatch({type: GET_SELECTED_TEAM_SUCCESS, payload: data.row});
        })
        .catch(e => {
            dispatch({type: GET_SELECTED_TEAM_ERROR, payload: 'error fetching 40 man roster'});
        });
        
    }, [dispatch]);

    const items: ReactElement[] = teams.map((t: Team) => {
        const {name_display_full, team_id} = t;
        return (
            <li className="menu-item" key={team_id}>
                <button className="menu-button" id={team_id} type="button" onClick={getSelectedTeam}>
                    {name_display_full}
                </button>
            </li>
        );
    });
    return (
        <ul className="menu">
            <li>{league}</li>
            <ul>{items}</ul>
        </ul>
    );
}