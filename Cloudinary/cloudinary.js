import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'shop', 
  api_key: '158157478123366', 
  api_secret: 'CQspbd_oJNg8844zglz9bID-bI4' 
});

module.exports = cloudinary;