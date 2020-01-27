import teamsStateReducer from './teamsStateReducer';
import * as C from './constants';

describe('teamsStateReducer function', () => {
    const state = {
        loading: false, 
        teams: [], 
        selectedTeam: [],
        selectedTeamName: '',
        selectedTeamId: '',
        error: null
    };
    it('should retunr initial state', () => {
        
        const action = {type: '@INIT'};
        expect(teamsStateReducer(state, action)).toEqual(state);
    });

    it('should return selected team state', () => {
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
            error: null
        });
    });

});
