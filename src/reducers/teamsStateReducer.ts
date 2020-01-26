import TeamsState from '../interfaces/TeamsState';
import {AnyAction} from '../interfaces/Action';
import {
    GET_TEAMS,
    GET_TEAMS_ERROR,
    GET_TEAMS_SUCCESS,
    GET_SELECTED_TEAM,
    GET_SELECTED_TEAM_SUCCESS,
    GET_SELECTED_TEAM_ERROR
} from './constants';

export default function teamsStateReducer(state: TeamsState, action: AnyAction): TeamsState {
    switch (action.type) {
        case GET_TEAMS: {
            return {...state, loading: true};
        }
        case GET_TEAMS_SUCCESS: {
            return {...state, loading: false, teams: action.payload};
        }
        case GET_SELECTED_TEAM: {
            const selectedTeam = state.teams.find(t => t.team_id === action.payload);
            let name = selectedTeam?.name_display_full || '';
            return {...state, selectedTeamName: name, selectedTeamId: action.payload, loading: true};
        }
        case GET_SELECTED_TEAM_SUCCESS: {
            return {...state, selectedTeam: action.payload, loading: false};
        }
        case GET_SELECTED_TEAM_ERROR: {
            return state;
        }
        case GET_TEAMS_ERROR: {
            return state;
        }
        default: {
            return state;
        }
    }
}