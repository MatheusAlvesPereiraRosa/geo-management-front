import { UserItem } from '../UserItem'

import { User } from '../../interfaces'

interface props {
    users: User[]
}

export const UserList = ({ users }: props) => {
    return (
        <div className='grid grid-cols-4 gap-10'>
            {users.length > 0 &&
                users.map((user) => (
                    <UserItem key={user.name} {...user} />
                ))
            }
        </div>
    )
}