import { useState, useEffect, useCallback, useRef } from 'react';

export function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const lastParams = useRef({});

  const fetchData = useCallback(async (opts = {}) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams(opts.params || lastParams.current).toString();
      lastParams.current = opts.params || lastParams.current;
      const fullUrl = params ? `${url}?${params}` : url;
      const response = await fetch(fullUrl, options);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
