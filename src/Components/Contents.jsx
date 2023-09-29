
    import { useParams } from "react-router-dom";
    const Contents = ({ blogs }) => {
        console.log(blogs)
        const b=[{
            'author': "data:image/jpeg;base64,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",
            'name': "Syed Ali Akbar",
            'pro': 'Web Developer'
      
        }]
      const { id } = useParams();
    
          const selectedBlog = blogs.data.find((blog) => blog.id === Number(id));
    
      if (!selectedBlog) {
        return <div>{id}</div>;
      }
    
      return (
        <div className="w-full pb-60 bg-[#f9f9f9]">
          <div className="max-w-[1240px] mx-auto ">
            <div className="grid lg:grid-cols-3 sm-grid-cols-3 ss:grid-cols-1 md:gap-8 sm:gap-y-8 px-4 ss:pt-20 md:mt-0 ss:pt-20 text-black">
              <div className="col-span-2 py-4">
                <img
                  className="h-fit w-full object-cover"
                  src={`http://localhost:1337${selectedBlog.attributes.coverimage.data[0].attributes.url}`}
                  alt="Cover"
                />
                <h1 className="font-bold text-2xl my-1 pt-5 ">
                  {selectedBlog.attributes.title}
                </h1>
                <div className="pt-5 ">
                  <p>{selectedBlog.attributes.content}</p>
                </div>
              </div>
              <div className="w-100 h-60 bg-white rounded-xl overflow-hidden drop-shadow-md py-7 mt-8">
                <div>
                  <img
                    className="p-2 w-32 h-32 rounded-full mx-auto"
                    src={b[0].author}
                    alt="Author"
                  />
                  <h1 className="font-bold text-2xl text-center text-gray-500 pt-3">
                    {b[0].name}
                  </h1>
                  <p className="text-center text-gray-500 font-medium ">
                    {b[0].pro}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Contents;
    