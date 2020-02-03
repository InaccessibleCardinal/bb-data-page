import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerStats from './PlayerStats';
import TeamsContext, {initialState} from '../TeamsContext';
import {TOGGLE_SELECTED_PLAYER_SHOWING} from '../reducers/constants';

const selectedPlayer = {avg: '.300', hr: '660', rbi: '1900', r: '1900', player_id: '12345'};
const selectedTeam = [
    {
        name_display_first_last: 'willie mays',
        jersey_number: '24',
        position_txt: 'CF',
        height_feet: '5',
        height_inches: '11',
        weight: '190',
        player_id: '12345'
    }
];

describe('PlayerStats function', () => {
    it('should mount some stats', () => {
        const dispatch = jest.fn();
        const state = {...initialState, selectedPlayer, selectedTeam}
        const {queryByText, queryByTestId} = render(
            <TeamsContext.Provider value={state}>
                <PlayerStats dispatch={dispatch} />
            </TeamsContext.Provider>
        );
        expect(queryByText(/willie mays/i)).toBeInTheDocument();
        expect(queryByText(/HR: 660/i)).toBeInTheDocument();
        fireEvent.click(queryByTestId(/close_stats_button/i));
        expect(dispatch).toHaveBeenCalledWith({type: TOGGLE_SELECTED_PLAYER_SHOWING});
    });
});