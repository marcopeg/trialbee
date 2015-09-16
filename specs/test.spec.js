
import { todosReducer, defaultValue } from 'reducers/todos-reducer';

var emptyAction = {
    type: null
};

describe('Todos Reducer', function() {

    it('should initialize', function() {
        var state = todosReducer(undefined, emptyAction);
        expect(state).to.deep.equal(defaultValue);
    });

});

describe('setSelectedItems', function() {

    it('should new id as selected', function() {
        let selectedIds = ['1', '2', '3'];
        setSelectedItems(selectedIds, '4', true);
    });

});
