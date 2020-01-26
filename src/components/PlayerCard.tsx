import React, {ReactElement} from 'react';
import RosterPlayer from '../interfaces/RosterPlayer';

type PlayerCardProps = {
    player: RosterPlayer;
};
const playerStyle = {
    borderTop: '1px solid'
};

export default function PlayerCard(props: PlayerCardProps): ReactElement {
    const {name_display_first_last, jersey_number, position_txt, height_feet, height_inches, weight, } = props.player;
    return (
        <div style={playerStyle}>
            <p>Name: {name_display_first_last}</p>
            <p>Number: {jersey_number}</p>
            <p>Position: {position_txt}</p>
            <p>Height: {height_feet}'-{height_inches}"</p>
            <p>Weight: {weight}</p>
        </div>
    );
}