import React, {useCallback, useContext, ReactElement, Dispatch, MouseEvent} from 'react';
import TeamsContext from '../TeamsContext';
import Team from '../interfaces/Team';
import {getTeamRoster} from '../async/index';
import { GET_SELECTED_TEAM, GET_SELECTED_TEAM_SUCCESS, GET_SELECTED_TEAM_ERROR } from '../reducers/constants';
import {AnyAction} from '../interfaces/Action';

type LeagueListProps = {
    dispatch: Dispatch<AnyAction>;
    league: string; 
    teams: Array<Team>;
    
};

export default function LeagueList(props: LeagueListProps): ReactElement {
    const {selectedTeamId} = useContext(TeamsContext);
    const {dispatch, league, teams} = props;
    const getSelectedTeam = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLButtonElement;
        if (target.id !== selectedTeamId) {
            dispatch({type: GET_SELECTED_TEAM, payload: target.id});
            getTeamRoster(target.id)
                .then(r => {
                    dispatch({type: GET_SELECTED_TEAM_SUCCESS, payload: r.data.row});
                })
                .catch(e => {
                    dispatch({type: GET_SELECTED_TEAM_ERROR, payload: 'error fetching 40 man roster'});
                });
        }
    }, [dispatch, selectedTeamId]);

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