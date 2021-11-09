import { useRouter } from 'next/router';



export default function useQuery() {
  const { push, pathname, query } = useRouter();
  const typedQuery = query as Record<string, string>;

  const addQuery = (key: string, value: string) => {
    const searchParams = new URLSearchParams(typedQuery);
    searchParams.set(key, value);
    return push({ pathname, search: searchParams.toString() });
  };

  const removeQuery = (key: string) => {
    const searchParams = new URLSearchParams(typedQuery);
    searchParams.delete(key);
    return push({ pathname, search: searchParams.toString() });
  };

  return { query, addQuery, removeQuery };
}
