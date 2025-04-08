import { useActionData, Form, json } from "@remix-run/react";
import { ActionFunction, redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const corp = formData.get("corp");
    const corpName = formData.get("corpName");
    const corpAddress = formData.get("corpAddress");

    // データベースに保存する処理をここに追加
    console.log(corp, corpName, corpAddress);

    return redirect("/success");
};

export default function ContinuedRegistration() {
    const actionData = useActionData();
    console.log(actionData);

    return (
        <div>
            <h1>会社継続登記</h1>
            <Form method="post">
                <input type="text" name="corp" style={{ width: '100%', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }} />
                <input type="text" name="corpName" style={{ width: '100%', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }} />
                <input type="text" name="corpAddress" style={{ width: '100%', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }} />
                <button type="submit">送信</button>
            </Form>
        </div>
    );
}