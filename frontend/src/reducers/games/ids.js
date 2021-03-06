import * as actionTypes from '../../actions/types';

const ids = (state= [], action) => {
    switch (action.type) {
        case actionTypes.GET_GAME_SUCCESS:
            return action.data.quizzes.map((quiz) => {
                return quiz._id;
            });
        case actionTypes.GET_GAME_FAILURE:
        case actionTypes.GET_GAMES_REQUEST:
            return [];
        default:
            return state;
    }
};

export default ids;

export const getGameIds = (state) => {
    return state;
};