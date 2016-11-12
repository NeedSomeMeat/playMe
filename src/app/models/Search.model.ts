export class SearchModel{
    constructor(
        public album: any = {},
        public artists: Array<any> = [],
        public available_markets: Array<any> = [],
        public disc_number: number = null,
        public duration_ms: number = null,
        public explicit: boolean = null,
        public external_ids: any = {},
        public external_urls: any = {},
        public href: string = "",
        public id: string = "",
        public name: string = "",
        public popularity: number = null,
        public preview_url: string = "",
        public track_number: number = null,
        public uri: string = "",
        public type: string = ""
    ){ }
}
