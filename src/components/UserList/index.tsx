import { UserItem } from '../UserItem'

import { User } from '../../interfaces'

interface props {
    users: User[]
}

export const UserList = ({ users }: props) => {
    return (
        <>
            {users.length === 0
                ?
                <div className="h-[68vh]">
                    <p className="mt-8 text-xl text-white">Não há usuários cadastrados no momento...</p>
                </div>
                :
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                    {users.length > 0 &&
                        users.map((user, index) => (
                            <UserItem key={user.name} {...user} index={index} />
                        ))
                    }
                </div>
            }
        </>
    )
}