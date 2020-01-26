import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TeamsContext, {initialState} from '../TeamsContext';
import TeamsMenu from './TeamsMenu';
import {GET_SELECTED_TEAM} from '../reducers/constants';

describe('TeamsMenu function', () => {
    it('should render', () => {
        const {queryByText} = render(
            <TeamsContext.Provider value={initialState}>
                <TeamsMenu />
            </TeamsContext.Provider>
        );
        expect(queryByText(/American League/i)).toBeInTheDocument();
        expect(queryByText(/National League/i)).toBeInTheDocument();
    });

    it ('should render a team button, envoke dispatch with an appropriate action when clicked', () => {
        const team = {"venue_name":"Chase Field","name_display_full":"Arizona Diamondbacks","league_full":"National League","league_id":"104","name_abbrev":"ARI","league":"NL","spring_league":"CL","base_url":"dbacks.mlb.com","address_line2":"","season":"2018","division_abbrev":"NLW","name_display_short":"Arizona","team_id":"109","division":"W","league_abbrev":"NL","name_display_long":"Arizona Diamondbacks","store_url":"arizona.diamondbacks.mlb.com","address_state":"AZ","division_full":"National League West", "division_id":"203"};
        const state = {...initialState, teams: [team]};
        const dispatch = jest.fn();
        const {queryByText} = render(
            <TeamsContext.Provider value={state}>
                <TeamsMenu dispatch={dispatch} />
            </TeamsContext.Provider>
        );
        expect(queryByText(/Arizona Diamondbacks/i)).toBeInTheDocument();
        fireEvent.click(queryByText(/Arizona Diamondbacks/i));
        expect(dispatch).toHaveBeenCalledWith({type: GET_SELECTED_TEAM, payload: '109'});
    });
});