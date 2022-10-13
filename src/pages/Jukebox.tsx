import Playlist from '../components/Playlist';
import SearchComponent from '../components/SearchComponent';

const Jukebox = () => {
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
            </div>
            <Playlist />
        </>
    );
};

export default Jukebox;
