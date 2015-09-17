import { setActiveQs } from 'actions/qs-actions';
import { startQs, nextQs, resetQs } from 'services/qs-services';

describe('qs-services', function() {
  var stateBefore = {
    qs: {
      qs: [],
      activeQs: -1
    }
  };

  var stateDuring = {
    qs: {
      qs: [{}, {}, {}],
      activeQs: 1
    }
  };

  var stateAfter = {
    qs: {
      qs: [{}, {}, {}],
      activeQs: 3
    }
  };

  var dispatch, getState;

  beforeEach(function() {
    dispatch = sinon.spy();
    getState = sinon.spy();
  });

  describe('startQs', function() {
    var startQsResult;

    beforeEach(function() {
      startQsResult = startQs();
    });

    it('it should dispatch the an action', function() {
      startQsResult(dispatch, $=> stateBefore);
      expect(dispatch.calledOnce).to.be.true;
    });

    it('it should dispatch the setActiveQs action', function() {
      var expectedAction = setActiveQs(0);
      dispatch = dispatch.withArgs(expectedAction);

      startQsResult(dispatch, $=> stateBefore);
      expect(dispatch.calledOnce).to.be.true;
    });

    it('it should *not* dispatch the setActiveQs action if the questionnaire is active', function() {
      var expectedAction = setActiveQs(0);
      dispatch = dispatch.withArgs(expectedAction);

      startQsResult(dispatch, $=> stateDuring);
      expect(dispatch.calledOnce).to.be.false;
    });

  });

  describe('nextQs', function() {
    var nextQsResult;

    beforeEach(function() {
      nextQsResult = nextQs();
    });

    it('should move to next qs', function() {
      var expectedAction = setActiveQs(2);
      dispatch = dispatch.withArgs(expectedAction);

      nextQsResult(dispatch, $=> stateDuring);
      expect(dispatch.calledOnce).to.be.true;
    });

    it('should *not* move to next qs if at the begining', function() {
      nextQsResult(dispatch, $=> stateBefore);
      expect(dispatch.called).to.be.false;
    });

    it('should *not* move to next qs if at the after', function() {
      nextQsResult(dispatch, $=> stateAfter);
      expect(dispatch.called).to.be.false;
    });

  });

  describe('resetQs', function() {
    var resetQsResult;

    beforeEach(function() {
      resetQsResult = resetQs();
    });

    it('should reset to initial before state', function() {
      var expectedAction = setActiveQs(-1);
      dispatch = dispatch.withArgs(expectedAction);

      resetQsResult(dispatch, $=> stateAfter);
      expect(dispatch.calledOnce).to.be.true;
    });

    it('should *not* reset qs if at the begining', function() {
      resetQsResult(dispatch, $=> stateBefore);
      expect(dispatch.called).to.be.false;
    });

    it('should *not* reset qs if during', function() {
      resetQsResult(dispatch, $=> stateDuring);
      expect(dispatch.called).to.be.false;
    });

  });

});
