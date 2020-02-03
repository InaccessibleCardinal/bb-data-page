import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from './PlayerCard';
import TeamsContext, {initialState} from '../TeamsContext';
import {GET_SELECTED_PLAYER/*, GET_SELECTED_PLAYER_SUCCESS*/} from '../reducers/constants';
import axios from 'axios';

jest.mock('axios');

describe('PlayerCard function', () => {
    it('should render a player\'s information', () => {
        const player = {
            name_display_first_last: 'willie mays',
            jersey_number: '24',
            position_txt: 'CF',
            height_feet: '5',
            height_inches: '11',
            weight: '190',
            player_id: '12345'
        };
        const state = {...initialState, selectedTeam: [player]};
        const dispatch = jest.fn();
        const {queryByText} = render(
            <TeamsContext.Provider value={state}>
                <PlayerCard dispatch={dispatch} player={player} />
            </TeamsContext.Provider>
        );
        expect(queryByText(/name: willie mays/i)).toBeInTheDocument();
        expect(queryByText(/number: 24/i)).toBeInTheDocument();
        expect(queryByText(/position: CF/i)).toBeInTheDocument();
        axios.get.mockResolvedValue({data: {row: {avg: '.300', hr: '660', rbi: '1900', r: '1900', player_id: '12345'}}});
        fireEvent.click(queryByText(/get stats/i));
        expect(dispatch).toHaveBeenCalledWith({type: GET_SELECTED_PLAYER});
    });
});