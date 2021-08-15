export interface Action {
    type: string; 
    payload: State;
}

export interface State {

    cases: Array<Case>;

}

export interface Case {
    id: number;
    case: string;
    tasks: string;
    meeting: Date;
    status: string;
}