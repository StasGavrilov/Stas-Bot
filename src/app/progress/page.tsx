'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from '@/../supabaseClient'

import Box from '@/components/Box/Box'
import Loading from '@/components/Loading/Loading'
import Table from '@/components/Table/Table'
import {headers} from './headers'
interface ProgressData {
  id: number
  title: string
}

export default function Progress() {
  const [fetchError, setFetchError] = useState<string | null>(null) //NOT ADDED YET.
  const [progress, setProgress] = useState<ProgressData[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const { data, error } = await supabase
        .from('Progress')
        .select()

      if (error) {
        setFetchError('Could not fetch data')
        setProgress(null)
        console.log(error)
      } else {
        setProgress(data || [])
        setFetchError(null)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const data = [1,2,3,4] //PLACEHOLDERS

  return (
    <Box title='Progress'>
      <button>Add</button>
      {isLoading ? <Loading /> : <Table headers={headers} data={data} />}
    </Box>
  )
}
