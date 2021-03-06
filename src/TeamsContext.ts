import {createContext} from 'react';
import TeamsState from './interfaces/TeamsState';


export const initialState: TeamsState = {
    loading: false, 
    teams: [], 
    selectedTeam: [],
    selectedTeamName: '',
    selectedTeamId: '',
    selectedPlayer: null,
    selectedPlayerShowing: false,
    error: null
};

const TeamContext = createContext(initialState);

export default TeamContext;
