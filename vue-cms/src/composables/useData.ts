import useSWR from 'swr'

export function useData(key: string) {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data, error } = useSWR(key, fetcher)

    return {
        data,
        error,
        isLoading: !error && !data
    }
}