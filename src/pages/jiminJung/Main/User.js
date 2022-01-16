import './User.scss';

function User(user) {
  return (
    <div className="user">
      <img className={user.imgClassname} src={user.imgUrl} alt={user.imgAlt} />
      <p>{user.name}</p>
    </div>
  );
}

export default User;
