import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TeamRoster from './TeamRoster';
import TeamsContext, {initialState} from '../TeamsContext';

describe('PlayerCard function', () => {
    it('should render a player\'s information', () => {
        const teamRoster = [
            {
                name_display_first_last: 'willie mays',
                jersey_number: '24',
                position_txt: 'CF',
                height_feet: '5',
                height_inches: '11',
                weight: '190',
                player_id: '1'
            }
        ];
        const state = {...initialState, selectedTeam: teamRoster};
        const {queryByText} = render(<TeamsContext.Provider value={state}><TeamRoster/></TeamsContext.Provider>);
        expect(queryByText(/name: willie mays/i)).toBeInTheDocument();
        expect(queryByText(/number: 24/i)).toBeInTheDocument();
        expect(queryByText(/position: CF/i)).toBeInTheDocument();
    });
});