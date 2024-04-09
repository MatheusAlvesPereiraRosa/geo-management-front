import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useTranslation } from 'react-i18next'

import { Navbar } from '../../components/Navbar'
import { UserList } from '../../components/UserList'
import { RefreshButton } from '../../components/RefreshButton'
import { DistanceButton } from '../../components/DistanceButton'
import { Modal } from '../../components/Modal'
import { Loading } from '../../components/Loading'

import { fetchUsers } from '../../redux/user/userSlice'
import { RootState } from '../../redux/store'

export const Home = () => {
    const dispatch = useDispatch()

    const { t } = useTranslation()

    const { users, isLoading, path } = useSelector((state: RootState) => state.user)
    const { lang } = useSelector((state: RootState) => state.language)

    const [isShow, setIsShow] = useState<boolean>(false)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const showModal = () => {
        setIsShow(true)
    }

    const closeModal = () => {
        setIsShow(false)
    }

    return (
        <>
            <Navbar lang={lang} />
            <main className="w-full px-10">
                <div className="mx-auto flex flex-col items-center justify-center lg:max-md:flex-row max-sm:flex-col mb-10">
                    <h1 className='my-10 text-4xl text-white'>{t('title-users')}</h1>

                    {isLoading === true ? <Loading /> :
                        <UserList users={users} />
                    }
                </div>
            </main>
            <Modal isShow={isShow} closeModal={closeModal} path={path} />
            <DistanceButton showModal={showModal} users={users} />
            <RefreshButton refresh={() => (dispatch(fetchUsers()))} />
        </>
    )
}
