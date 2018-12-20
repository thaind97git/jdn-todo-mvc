export class FilterButton {
    type: Filter;
    label: string;
    isActive: boolean;
}

export enum Filter {
    All,
    Active,
    Completed
}
