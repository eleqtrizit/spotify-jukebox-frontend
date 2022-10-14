import axios, { Canceler } from 'axios';

var CancelToken = axios.CancelToken;
var cancel: Canceler;

export async function autocompleteSearch(searchQuery: string) {
    const partyId = localStorage.getItem('party_id');
    const url: string = process.env.REACT_APP_SERVER_URL + '/search/' + searchQuery + '/' + partyId;
    if (cancel !== undefined) {
        cancel();
    }
    try {
        const response = await axios.get(url, {
            cancelToken: new CancelToken(function executor(c) {
                cancel = c;
            })
        });
        return response.data;
    } catch (error) {
        console.log('Previous request cancelled');
        // console.log(error);
    }
}
