import axios from 'axios';
import {getTeams, getTeamRoster} from './index';

jest.mock('axios');

describe('getTeams function', () => {
    it ('fetches data', () => {
        const data = {rows: []};
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        return getTeams().then(d => {
            console.log('data: ', d)
            expect(d).toEqual(data);
        });
    });
    
});

describe('getTeamRoster function', () => {
    it ('fetches data', () => {
        const data = {rows: []};
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        return getTeamRoster('109').then(d => {
            expect(d).toEqual(data);
        });
    });
});