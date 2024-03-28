import { UserItem } from '../UserItem'

import { User } from '../../interfaces'

interface props {
    users: User[]
}

export const UserList = ({ users }: props) => {
    return (
        <div className='grid grid-cols-4 gap-10'>
            {users.length > 0 &&
                users.map((user, index) => (
                    <UserItem key={user.name} {...user} index={index} />
                ))
            }
        </div>
    )
}