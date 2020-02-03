import {Request, Response} from 'express';
import axios from 'axios';
const SVC_URL = 'http://lookup-service-prod.mlb.com/json';

const teamListUrl = `${SVC_URL}/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2019'`;
function teamUrl(id: string): string {
    return `${SVC_URL}/named.roster_40.bam?team_id='${id}'`;
}
function playerDetailsUrl(id: string): string {
    return `${SVC_URL}/named.player_info.bam?sport_code='mlb'&player_id='${id}'`;
}
function playerBattingStatsUrl(id: string): string {
    return `${SVC_URL}/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='${id}'`;
}

export async function teamListHandler(req: Request, res: Response): Promise<Response> {
    try {
        const teams = await axios.get(teamListUrl).then(r => r.data.team_all_season.queryResults);
        return res.status(200).json(teams);
    } catch (e) {
        console.log('e: ', e)
        return res.status(500).json({message: 'error fetching teams'});
    }
}

export async function teamDetailsHandler(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    try {
        const roster40 = await axios.get(teamUrl(id)).then(r => r.data.roster_40.queryResults);
        return res.status(200).json(roster40);
    } catch (e) {
        console.log('e: ', e)
        return res.status(500).json({message: 'error fetching 40 man roster'});
    }
}

export async function playerDetailsHandler(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    try {
        const roster40 = await axios.get(playerDetailsUrl(id)).then(r => r.data.player_info.queryResults);
        return res.status(200).json(roster40);
    } catch (e) {
        console.log('e: ', e)
        return res.status(500).json({message: 'error fetching player'});
    }
}

export async function playerBattingStatsHandler(req: Request, res: Response) {
    //http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id='493316'
    const {id} = req.params;
    try {
        const stats = await axios.get(playerBattingStatsUrl(id)).then(r => r.data.sport_career_hitting.queryResults);
        return res.status(200).json(stats);

    } catch (e) {
        console.log('e: ', e)
        return res.status(500).json({message: 'error fetching player stats'});
    }
}
