import useSWR from "swr"

export const useFetchSimples =(url: string) => {
    const { data } = useSWR(url, async (url) => {
        const response = await fetch(url)
        const data = await response.json();

        return data;
    })

    return {data}
}