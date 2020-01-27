import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TeamsContext, {initialState} from '../TeamsContext';
import TeamsMenu from './TeamsMenu';
import {GET_SELECTED_TEAM} from '../reducers/constants';
import axios from 'axios';
jest.mock('axios');

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
        axios.get.mockImplementationOnce(() => {
            return Promise.resolve({
                data: {
                    row: [
                        {name_display_first_last: 'willie mays', jersey_number: '24', position_txt: 'CF', height_feet: '5', height_inches: '11', weight: '190', player_id: '1'}
                    ]
                }
            })
        });
        const az = {"venue_name":"Chase Field","name_display_full":"Arizona Diamondbacks","league_full":"National League","league_id":"104","name_abbrev":"ARI","league":"NL","spring_league":"CL","base_url":"dbacks.mlb.com","address_line2":"","season":"2018","division_abbrev":"NLW","name_display_short":"Arizona","team_id":"109","division":"W","league_abbrev":"NL","name_display_long":"Arizona Diamondbacks","store_url":"arizona.diamondbacks.mlb.com","address_state":"AZ","division_full":"National League West", "division_id":"203"};
        const det = {"phone_number":"(313) 471-2000","venue_name":"Comerica Park","franchise_code":"DET","all_star_sw":"N","sport_code":"mlb","address_city":"Detroit","city":"Detroit","name_display_full":"Detroit Tigers","spring_league_abbrev":"GL","time_zone_alt":"America/New_York","sport_id":"1","venue_id":"2394","mlb_org_id":"116","time_zone_generic":"ET","mlb_org":"Detroit Tigers","last_year_of_play":"2020","league_full":"American League","league_id":"103","league":"AL","base_url":"tigers.mlb.com","mlb_org_brief":"Tigers","season":"2017","division_abbrev":"ALC","name_display_short":"Detroit","team_id":"116","mlb_org_abbrev":"DET","division":"C","team_code":"det","name":"Tigers","website_url":"tigers.com","league_abbrev":"AL","name_display_long":"Detroit Tigers","store_url":"detroit.tigers.mlb.com","name_short":"Detroit","division_full":"American League Central","name_display_brief":"Tigers"}
        const state = {...initialState, teams: [az, det]};
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