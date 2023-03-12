import CategoryItem from "../category-item/category-item";
import './directory.style.scss';

const DirectoryComponent = ({categories}) =>{
        return (
        <div className="directory-container" >
            { categories.map((category) => {
                return <CategoryItem key={category.id} category={category}/>
            })}
        </div>
    );
};

export default DirectoryComponent;
