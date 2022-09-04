import React,{useState, useEffect} from 'react'
import { getBrands } from '../axios/brandPageAxios'

const BrandPage = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        getBrands(result => setBrands(result))
    })
    
  return (
    <>
        <div>
        <h1>Welcome</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        imperdiet ex. Nunc massa diam, aliquet iaculis nibh non, blandit
        pulvinar orci. Donec maximus tellus odio. In hac habitasse platea
        dictumst. Aenean ut dui quis ipsum iaculis pretium et et diam. Donec et
        tempus purus. Mauris sollicitudin fringilla elementum. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Nullam libero quam,
        lacinia eget mollis ac, vestibulum eu ex. Duis sodales ornare cursus.
        Morbi blandit id felis vitae elementum. Curabitur dui arcu, mollis
        semper venenatis a, efficitur ultrices mi. In ante magna, tempor
        elementum urna nec, dignissim dapibus diam. Nam interdum felis in nisl
        maximus aliquet. Nulla vitae gravida diam, id gravida justo. In hac
        habitasse platea dictumst. Pellentesque quis eros vel sem ornare porta.
        Mauris nec lacinia mi. Etiam luctus in metus sed tristique. Integer
        pulvinar rutrum lectus, id venenatis nisi. In vitae malesuada metus. Sed
        tempor nunc non sapien egestas, nec euismod velit tristique. Nunc
        maximus elementum justo, ac volutpat purus laoreet id.
      </p>
    </div>
    <div>
        <table className='table table-borderd table-hover'>
            <thead>
                <tr>
                    <th>1. ID</th>
                    <th>2. Name</th>
                    <th>3. Image</th>
                    <th>4. City</th>
                    <th>5. Total Employees</th>
                    <th>6. Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    brands.map(result => {
                        const {id, name, image, city, total_employees} = result
                        return(
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{image}</td>
                                <td>{city}</td>
                                <td>{total_employees}</td>
                                <td>
                                    <a href="/brands/update/{id}" className='col m-2 btn btn-primary'>Update</a> 
                                    <a href="/brands/delete/{id}" className='col m-2 btn btn-danger'>Delete</a>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div className='add-button text-center'>
            <a href="/brands/add" className='btn btn-primary btn-lg'>Add Data</a>
        </div>
    </div>
    </>
  )
}

export default BrandPage