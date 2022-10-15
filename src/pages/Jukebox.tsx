import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { useParams } from 'react-router-dom';
import isValidPartyId from '../components/isValidPartyId';
import Playlist from '../components/Playlist';

interface PartyProps {
    partyId?: string;
}

const Jukebox = () => {
    const { partyId }: PartyProps = useParams();

    useEffect(() => {
        if (!partyId && localStorage.party_id) {
            window.location.href = `/jukebox/${localStorage.party_id}`;
        }
        isValidPartyId(partyId || 'badId').then((res) => {
            if (res) {
            } else {
                window.location.href = `/join/${localStorage.party_id}`;
            }
        });
    }, [partyId]);

    return (
        <>
            <div className="searchBar">
                <div className="flexbox">
                    <div className="searchDummy">
                        <div>
                            <input
                                type="text"
                                placeholder="       ..."
                                required
                                onClick={(e) => (window.location.href = '/search')}
                            />
                        </div>
                    </div>
                </div>
                <div className="qrWrapperSmall">
                    <div className="qrCodeSmall">
                        <a href="/share" title="Share">
                            <QRCode
                                size={256}
                                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                                value={window.location.href}
                                viewBox={`0 0 256 256`}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <Playlist />
        </>
    );
};

export default Jukebox;
