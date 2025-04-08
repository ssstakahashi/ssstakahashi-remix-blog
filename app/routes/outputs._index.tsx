
import CardTemplate from "~/components/temp_card";
import { outputList } from "~/contents/output/_output_list";


const BlogsIndex = () => {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginTop: "64px",
                }}
            >
                {outputList.map((output) => (
                    <CardTemplate key={output.id} content={output} />
                ))}
            </div>
        </div>
    );
};

export default BlogsIndex;
