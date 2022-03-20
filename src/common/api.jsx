import axios from 'axios'
import { useQuery } from 'react-query'

const baseUrl = 'https://coa1.herokuapp.com'

export const useRachFirst = (x,y) => {
  return useQuery(['rachfirst', x,y], () => {
    // return axios.get(`${baseUrl}/api/karatsuba`, {param: {a:x, b:y}})
    return axios.get(`${baseUrl}/rach`, {params: {a:x, b:y}})
  }, {
    retry: 1,
    keepPreviousData: true,
  })
}

export const useKaraQuery = (x,y) => {
  return useQuery(['kara', x,y], () => {
    return axios.get(`${baseUrl}/karatsuba`, {params: {a:x, b:y}})
    // return axios.get('/api/karatsuba', {param: {a:x, b:y}})
  }, {
    retry: 1,
    keepPreviousData: true,
  })
}

export const usePascalQuery = (x, y) => {
  return useQuery(['pascal', x, y], () => {
    return axios.get(`${baseUrl}/pascal`, {params: {a:x, b:y}})
    // return axios.get('/api/pascal', {param: {a:x, b:y}})
  }, {
    retry: 1,
    keepPreviousData: true,
  })
}

export const useLukasQuery = (x,y) => {
  return useQuery(['lukas', x,y], () => {
    return axios.get(`${baseUrl}/lukas`, {params: {number:x, divider:y}})
    // return axios.get('/api/lukas', {param: {number:x, divider:y}})
  }, {
    retry: 1,
    keepPreviousData: true,
  })
}

