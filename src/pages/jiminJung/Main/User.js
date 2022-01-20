import './User.scss';

function User({ userList }) {
  return (
    <>
      {userList.map(userList => (
        <div className="user" key={userList.id}>
          <img
            className={userList.imgClassname}
            src={userList.imgUrl}
            alt={userList.imgAlt}
          />
          <p>{userList.name}</p>
        </div>
      ))}
    </>
  );
}

export default User;
