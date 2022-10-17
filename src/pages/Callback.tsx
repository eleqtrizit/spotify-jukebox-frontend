import { useSearchParams } from 'react-router-dom';
import ForwardCallback from '../components/ForwardCallback';

const Callback = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    ForwardCallback(code);

    return <div>Attempting to start a party...</div>;
};

export default Callback;
