'use client'
import React, { useState, useRef } from 'react';

const AddProducts = () => {
  const [toggle, setToggle] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    price: 0.0,  // Default price as a float
    stock: 0,    // Default stock as an integer
    productImg: '',
  });
  

  const handleAddImages = async (e) => {
    const files = Array.from(e.target.files);
    // setData((prevData) => ({
    //   ...prevData,
    //   productImg: files,
    // }));
    setUploadedImages(files);
    const formData = new FormData();

    uploadedImages.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

  

  };

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
  
    if (changeEvent.target.files && changeEvent.target.files.length > 0) {
      reader.onload = function (onLoadEvent) {
        setImageSrc(onLoadEvent.target.result);
        setUploadData(undefined);
      };
      reader.readAsDataURL(changeEvent.target.files[0]);
    } else {
      // Handle the case when no files are selected, or files is null/undefined
      console.error('No files selected.');
    }
  };
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'productImg');
    const formData = new FormData();
  
    for (const file of fileInput.files) {
      formData.append('file', file);
    }
  
    formData.append('upload_preset', 'project-shop');
  
    try {
      // First fetch request to upload images to Cloudinary
      const response1 = await fetch('https://api.cloudinary.com/v1_1/dqpduwgpj/image/upload', {
        method: 'POST',
        body: formData,
      }).then((r) => r.json());
  
      console.log('First response', response1);
  
      // Check if the response from Cloudinary contains a 'secure_url'
      if (response1 && response1.secure_url) {
        // Update the 'productImg' field with the secure URL from Cloudinary
        setData({ ...data, productImg: response1.secure_url });
  
        // Send a second fetch request to '/api/addproduct'
        const response2 = await fetch('/api/addproducts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data }),
        });
  
        console.log('Second response', response2);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const drop = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="w-full">
        <h1 className="font-bold text-xl">Products</h1>
        <div className="flex items-center justify-between mt-6">
          <input
            type="text"
            placeholder="Search Products"
            className="border rounded-xl bg-gray-100 w-64 h-10 px-5 outline-none"
          />
          <button
            className="rounded-xl bg-purp w-32 h-10 px-5 outline-none font-medium"
            onClick={drop}
          >
            + Add Item
          </button>
        </div>
        <div className="w-full p-4 border-2 mt-3 rounded-xl h-screen">
          {/* Product Table */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 font-medium text-md ">

                <th className="py-3 bg-gray-100 th1 pl-3 flex items-center gap-2">
                  <input type="checkbox" name="selectAll" id="selectAll" />
                  <span>Item</span>
                </th>
                <th className="py-3 bg-gray-100">Category</th>
                <th className="py-3 bg-gray-100">Stock</th>
                <th className="py-3 bg-gray-100 th2">Price</th>
                <th className="py-3 bg-gray-100 th2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-md font-medium text-md cursor-pointer">
                <td className="py-3 flex items-center gap-3 pl-3">
                  <input type="checkbox" name="select" data-bs-id="1" id="select" />

                  <span className="h-10 w-10 flex items-center justify-center rounded-lg overflow-hidden" >
                    <img src="/assets/SRK.jpg" alt="Profile Picture" className="w-full h-full object-cover" />

                  </span>

                  <span>Robert Carter</span>
                </td>
                <td className="py-3 ">
                  <span className='bg-gray-100 px-3 py-1 rounded-full text-sm font-regular'>Shoes</span>
                </td>
                <td className="py-3">924</td>

                <td className="py-3">$2600</td>
                <td className="py-3">

                  <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/trash--v1.png"  alt="trash--v1" />

                </td>
              </tr>



            </tbody>
          </table>



          {/* Modal */}


          {toggle && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

              <div className="absolute w-1/3 bg-white rounded-lg p-4">
                <form method='post' onChange={handleOnChange} onSubmit={handleOnSubmit}>
                  <div className="flex items-center gap-2">
                    <span className='w-full h-36 flex items-center justify-center border-2 rounded-lg'>
                      <label htmlFor="productImg" className="bg-primary-blue text-white bg-purp font-bold py-2 px-4 rounded-full cursor-pointer">
                        Upload
                      </label>
                      <input type="file" id="productImg" accept="image/*" name="productImg" className="hidden" onChange={handleAddImages}  required/>
                    </span>
                  </div>
                  {uploadedImages.length > 0 && (
                    <div className="w-full flex flex-wrap">
                      {uploadedImages.map((image, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded Image ${index}`}
                          className="w-12 h-12 m-2"
                        />
                      ))}
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="border rounded-xl bg-gray-100 w-full h-10 px-2 outline-none my-2"
                    value={data.name}
                    onChange={(e) => { setData({ ...data, name: e.target.value }) }}
                    required
                  />
                  <div className='w-full'>
                    <select
                      value={data.category}
                      onChange={(e) => { setData({ ...data, category: e.target.value }) }}

                      className="border rounded-xl bg-gray-100 px-2 h-10 outline-none w-full mb-2 text-gray-400"
                      required
                    >
                      <option value="Product Name" disabled className='text-gray-100'>Categories</option>
                      <option value="Category 1">Category 1</option>
                      <option value="Category 2">Category 2</option>
                      <option value="Category 3">Category 3</option>
                      <option value="Category 4">Category 4</option>
                      <option value="Category 5">Category 5</option>
                    </select>
                  </div>
                  <div className='w-full flex items-center justify-between mb-2'>
                    <input
                      type="number"
                      placeholder="$Price"
                      className="border rounded-xl bg-gray-100 w-1/4 h-10 px-2 outline-none "
                      value={data.price}
                      onChange={(e) => { setData({ ...data, price: e.target.value }) }}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Total Stock"
                      className="border rounded-xl bg-gray-100 w-1/4 h-10 px-2 outline-none"
                      value={data.stock}
                      onChange={(e) => { setData({ ...data, stock: e.target.value }) }}
                      required
                    />
                  </div>
                  <textarea
                    type="text"
                    placeholder="Product Description"
                    className="border rounded-xl bg-gray-100 w-full p-2 outline-none h-36"
                    value={data.description}
                    onChange={(e) => { setData({ ...data, description: e.target.value }) }}
                    required
                  />

                  <div className='flex gap-2 mt-8'>
                    <button type='submit' className=" bg-purp rounded-lg w-36 ">
                      Add
                    </button>
                    <button className=" bg-gray-100 hover:bg-gray-200  rounded-lg p-2 px-4" onClick={drop}>
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddProducts;


