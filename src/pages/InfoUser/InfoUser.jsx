import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userService } from '../../services/user'
import { jobsService } from '../../services/jobs'

export default function InfoUser() {
    const [userInfo, setUserInfo] = useState({})
    const [listRentJob, setlistRentJob] = useState()
    const param = useParams()
    console.log(param.id)
    const fetchInfoUser = async () => {
        const data = await userService.fetchGetInfoUserApi(param.id)
        console.log(data.data.content)
        setUserInfo(data.data.content)
    }
    const fetchListRentUser = async () => {
        const data = await jobsService.fetchRentJobListUserApi()
        console.log(data.data.content)
        setlistRentJob(data.data.content)
    }
    useEffect(() => {
        fetchInfoUser()
        fetchListRentUser()
    }, [])
    return (
        <div className='home-user-info'>InfoUser</div>
    )
}
