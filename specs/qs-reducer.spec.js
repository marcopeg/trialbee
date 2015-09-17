import { qsReducer, initialState } from 'reducers/qs-reducer';
import { setActiveQs } from 'actions/qs-actions';

var emptyAction = { type: null }
describe.only('qd reducer', function() {

    it('should work', function() {
        var state = qsReducer(undefined, emptyAction);
        expect(state).to.deep.equal(initialState);
    });

    it('should set active question', function(){
      var action = setActiveQs(2);
      var state = qsReducer(undefined, action);
      expect(state.activeQs).to.equal(2);
    });

});
