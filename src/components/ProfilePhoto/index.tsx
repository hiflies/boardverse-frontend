import type {DetailedHTMLProps, ImgHTMLAttributes} from "react";

type ProfilePhotoProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export default function ProfilePhoto({src, ...props}: ProfilePhotoProps) {
    return (
        <img alt="User Profile Avatar"
             src={src ?? "/default_avatar.jpg"}
             {...props}
        />
    );
}