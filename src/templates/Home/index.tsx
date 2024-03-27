import { useEffect, useState } from 'react'
import { User, Coordinates, Path } from '../../interfaces'

import axios from 'axios'

import { Navbar } from '../../components/Navbar'
import { UserList } from '../../components/UserList'
import { RefreshButton } from '../../components/RefreshButton'
import { DistanceButton } from '../../components/DistanceButton'
import { Modal } from '../../components/Modal'

export const Home = () => {
    const [users, setUsers] = useState<User[]>([])
    const [points, setPoints] = useState<Coordinates[]>([])
    const [path, setPath] = useState<Path>({
        distance: 0,
        points: []
    })

    const [isShow, setIsShow] = useState<boolean>(false)

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        extractedPoints()
    }, [users])

    const showModal = () => {
        setIsShow(true)
    }

    const closeModal = () => {
        setIsShow(false)
    }

    const extractedPoints = () => {
        const points = users.flatMap(user => {
            return { x: parseFloat(user.coordinatesX), y: parseFloat(user.coordinatesY) };
        });
        //console.log(points)
        setPoints(points)
    };

    const getUser = async () => {
        await axios
            .get("http://localhost:3000/users")
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const calcDistance = async () => {
        console.log(points)
        await axios
            .post("http://localhost:3000/users/calculateDistanceSolution", {points: points})
            .then((res) => {
                setPath(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <main className="w-full px-10">
                <div className="mx-auto flex flex-col items-center justify-center lg:max-md:flex-row max-sm:flex-col mb-10">
                    <h1 className='my-10 text-4xl text-white'>Usuários cadastrados</h1>

                    <UserList users={users} />
                </div>
            </main>
            <Modal isShow={isShow} closeModal={closeModal} path={path}/>
            <DistanceButton showModal={showModal} distance={calcDistance} />
            <RefreshButton refresh={getUser} />
        </>
    )
}
