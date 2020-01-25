const axios = require('axios');

const teamListUrl = `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2019'`;
function teamUrl(id) {
    return `http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='${id}'`;
}
function playerDetailsUrl(id) {
    return `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${id}'`
}

async function teamListHandler(req, res) {
    try {
        const teams = await axios.get(teamListUrl).then(r => r.data.team_all_season.queryResults);
        return res.status(200).json(teams);
    } catch (e) {
        console.log('e: ', e)
        return res.status(500).json({message: 'error fetching teams'});
    }
}

async function teamDetailsHandler(req, res) {
    const {id} = req.params;
    try {
        const roster40 = await axios.get(teamUrl(id)).then(r => r.data.roster_40.queryResults);
        return res.status(200).json(roster40);
    } catch (e) {
        console.log('e: ', e)
        return res.status(500).json({message: 'error fetching 40 man roster'});
    }
}

async function playerDetailsHandler(req, res) {
    const {id} = req.params;
    try {
        const roster40 = await axios.get(playerDetailsUrl(id)).then(r => r.data.player_info.queryResults);
        return res.status(200).json(roster40);
    } catch (e) {
        console.log('e: ', e)
        return res.status(500).json({message: 'error fetching player'});
    }
}

module.exports = {teamListHandler, teamDetailsHandler, playerDetailsHandler};