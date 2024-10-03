import Pages from "@/routes";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    item: any;
}

const GalleryItem: FC<Props> = ({ item }) => {
    const { image_url, id } = item;
    const navigate = useNavigate();

    const handleClickItem = () => {
        navigate(`${Pages.MemoryDetail}/${id}`);
    };

    return <div className="gallery-item" onClick={handleClickItem}>
        <img src={image_url} />
    </div>
}

export default GalleryItem;