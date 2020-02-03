import React, {ReactElement, useEffect, useReducer} from 'react';
import TeamsContext, {initialState} from './TeamsContext';
import teamsStateReducer from './reducers/teamsStateReducer';
import {getTeams} from './async/';
import TeamsMenu from './components/TeamsMenu';
import TeamRoster from './components/TeamRoster';
import PlayerStats from './components/PlayerStats';
import {GET_TEAMS, GET_TEAMS_SUCCESS, GET_TEAMS_ERROR} from './reducers/constants';


export default function App() : ReactElement {

    const [teamsState, dispatch] = useReducer(teamsStateReducer, initialState);
    const {selectedPlayerShowing} = teamsState;

    useEffect(() => {
        dispatch({type: GET_TEAMS});
        getTeams().then((r) => {
            dispatch({type: GET_TEAMS_SUCCESS, payload: r.data.row});
        }).catch(e => {
            dispatch({type: GET_TEAMS_ERROR});
        });   
    }, []);
 
    return (
        <div>
            <TeamsContext.Provider value={teamsState}>
                {teamsState.loading && <Loader />}
                <h1>MLB Data Page</h1>
                <TeamsMenu dispatch={dispatch} />
                <TeamRoster dispatch={dispatch} />
                {selectedPlayerShowing && <PlayerStats dispatch={dispatch} />}
            </TeamsContext.Provider>
        </div>
    );
}

function Loader():ReactElement {
    return <div><p>Loading...</p></div>;
}