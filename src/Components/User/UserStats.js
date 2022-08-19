import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
import Head from '../Helper/Head'
import UseStatsGraphs from './UseStatsGraphs'
import { GET_STATS } from '../../Api'

const UserStats = () => {
  const { data, error, loading, request } = useFetch()
  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UseStatsGraphs data={data} />
      </div>
    )
  else return null
}

export default UserStats
