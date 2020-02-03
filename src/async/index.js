import axios from 'axios';
const TEAMS_URL = 'http://localhost:3000/teams';
const PLAYERS_URL = 'http://localhost:3000/players'
export async function getTeams() {
    try {
        return await axios.get(TEAMS_URL); 
    } catch (e) {
        return e;
    }
}

export async function getTeamRoster(id) {
    try {
        return await axios.get(`${TEAMS_URL}/${id}/roster`); 
    } catch (e) {
        return e;
    }
}

export async function getPlayerStats(id) {
    try {
        return await axios.get(`${PLAYERS_URL}/${id}/batting`);
    } catch (e) {
        return e;
    }
}