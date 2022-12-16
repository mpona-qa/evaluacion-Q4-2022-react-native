import {useEffect, useState} from 'react';
import fetchGift from '../../services/gift/gift-service';

const UseGiftFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<any>();

  useEffect(() => {
    let doUpdate = true;

    setStatus('loading');
    setData(undefined);
    setError(null);

    fetchGift(url)
      .then(data => {
        if (doUpdate) {
          setData(data);
          setStatus('success');
        }
      })
      .catch(error => {
        if (doUpdate) {
          setError(error);
          setStatus('error');
        }
      });

    return () => (doUpdate = false);
  }, [url]);

  return {data, status, error};
};

export default UseGiftFetch;
