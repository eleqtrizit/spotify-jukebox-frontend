export interface AuthUrl {
    auth_url: string;
}

export interface PartyId {
    party_id: string;
}

export interface QueryString {
    query_string: string;
}

export interface Artist {
    name: string;
    uri: string;
    id: string;
    image: string;
}

export interface Album {
    name: string;
    id: string;
    uri: string;
    image: string;
}

export interface Track {
    name: string;
    id: string;
    uri: string;
    artists: Artist[];
    album: Album;
}
