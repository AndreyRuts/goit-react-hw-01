import clsx from 'clsx';
import FriendListItemStyle from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {  
    return (
            <div className={FriendListItemStyle.box}>
                <img className={FriendListItemStyle.image} src={avatar} alt="Avatar" width="48" />
                <p className={FriendListItemStyle.title}>{name}</p>
                <p className={clsx(FriendListItemStyle.status, isOnline ? FriendListItemStyle.green : FriendListItemStyle.red)}>{isOnline ? 'Online' : 'Offline'}</p>
            </div>   
    )
}

export default FriendListItem;