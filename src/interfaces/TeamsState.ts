import Team from './Team';
import RosterPlayer from './RosterPlayer';
import StatsPlayer from './StatsPlayer';

export default interface TeamsState {
    loading: boolean;
    teams: Array<Team>;
    selectedTeam: Array<RosterPlayer>;
    selectedTeamName: string;
    selectedTeamId: string;
    error: null | string;
    selectedPlayer: null | StatsPlayer;
    selectedPlayerShowing: boolean;
};