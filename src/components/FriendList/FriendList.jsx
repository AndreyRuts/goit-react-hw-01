import FriendListItem from './FriendListItem/FriendListItem';
import FriendListStyle from './FriendList.module.css'

const FriendList = ({ friends }) => {   
    return (
        <ul className={FriendListStyle.list}>  
            {friends.map(value => (
                <li key={value.id}>
                    <FriendListItem
                        avatar={value.avatar}
                        name={value.name}
                        isOnline={value.isOnline}
                        id={value.id}
                    />
                </li>
            ))}
        </ul>
    )
}

export default FriendList;