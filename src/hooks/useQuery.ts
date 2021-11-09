import { useRouter } from 'next/router';

export default function useQuery() {
  const { replace, pathname, query } = useRouter();
  const currentQuery = new URLSearchParams(query.toString());

  const addQuery = (key: string, value: string) => {
    const searchParams = new URLSearchParams(query.toString());
    searchParams.set(key, value);
    return replace({ pathname, search: searchParams.toString() });
  };

  const removeQuery = (key: string) => {
    const searchParams = new URLSearchParams(query.toString());
    searchParams.delete(key);
    return replace({ pathname, search: searchParams.toString() });
  };

  return { currentQuery, addQuery, removeQuery };
}
