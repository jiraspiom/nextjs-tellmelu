import useSWR from "swr"
import api from "../services/api";

// export const useFetch = <Data = any, Error = any>(url: string) => {
//     const { data, error } = useSWR<Data, Error>(url, async (url) => {
//         const response = await fetch(url)
//         const data = await response.json();

//         return data;
//     })

//     return { data, error }
// }

// usando axios com interface
export const useAxios = <Data = any, Error = any>(url: string, dados: any) => {
	const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
		const response = await api.get(url)

		return response.data;
	}, dados)
	return { data, error, mutate }
}