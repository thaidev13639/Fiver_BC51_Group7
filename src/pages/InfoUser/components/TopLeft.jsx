import { notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { userService } from '../../../services/user'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../../redux-toolkit/reducer/userReducer'

export default function TopLeft(props) {
    const stateUserInfo = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    const { avatar, name, email } = props.jobInfo
    const [img, setimg] = useState()
    useEffect(() => {
        setimg(avatar)
    }, [props])
    const handleChangeFileImg = async (e) => {
        const file = e?.target?.files[0]

        if (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/gif" || file.type === "image/jpg") {
            const formData = new FormData()
            formData.append("formFile", file, file.name)

            try {
                const result = await userService.fetchUploadAvtarUser(formData)
                dispatch(loginAction.SET_INFO_USER({ user: result.data.content, token: stateUserInfo?.userInfo?.token }))
                localStorage.setItem("INFO_ACCOUNT", JSON.stringify({ user: result.data.content, token: stateUserInfo?.userInfo?.token }))

                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    setimg(e.target.result)
                }
                notification.success({
                    message: "SUCCSESS"
                })
                props.fetchInfoUser()
            } catch (error) {
                console.log(error)
            }
        } else {
            notification.warning({
                message: "File it's not Picture",
                placement: "bottomLeft",
                duration: 3
            })
        }
    }
    return (
        <>
            <div className='online'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                    <span>Online</span>
                </div>
            </div>
            <div className='img'>
                <img src={img ? img : require("../../../images/imgHome/AvaterUser.png")} alt="...Avatar" />
            </div>
            <div className='info'>
                <div className='pencil camera'>
                    <input type="file" accept='image/png ,image/jpeg, image/gif , image/jpg' onChange={handleChangeFileImg} />
                    <i className="fa-solid fa-camera" />
                </div>
                <div className='item'>
                    <span>{name}</span>
                </div>
                <div className='item'>
                    <span>{email}</span>
                </div>
            </div>
            <div className='from'>
                <div className='item'>
                    <div className="left-from">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <span>From</span>
                    </div>
                    <div className="right-from">
                        <p>VietNam</p>
                    </div>
                </div>
                <div className='item'>
                    <div className="left-from">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                        <span>Member Since</span>
                    </div>
                    <div className="right-from">
                        <p>Oct2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}
