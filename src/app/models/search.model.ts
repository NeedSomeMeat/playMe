export class SearchModel{
    constructor(
        public href: string = "",
        public items: Array<any> = [],
        public limit: number = null,
        public next: string = "",
        public offset: number = null,
        public previous: string = "",
        public total: number = null
    ){ }
}
