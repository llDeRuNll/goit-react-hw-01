import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profile}>
        <img src={image} className={s.photo} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.text}>@{tag}</p>
        <p className={s.text}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.statInfo}>
          <span className={s.title}>Followers</span>
          <span className={s.titleInfo}>{stats.followers} </span>
        </li>
        <li className={s.statInfo}>
          <span className={s.title}>Views</span>
          <span className={s.titleInfo}>{stats.views} </span>
        </li>
        <li className={s.statInfo}>
          <span className={s.title}>Likes</span>
          <span className={s.titleInfo}>{stats.likes} </span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
