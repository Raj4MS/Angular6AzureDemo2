import { Injectable } from '@angular/core';

export interface InternalStateType {
    [key: string]: any;
}

@Injectable()
export class AppService {

    _state: InternalStateType = {};

    get state() {
        return this._state = this._clone(this._state);
    }

    // never allow mutation
    set state(value) {
        throw new Error('do not mutate the `.state` directly');
    }

    get(prop?: any) {
        // use our state getter for the clone
        const state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : null;
    }

    set(prop: string, value: any) {
        // internally mutate our state
        return this._state[prop] = value;
    }

    private _clone(object: InternalStateType) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    }
}
