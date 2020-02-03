import TeamsState from '../interfaces/TeamsState';
import {AnyAction} from '../interfaces/Action';
import {
    GET_TEAMS,
    GET_TEAMS_ERROR,
    GET_TEAMS_SUCCESS,
    GET_SELECTED_TEAM,
    GET_SELECTED_TEAM_SUCCESS,
    GET_SELECTED_TEAM_ERROR,
    GET_SELECTED_PLAYER,
    GET_SELECTED_PLAYER_SUCCESS,
    GET_SELECTED_PLAYER_ERROR,
    TOGGLE_SELECTED_PLAYER_SHOWING
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
        case GET_SELECTED_PLAYER: {
            return {...state, loading: true};
        }
        case GET_SELECTED_PLAYER_SUCCESS: {
            return {...state, selectedPlayer: action.payload, loading: false, selectedPlayerShowing: true};
        }
        case GET_SELECTED_PLAYER_ERROR: {
            return state;
        }
        case TOGGLE_SELECTED_PLAYER_SHOWING: {
            return {...state, selectedPlayerShowing: !state.selectedPlayerShowing};
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