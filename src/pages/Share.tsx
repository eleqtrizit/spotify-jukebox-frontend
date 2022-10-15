import QRCode from 'react-qr-code';

const Share = () => {
    let value = `${process.env.REACT_APP_SERVER_URL}/join/${localStorage.party_id}`;
    return (
        <>
            <div className="qrWrapper">
                <div className="qrCodeLarge">
                    <QRCode
                        size={256}
                        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                        value={value}
                        viewBox={`0 0 256 256`}
                    />
                </div>
            </div>
            <div className="qrText">
                <p>Scan this QR code to join the party!</p>
            </div>
            <div className="backText">
                <a href="/jukebox">Back to Jukebox</a>
            </div>
        </>
    );
};

export default Share;
