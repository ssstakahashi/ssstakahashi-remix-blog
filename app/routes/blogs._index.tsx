
import CardTemplate from "~/components/temp_card";
import { blogList } from "~/contents/blog/blog_list";

const BlogsIndex = () => {

  return (
    <div className="flex justify-center w-full mt-16">

      <div className="flex justify-center flex-row flex-wrap">
        {blogList.map((blog) => (
          <CardTemplate key={blog.id} content={blog} />
        ))}
      </div>

    </div>

  );
};

export default BlogsIndex;
