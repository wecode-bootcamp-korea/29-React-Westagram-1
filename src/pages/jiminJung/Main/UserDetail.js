import './UserDetail.scss';

function UserDetail(user) {
  return (
    <div className="userDetail">
      <img className={user.imgClassName} src={user.imgUrl} alt={user.imgAlt} />
      <div className="userInfo">
        <p>{user.name}</p>
        <p>{user.info}</p>
      </div>
    </div>
  );
}

export default UserDetail;
