import { useSearchParams } from 'react-router-dom';
import ForwardCallback from '../components/ForwardCallback';

const Callback = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    ForwardCallback(code);

    return (
        <>
            <div className="dancingWrapper">
                <div className="dancing">
                    <img src="dancing.webp" alt="Dancing" />
                    <br />
                    <span className="dancingText">STARTING PARTY</span>
                </div>
            </div>
        </>
    );
};

export default Callback;
