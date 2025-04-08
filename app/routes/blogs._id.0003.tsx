import { Link } from "@remix-run/react";

export default function RevisedR06EntertainmentExpensePoints() {

  return (
    <div className="text-left">
      <div className="separator clear-both text-center flex justify-center">
        <div>
          <img className="border-0" data-original-height="500" data-original-width="392" height="320" src="https://ssstakahashi-storage.studiofoods.net/image/books/books_cover_javascript_01.jpg" width="250" />
        </div>
      </div>
      <div className="separator clear-both text-center">
        <br /></div>
      ＜Amazonの記述から抜粋＞<br />
      JavaScriptを使用したWebブラウザゲームの製作ノウハウを解説する入門書。<br />
      【本書のセールスポイント】<br />
      ［1］JavaScriptで「面白く」「見栄えの良い」Webブラウザゲームを「短いコード」で「簡単に」開発できる<br />
      ［2］サンプルゲームはスマホにも対応<br />
      ［3］アクション系ゲームにも応用できる物理エンジン（衝突判定等）付き<br />
      ［4］サンプルゲームのダウンロードサービス<br />
      ［5］サンプルゲームはダウンロードしてスグに試せる！<br />
      <br />
      ～～～～～～～～～～～～～～～～～～<br />
      <br />
      前半部分はとても分かりやすく説明されていて、コードもすべて記載されているので何も困らずに学習を進められる。<br />
      ただ、紹介されているゲームのコードはすべて記載されているが、解説が部分的にしかないため、どのような処理をしているのか、ここに記載する意味はどのようなものなのかがわかりずらい。<br />
      分かりずらいポイントはあったとしても、その分からない部分を自分で補っていくのがプログラミングの学習だと考えれば、おすすめの書籍だ。<br />
      <br />
      ゲームのコードは、オブジェクト（キャラクター）の動きを制御するために様々なコードの記述方法があることを教えてくれる。それらを応用していけば、ゲームに限らず他のアプリ開発時に使えるであろう。

      <div>
        学習としてわたくしも本書に紹介されているゲームをjavascriptをreactのtypescriptに書き換えて作ってみた。
      </div>

      <div className="mt-4">
        ↓こちらはパズルゲーム。

        <Link to="/outputs/1002"><p><u>タイルゲームのアプトプット</u></p></Link>
      </div>
      <div>[github]<br />
        <Link to={'https://github.com/ssstakahashi/books-sample-javascript-title_puzzle'}>
          https://github.com/ssstakahashi/books-sample-javascript-title_puzzle
        </Link>
      </div>
      <div className="mt-4">↓さらに、荷物移動ゲーム。</div>
      <Link to={"/outputs/1003"}><p><u>荷物移動ゲームのアプトプット</u></p></Link>

      <div>[github]</div>

      <Link to={"https://github.com/ssstakahashi/books-sample-javascript-carry_it"}>https://github.com/ssstakahashi/books-sample-javascript-carry_it</Link>

    </div>
  )
}
