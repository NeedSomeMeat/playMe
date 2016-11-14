export class AlbumModel{
    constructor(
        public album_type: string = "",
        public artists: Array<any> = [],
        public available_markets: Array<any> = [],
        public external_urls: any = {},
        public href: string = "",
        public id: string = "",
        public images: Array<any> = [],
        public name: string = "",
        public type: string = "",
        public uri: string = ""
    ){ }
}