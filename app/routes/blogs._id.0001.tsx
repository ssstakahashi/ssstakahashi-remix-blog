
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { Form, useLoaderData, useFetcher } from "@remix-run/react";
import type { FunctionComponent } from "react";
import { json } from "@remix-run/node";
import { blogList } from "~/contents/blog/blog_list";

// export const action = async ({ params, request }: ActionFunctionArgs) => {
//   // invariant(params.contactId, "Missing contactId param");
//   // const formData = await request.formData();
//   // return updateContact(params.contactId, {
//   //   favorite: formData.get("favorite") === "true",
//   // });
// };


// export const loader = async ({ params }: LoaderFunctionArgs) => {
//   // console.log(params)
//   // // invariant(params.blogId, "Missing blogId param");
//   // // console.log(params)
//   // // const blog = await blogList.find((blog) => blog.blogId === params.blogId);
//   // const blog = await blogList[0]
//   // if (!blog) {
//   //   throw new Response("Not Found", { status: 404 });
//   // }
//   // return json({ blog });
// };

export default function ConsumerPriceContent() {

  return (
    <div className="text-left">
      <iframe
        allowFullScreen
        frameBorder="0"
        height="800"
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        src="https://lookerstudio.google.com/embed/reporting/d05416a5-84ab-456a-8cec-a0c5aee71ded/page/XwEBE"
        className="border-0 w-3/5 mx-auto"
      ></iframe>
      <div>
        <p>
          消費者物価指数は、全国の世帯が購入するモノやサービスの価格の変化を総合的に示す指標です。
          家計の消費パターンを固定し、その費用が物価変動によってどう変わるかを数値化して毎月作成されます。
          結果は経済政策や年金改定などに活用されます。
        </p>
        <p>
          統計データは簡単に取得できますが、理解できるような形に整形する必要があります。
          今回はGoogleが提供しているLookerStudio（無料）を利用して、消費者物価指数のデータを可視化しました。
        </p>
        <h2 className="mt-8 font-bold text-2xl">1970年代</h2>
        <p>
          1970年代からの数値が取得できるので、流れを見てみると、1981年までは、当たり前のように5%を超えていました。
          1970年には、大阪万博が開催され、1972年には、沖縄が日本に復帰しました。また、
          1971年のニクソンショックによって、1ドル360円から経過措置をを経て、1973年に変動相場制に移行した。その際、1ドルは180円前後まで円高が進んでいました。
          同年、1973年には、オイルショックが発生し、1974年にはインフレ率が25%近く上昇して、戦後初めてのマイナス成長になり高度経済成長が終わったといわれています。
          1979年には、第二次オイルショックが発生しました。
        </p>
        <h2 className="mt-8 font-bold text-2xl">1980年代</h2>
        <p>
          1980年には、インフレ率8%を超えましたが、次第に落ち着きをとり戻し、1981年には、インフレ率が5%を切りました。
          1985年にドル高是正に向けてG5各国の協調行動、「プラザ合意」が発表されました。
          その結果、円高が進行し、国内景気は低迷することなり、日銀は低金利政策を続けました。
          この低金利局面と金融機関による過度の貸出を要因とした、不動産・株式などの資産価格が高騰し、いわゆるバブル景気が起こります。
          1989年に当時の日経平均株価が最高値をつけました。なお、1985年にNTTが民営化、1987年に国鉄が民営化されています。
          1989年には、消費税3%が導入され、第二次オイルショックから下落傾向にあったインフレ率が、一転して上昇し3%前後となります。
        </p>
        <h2 className="mt-8 font-bold text-2xl">1990年代</h2>
        <p>
          1990年にはイラクによるクウェート侵攻などもあり、インフレ率が高止まりとなります。
          そして、1990年から1年9ヶ月続く総量規制（土地関連融資の抑制について）の行政指導により、不動産価格の急激な下落をもたらしバブル崩壊の一因となります。
          1997年には山一證券の破綻やアジア通過危機がある中で、消費税が5%(上昇率2%)に上がり、インフレ率も1997年だけが2%前後の上昇となりました。
          1990年代後半の不景気とデフレ状態から1999年には日本銀行がゼロ金利政策を実施しはじめました。 インフレ率を見ると
          1990年代後半からゼロを挟んだ状態が20年から30年続き「失われた30年」という言われる時代となります。
        </p>
        <h2 className="mt-8 font-bold text-2xl">2000年代</h2>
        <p>
          2008年は、ロシアのグルジア侵攻などによる小麦、大豆などの穀物価格を中心に輸入食品価格が高騰し、石油製品と並んでインフレ率を押し上げました。
          また、2008年にはアメリカの投資銀行のリーマンブラザーズが破綻しました影響で、2009年には景気後退から反転してデフレとなります。
        </p>
        <h2 className="mt-8 font-bold text-2xl">2010年代</h2>
        <p>
          2011年には東日本大震災など大きな事件事故は起きていますが、インフレ率とって大きな変動要因となったのは、2014年の消費税率アップになります。
          消費税が8%(変動率3%)に上昇し、インフレ率も3%を超えてきました。
        </p>
        <h2 className="mt-8 font-bold text-2xl">2020年代</h2>
        <p>
          2020年以降はコロナの影響で大幅な景気後退からデフレとなった後、円安による輸入食品・エネルギーの上昇により2023年にはインフレ率4%となりましたが、2024年現在では2%代と落ち着いています。
          直近の2024年7月には、「生鮮食品とエネルギーを除く総合」では、2%を切り1.9%、輸入食品の影響等を除いた「食料とエネルギーを除く総合」では1.6%まで落ちてきており、再びデフレの流れに入りつつあります。
        </p>
        <h2 className="mt-8 font-bold text-2xl">インフレのメリット・デメリット</h2>
        <p>
          状況や条件に応じて社会に良い影響や悪い影響を及ぼすため、 インフレの「良い面」と「悪い面」を理解する必要があります。<br />
          インフレの「良い面」<br />
          ・経済活動が活発になり、好景気につながる。<br />
          ・企業の利益が増え、従業員の給与が上昇する。<br />
          ・消費者の購買力が上がり、商品やサービスの購入が増える。<br />
          ・借金の実質的な負担が軽減される。<br />
          ・政府の税収が増加し、財政改善につながる。<br />
          インフレの「悪い面」<br />
          ・お金の価値が下がり、預貯金の価値が低下する。<br />
          ・物価が上昇し、生活費が増加する。<br />
          ・固定収入の人々（年金生活者など）の購買力が低下する。<br />
          ・企業のコストが増加し、利益が圧迫される。<br />
          ・経済の不確実性が増し、投資が減少する可能性がある。<br />
        </p>
        <p>
          インフレは、金利や物価などさまざまな要素が関連した総体的な傾向です。<br />
          一般的には、緩やかなインフレが社会にとって良いとされており、「年率2％程度のインフレが理想的」という考え方が世界で主流になっています。
        </p>
        <h2 className="mt-8 font-bold text-2xl">日本と米国の指標を用いる指標の違い</h2>
        <table className="border-collapse border border-black w-full">
          <thead>
            <tr>
              <th className="border border-black"></th>
              <th className="border border-black text-center">日本</th>
              <th className="border border-black text-center">米国</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black text-center">総合</td>
              <td className="border border-black text-center">全対象品目</td>
              <td className="border border-black text-center">全対象品目</td>
            </tr>
            <tr>
              <td className="border border-black text-center">コア</td>
              <td className="border border-black text-center">生鮮食品を除く</td>
              <td className="border border-black text-center">生鮮食品及びエネルギー除く</td>
            </tr>
            <tr>
              <td className="border border-black text-center">コアコア</td>
              <td className="border border-black text-center">生鮮食品及びエネルギー除く</td>
              <td className="border border-black text-center">食料（酒類を除く）及びエネルギーを除く総合</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <p>
            消費者物価の基調を把握するために、「生鮮食品を除く総合」や「生鮮食品及びエネルギーを除く総合」指数が使われます。
            「生鮮食品」は天候要因で値動きが激しいこと、「エネルギー」（ガソリン、電気代等）は海外要因で変動する原油価格の影響を受けやすい要因を除外するためです。
          </p>
          <p>
            また、アメリカなどで重視される「食料（酒類を除く）及びエネルギーを除く総合」指数も使用されます。
          </p>
        </div>
        <div className="mt-4">
          参考:<br />
          <a href="https://lookerstudio.google.com/u/0/reporting/d05416a5-84ab-456a-8cec-a0c5aee71ded/page/XwEBE?s=javhjM9l_ac" target="_blank" className="text-blue-500">消費者物価指数グラフ</a><br />
          <a href="https://www.nikkei.com/article/DGXZQOCA037EJ0T00C21A8000000/" target="_blank" className="text-blue-500">ニクソンショックとは（日経新聞）</a><br />
          <a href="https://www.nomura.co.jp/terms/japan/hu/plaza_a.html" target="_blank" className="text-blue-500">プラザ合意 (野村證券)</a><br />
          <a href="https://toyokeizai.net/articles/-/656909" target="_blank" className="text-blue-500">総量規制(東洋経済ONLINE)</a>
        </div>
      </div>
    </div>
  )
}
