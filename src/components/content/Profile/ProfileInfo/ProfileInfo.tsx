import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.contentImgWrapper}>
                <img
                    alt={"profile-wallpaper"}
                    src={'https://asset.berita24.id/wallpaper/20220115/3200x1080-macos-extended-wallpaper-for-ultrawide-monitors-thumb.jpg'}/>
            </div>
            <div>
                avatar+description
            </div>
        </div>
    )
}