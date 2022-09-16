import "./category-item-styles.scss";
import { useNavigate } from "react-router-dom";

function CategoryItem({category}) {
    const {imageUrl, title, route } = category;
    const navigate = useNavigate()
    const onNavigate = ()=>navigate(route)
  return (
    <div className="category-container" onClick={onNavigate}>
      <div
        className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem