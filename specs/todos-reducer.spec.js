
import { defaultValue, todosReducer } from 'reducers/todos-reducer';

var emptyAction = {
    type: null
};

describe('todos reducer', function() {

    it('should work', function() {
        expect(todosReducer(undefined, emptyAction)).to.deep.equal(defaultValue);
    });

});
