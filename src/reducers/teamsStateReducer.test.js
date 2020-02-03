import teamsStateReducer from './teamsStateReducer';
import * as C from './constants';

describe('teamsStateReducer function', () => {
    const state = {
        loading: false, 
        teams: [], 
        selectedTeam: [],
        selectedTeamName: '',
        selectedTeamId: '',
        selectedPlayer: null,
        selectedPlayerShowing: false,
        error: null
    };
    it('should retunr initial state', () => {
        
        const action = {type: '@INIT'};
        expect(teamsStateReducer(state, action)).toEqual(state);
    });

    it('should return selected team id state', () => {
        const getSelectTeamState = {
            ...state,
            teams: [{team_id: '1', name_display_full: 'LA Dodgers'}]
        };
        const action = {type: C.GET_SELECTED_TEAM, payload: '1'};
        expect(teamsStateReducer(getSelectTeamState, action)).toEqual({
            loading: true, 
            teams: [{team_id: '1', name_display_full: 'LA Dodgers'}], 
            selectedTeam: [],
            selectedTeamName: 'LA Dodgers',
            selectedTeamId: '1',
            selectedPlayer: null,
            selectedPlayerShowing: false,
            error: null
        });
    });

    it('should return selected team state', () => {
        const getSelectTeamState = {
            ...state,
            selectedTeamName: 'LA Dodgers',
            selectedTeamId: '1',
            teams: [{team_id: '1', name_display_full: 'LA Dodgers'}]
        };
        const action = {type: C.GET_SELECTED_TEAM_SUCCESS, payload: [{}]};
        expect(teamsStateReducer(getSelectTeamState, action)).toEqual({
            loading: false, 
            teams: [{team_id: '1', name_display_full: 'LA Dodgers'}], 
            selectedTeam: [{}],
            selectedTeamName: 'LA Dodgers',
            selectedTeamId: '1',
            selectedPlayer: null,
            selectedPlayerShowing: false,
            error: null
        });
    });

    it('should set loading true', () => {
        expect(teamsStateReducer(state, {type: C.GET_TEAMS}).loading).toBe(true);
    });

    it('should save teams to state', () => {
        const getTeamsState = {...state, loading: true};
        expect(teamsStateReducer(
                getTeamsState, 
                {type: C.GET_TEAMS_SUCCESS, payload: [{team_id: '1', name_display_full: 'LA Dodgers'}]}
            )
        ).toEqual({
            loading: false, 
            teams: [{team_id: '1', name_display_full: 'LA Dodgers'}], 
            selectedTeam: [],
            selectedTeamName: '',
            selectedTeamId: '',
            selectedPlayer: null,
            selectedPlayerShowing: false,
            error: null
        });
    });

    it ('should set loading to true when getting stats', () => {
        const getStatsState = {...state, loading: false};
        expect(teamsStateReducer(
                getStatsState,
                {type: C.GET_SELECTED_PLAYER}
            )
        ).toEqual({
            loading: true, 
            teams: [], 
            selectedTeam: [],
            selectedTeamName: '',
            selectedTeamId: '',
            selectedPlayer: null,
            selectedPlayerShowing: false,
            error: null
        });
    });

    it ('should set player stats state on success', () => {
        const getStatsState = {...state, loading: true};
        expect(teamsStateReducer(
                getStatsState,
                {type: C.GET_SELECTED_PLAYER_SUCCESS, payload: {hr: '660', rbi: '1500', player_id: '12345'}}
            )
        ).toEqual({
            loading: false, 
            teams: [], 
            selectedTeam: [],
            selectedTeamName: '',
            selectedTeamId: '',
            selectedPlayer: {hr: '660', rbi: '1500', player_id: '12345'},
            selectedPlayerShowing: true,
            error: null
        });
    });

});
