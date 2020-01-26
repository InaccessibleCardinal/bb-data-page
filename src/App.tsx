import React, {ReactElement, useEffect, useState} from 'react';
import {getTeams/*, getTeamRoster*/} from './async/';
// import Team from './interfaces/Team';
import TeamsMenu from './components/TeamsMenu';

export default function App() : ReactElement {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        
        
        getTeams().then((data) => {
            setTeams(data.row);
            // data.row.forEach((team: Team) => {
            //     getTeamRoster(team.team_id)
            //     .then((data) => {
            //         console.log(JSON.stringify(data, null, 4))
            //     }).catch(e => {
            //         console.log(e);
            //     });
            // });
        });   

    }, []);
    const teamsMenuProps = {teams};
    return (
        <div>
            <h1>testing...</h1>
            <TeamsMenu {...teamsMenuProps} />
        </div>
    );
}
