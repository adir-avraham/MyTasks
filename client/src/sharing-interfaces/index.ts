export interface Action {
    type: string; 
    payload: State;
}

export interface State {

    cases: Array<Case>;

}

export interface Case {
    id: number;
    case_name: string;
    tasks: string;
    next_sitting: Date;
    status: string;
}