import axios from 'axios';
import {getTeams, getTeamRoster} from './index';

jest.mock('axios');

describe('getTeams function', () => {
    it ('fetches data', () => {
        const data = {rows: []};
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        return getTeams().then(d => {
            expect(d).toEqual(data);
        });
    });

    it ('returns an error', () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error('401')));
        return getTeams().catch(e => {
            expect(e).toEqual('401');
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

    it ('returns an error', () => {
        axios.get.mockImplementationOnce(() => Promise.reject(new Error('403')));
        return getTeamRoster('109').catch(e => {
            expect(e).toEqual('403');
        });
    });
});