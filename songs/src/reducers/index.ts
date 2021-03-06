// Reducers
import { combineReducers } from 'redux';
import { SongAction } from '../interfaces';

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Stars', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' }
    ]
};

const selectedSongReducer = (selectedSong = null, action:SongAction) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;

};

export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongReducer
});