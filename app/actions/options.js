
export const ADD_OPTION = '@@options@add';
export const REMOVE_OPTION = '@@options@remove';
export const CHOOSE_OPTION = '@@options@choose';
export const UPDATE_VALUE = '@@options@updateValue';
export const RESET_VALUE = '@@options@resetValue';

export function addOption(value) {
    return {
        type: ADD_OPTION,
        id: Date.now(),
        value
    };
}

export function removeOption(id) {
    return {
        type: REMOVE_OPTION,
        id
    };
}

export function choose(opt1, opt2) {
    return {
        type: CHOOSE_OPTION,
        opt1, 
        opt2
    };
}

export function updateValue(value) {
    return {
        type: UPDATE_VALUE,
        value
    };
}

export function resetValue() {
    return {
        type: RESET_VALUE
    };
}

