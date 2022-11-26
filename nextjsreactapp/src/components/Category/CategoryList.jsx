import Link from 'next/link'
import Category from './Category'

const CategoryList= ({categories}) => {

    if(!categories) return null
    
    return (
        <div>
            {categories.map((cat) => (
                <Link href={`/categories/${cat.slug}`}>
                    <Category category={cat}/>
                </Link>
            ))}
        </div>
    )
}

export default CategoryList