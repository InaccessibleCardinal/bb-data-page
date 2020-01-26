import Team from './Team';
import RosterPlayer from './RosterPlayer';

export default interface TeamsState {
    loading: boolean;
    teams: Array<Team>;
    selectedTeam: Array<RosterPlayer>;
    selectedTeamName: string;
    selectedTeamId: string;
    error: null | string;
};