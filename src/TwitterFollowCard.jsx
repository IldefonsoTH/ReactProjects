export function TwitterFollowCard({userName, name, isFollowing}){
    const buttonText = isFollowing? "Siguiendo" : "Seguir";
    console.log(isFollowing)
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="Mi avatar" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
            <button className={`tw-followCard-button ${isFollowing ? "following" : ""}`}>
                    {buttonText}
                </button>
            </aside>
        </article>
    )
}