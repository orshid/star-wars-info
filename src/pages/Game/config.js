export const GAME_STATES = {
    START_GAME: 0,
    SELECT_CARDS: 1,
    SELECT_OPPONENT: 2,
    SELECT_GAME_MODE: 3,
    GAME_MODE_1: 4,
    GAME_MODE_2: 5,
    END_GAME: 6,
};

export const CHOOSEN_OPPONENT = {
    CHOOSEN_OPPONENT: '0'
};
export const PLAYER_DECK = {
    PLAYER_DECK: []
};
export const OPPONENT_FRACTION = {
    SITH: '0',
    JEDI: '1',
    BOUNTY_HUNTERS: '2',
};

export const OPPONENT_FRACTION_ARRAY = [
    {
        id: '0',
        name: 'SITH',
    },
    {
        id: '1',
        name: 'JEDI'
    },
    {
        id: '2',
        name: 'BOUNTY_HUNTERS'
    }
];

export const GAME_MODE_ARRAY = [
    {
        id: '1',
        name: "BATTLE"
    },
    {
        id: '2',
        name: "OTHER"
    }
];
export const GAME_MODE = {
    GAME_MODE_1: '1',
    GAME_MODE_2: '2'
};