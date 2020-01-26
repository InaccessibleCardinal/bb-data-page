
export default interface Action {
    type: string;
};

export interface AnyAction extends Action {
    [extraProps: string]: any;
}