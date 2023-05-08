const Avatar = ({avatarUrl,fullName}) => {
    return (
        <img
        className="avatar"
        src="{avatarUrl}"
        alt={`Avatar of ${fullName}`}
        width={100}
        height={100}
        />
    );

}

export default Avatar;