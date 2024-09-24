import Pages from "@/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
	const navigate = useNavigate();

	const handleClickItem = () => {
		// TODO: 왜 2depth면 안되지??
		navigate(Pages.MemoryDetail);
	};

	return <div className="gallery">
		<div className="gallery-item" onClick={handleClickItem}>
			<img src="image1.jpg" alt="Image 1"/>
		</div>
		<div className="gallery-item">
			<img src="image2.jpg" alt="Image 2"/>
		</div>
		<div className="gallery-item">
			<img src="image3.jpg" alt="Image 3"/>
		</div>
		<div className="gallery-item">
			<img src="image4.jpg" alt="Image 4"/>
		</div>
	</div>;
};

export default Gallery;