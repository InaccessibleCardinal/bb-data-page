import axios from 'axios';
const TEAMS_URL = 'http://localhost:3000/teams';

export async function getTeams() {
    try {
        return await axios.get(TEAMS_URL).then(r => r.data); 
    } catch (e) {
        return e;
    }
}

export async function getTeamRoster(id) {
    try {
        return await axios.get(`${TEAMS_URL}/${id}/roster`).then(r => r.data); 
    } catch (e) {
        return e;
    }
}