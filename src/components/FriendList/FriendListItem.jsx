import s from "./FriendList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendCard}>
      <img className={s.image} src={avatar} alt={`${name} avatar`} width="48" />
      <p className={s.names}>{name}</p>
      <p className={isOnline ? s.isOnline : s.isOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
