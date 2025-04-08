import { Link } from "@remix-run/react";

const CardTemplate = (props: { content: any }) => {
    const { content } = props;
    const width = 350;
    const height = 250;

    return (
        <div className="m-2 box-border border border-gray-300 rounded-lg overflow-hidden sm:w-1/2 md:w-1/3 lg:w-1/4 max-h-120">
            <Link to={content.url}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        style={{
                            height: height,
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                        src={content.image}
                        width={width}
                        height={height}
                    />
                </div>
                <div className="p-2.5">
                    <h3 className="m-0 mb-2.5 text-lg">{content.title}</h3>
                    <div className="break-words">
                        <p>{content.description}</p>
                        <table>
                            <tbody>
                                {content.tool &&
                                    <tr>
                                        <td>
                                            ツール
                                        </td>
                                        <td>：</td>
                                        <td className="pl-2">{content.tool}</td>
                                    </tr>}

                                {content.code &&
                                    <tr>
                                        <td>
                                            言語
                                        </td>
                                        <td>：</td>
                                        <td className="pl-2">{content.code}</td>
                                    </tr>}
                                {content.code &&
                                    <tr>
                                        <td>
                                            css
                                        </td>
                                        <td>：</td>
                                        <td className="pl-2">{content.css}</td>
                                    </tr>}
                                {content.ai &&
                                    <tr>
                                        <td>
                                            AI
                                        </td>
                                        <td>：</td>
                                        <td className="pl-2">{content.ai}</td>
                                    </tr>}
                                {content.database &&
                                    <tr>
                                        <td>
                                            DB
                                        </td>
                                        <td>：</td>
                                        <td className="pl-2">{content.database}</td>
                                    </tr>}
                            </tbody>
                        </table>

                    </div>
                </div>
            </Link>
        </div >
    );
};

export default CardTemplate;