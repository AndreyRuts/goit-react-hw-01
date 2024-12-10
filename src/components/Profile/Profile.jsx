import profileStyle from './Profile.module.css';

const Profile = (props) => { 
    const { name, tag, location, image, stats } = props 
    return (
        <>
             <div className={profileStyle.profile}>
                 <div className={profileStyle.top}>
                     <img className={profileStyle.image}
                     src={image}
                     alt="User avatar"
                     />
                     <p className={profileStyle.title}>{name}</p>
                     <p className={profileStyle.topText}>@{tag}</p>
                     <p className={profileStyle.topText}>{location}</p>
                 </div>
                 <ul className={profileStyle.bottom}>
                     <li className={profileStyle.statsBlock1}>
                         <span className={profileStyle.statsText}>Followers</span>
                         <span className={profileStyle.statsTextBold}>{stats.followers}</span>
                     </li>
                     <li className={profileStyle.statsBlock2}>
                         <span className={profileStyle.statsText}>Views</span>
                         <span className={profileStyle.statsTextBold}>{stats.views}</span>
                     </li>
                     <li className={profileStyle.statsBlock3}>
                         <span className={profileStyle.statsText}>Likes</span>
                         <span className={profileStyle.statsTextBold}>{stats.likes}</span>
                     </li>
                 </ul>
             </div>
        </>
    )
}

export default Profile;