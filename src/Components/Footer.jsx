const Footer = () => {
    return (
        <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
              <h6 className="font-bold uppercase py-2 px-4">SOCIAL</h6>
              <ul>
                <li className="py-1">Instagram</li>
                <li className="py-1">Facebook</li>
                <li className="py-1">LinkedIn</li>
                <li className="py-1">GitHub</li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase py-2 px-4"  >TOP Articles</h6>
              <ul>
                <li className="py-1">Digital Marketing</li>
                <li className="py-1">Styles</li>
                <li className="py-1">AI</li>
                <li className="py-1">Marketing</li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase py-2 px-4">Company</h6>
              <ul>
                <li className="py-1">About us</li>
                <li className="py-1">Contact us</li>
                <li className="py-1">Career</li>
                <li className="py-1">Newsletter</li>
                
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase py-2 px-4">Solutions</h6>
              <ul>
                <li className="py-1">Marketing</li>
                <li className="py-1">Advertisment</li>
                <li className="py-1">Social</li>
                <li className="py-1">Bloging</li>
            
              </ul>
            </div>
            <div className="col-span-2 pt-2 md:pt-2">
              <p className="font-bold uppercase py-1 px-3">Subscribe us</p>
              <form className="flex flex-col sm:flex-row ">
                <input type="email"  className="w-full p-2 md:w-[250px] md:h-[40px] mr-2 rounded-md mb-0 md:mb-0"/>
                <button className="p-2 mb-2 bg-[#00B6E]">Subscribe</button>
              </form>
            </div>
          
          </div>
         
       
        <div className="max-w-[1240px] mx-auto py-4 text-center text-gray-500 space-y-23">
          <p>2023 Syed Ali Akbar. All rights Reserved.</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  