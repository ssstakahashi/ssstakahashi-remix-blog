import { useState } from "react";
import {
    Home,
    Users,
    TrendingUp,
    Youtube,
    Building,
    Map,
    PieChart,
    ArrowRight,
    CheckCircle2,
    Briefcase,
} from "lucide-react"

export default function VacantHouseRevitalization() {
    const [activeTab, setActiveTab] = useState("revenue");

    return (

        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8 w-full">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* タイトルスライド */}
                <section className="text-center py-16 px-4 rounded-xl bg-white shadow-lg">
                    <h1 className="text-3xl md:text-5xl font-bold text-orange-700 mb-6">
                        空き家再生×リノベYouTuber連携による
                        <br />
                        地方移住促進事業
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">〜四方良しの持続可能なエコシステム構築〜</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                            <Home className="w-5 h-5 text-orange-600" />
                            <span className="text-orange-800">空き家活用</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                            <Youtube className="w-5 h-5 text-orange-600" />
                            <span className="text-orange-800">リノベYouTuber</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                            <Users className="w-5 h-5 text-orange-600" />
                            <span className="text-orange-800">地方移住</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                            <Building className="w-5 h-5 text-orange-600" />
                            <span className="text-orange-800">地方創生</span>
                        </div>
                    </div>
                </section>

                {/* 事業概要 */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <TrendingUp className="w-8 h-8" />
                        事業概要
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-gray-700 mb-4">
                                本事業は、地方における深刻な「空き家問題」と、高まる「地方移住への関心」という二つの社会的潮流を捉え、両者を繋ぐ革新的な解決策を提供します。
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                空き家バンク登録物件と、高い発信力を持つ「リノベYouTuber」、そして移住希望者をマッチングさせるプラットフォームを構築・運営します。
                            </p>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-orange-600 text-primary-foreground hover:bg-orange-700">
                                詳細を見る <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                            <img

                                src="https://ssstakahashi-storage.studiofoods.net/image/blogs/others/Gemini_Generated_Image_a2jteua2jteua2jt.jpeg"
                                alt="空き家再生イメージ"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                                <p className="text-white font-medium">空き家をリノベーションで魅力的な住まいへ</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 事業背景・課題 */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <Map className="w-8 h-8" />
                        事業背景・課題
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-red-500">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-red-700">空き家問題の深刻化</h3>
                                <p className="text-gray-700">
                                    全国の空き家率は増加傾向にあり、特に地方部では管理不全や景観悪化、防犯上の問題を引き起こしています。空き家バンク制度は存在するものの、情報発信力の弱さや物件の状態から、成約に至らないケースが多く存在します。
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-blue-500">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-blue-700">移住ニーズの多様化</h3>
                                <p className="text-gray-700">
                                    働き方改革やライフスタイルの変化に伴い、地方移住への関心が高まっています。特に若年層やファミリー層を中心に、個性的で愛着の持てるリノベーション物件や古民家への需要が見られますが、物件探しや初期費用、改修のハードルが存在します。
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-purple-500">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-purple-700">クリエイターエコノミーの拡大</h3>
                                <p className="text-gray-700">
                                    YouTubeをはじめとする動画プラットフォームの普及により、個人の発信力が大きな影響を持つようになりました。リノベYouTuberは、その専門性とエンターテイメント性で多くのファンを獲得しており、新たな活動機会や収益モデルを模索しています。
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-green-500">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-green-700">自治体の課題</h3>
                                <p className="text-gray-700">
                                    多くの地方自治体が移住促進と空き家対策を重要課題と認識し、様々な施策を講じていますが、より効果的で魅力的なアプローチが求められています。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 事業内容・ソリューション */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <Briefcase className="w-8 h-8" />
                        事業内容・ソリューション
                    </h2>
                    <div className="relative">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-orange-50 to-orange-100 border-none">
                                <div className="p-6 pt-6">
                                    <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        1
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-orange-800">プラットフォーム運営</h3>
                                    <p className="text-gray-700">
                                        自治体、リノベYouTuber、移住希望者を繋ぐ専用ウェブサイト及び関連システムを構築・運営します。
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-orange-50 to-orange-100 border-none">
                                <div className="p-6 pt-6">
                                    <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        2
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-orange-800">リノベーションパートナー認定</h3>
                                    <p className="text-gray-700">
                                        リノベーションスキル、実績、チャンネル影響力などを基準に、自治体と連携して信頼できるリノベYouTuberを認定します。
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-orange-50 to-orange-100 border-none">
                                <div className="p-6 pt-6">
                                    <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        3
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-orange-800">物件マッチング・企画支援</h3>
                                    <p className="text-gray-700">
                                        自治体（空き家バンク）から提供された情報に基づき、リノベーションに適した空き家物件をパートナーに紹介します。
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-orange-50 to-orange-100 border-none">
                                <div className="p-6 pt-6">
                                    <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        4
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-orange-800">リノベーション実行・プロモーション</h3>
                                    <p className="text-gray-700">
                                        パートナーによるリノベーション工事の実行をサポートし、そのプロセスを記録・編集してYouTube等で効果的に発信します。
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-orange-50 to-orange-100 border-none">
                                <div className="p-6 pt-6">
                                    <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        5
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-orange-800">賃貸・売買仲介</h3>
                                    <p className="text-gray-700">
                                        リノベーションが完了した物件の入居者（賃貸）を募集・仲介します。将来的には、入居者への売却や直接的な売買仲介も視野に入れます。
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-orange-50 to-orange-100 border-none">
                                <div className="p-6 pt-6">
                                    <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        6
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-orange-800">コミュニティ形成支援</h3>
                                    <p className="text-gray-700">
                                        移住者、地域住民、パートナー間の交流を促進するイベント企画や情報提供を行います。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ビジネスモデル */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <PieChart className="w-8 h-8" />
                        ビジネスモデル
                    </h2>
                    <div className="w-full">
                        <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2">
                            <button
                                onClick={() => setActiveTab("revenue")}
                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'revenue' ? 'bg-background text-foreground shadow-sm' : ''}`}
                            >
                                収益源
                            </button>
                            <button
                                onClick={() => setActiveTab("cost")}
                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === 'cost' ? 'bg-background text-foreground shadow-sm' : ''}`}
                            >
                                コスト構造
                            </button>
                        </div>
                        <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pt-6 ${activeTab === 'revenue' ? 'block' : 'hidden'}`}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">賃貸仲介手数料</h3>
                                        <p className="text-gray-600">成約時に貸主及び借主から規定の手数料を受領。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">売買仲介手数料</h3>
                                        <p className="text-gray-600">
                                            将来的に売買仲介を行う場合、成約時に売主及び買主から規定の手数料を受領。
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">リノベーションコーディネート料</h3>
                                        <p className="text-gray-600">YouTuberへの物件紹介、企画支援、プロモーション支援に対するフィー。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">プラットフォーム利用料</h3>
                                        <p className="text-gray-600">認定パートナー（YouTuber）からの月額または年額利用料。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">広告・タイアップ収入</h3>
                                        <p className="text-gray-600">
                                            プラットフォームサイトや連携するYouTubeチャンネルでの企業広告掲載、タイアップ企画。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 pt-6 ${activeTab === 'cost' ? 'block' : 'hidden'}`}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-orange-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">プラットフォーム開発・保守・運用費</h3>
                                        <p className="text-gray-600">システム開発、サーバー費用、保守管理費用など</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-orange-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">人件費</h3>
                                        <p className="text-gray-600">事業企画、運営、マーケティング、エンジニア等</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-orange-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">マーケティング・プロモーション費用</h3>
                                        <p className="text-gray-600">広告宣伝費、イベント開催費用など</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-orange-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">オフィス関連費用</h3>
                                        <p className="text-gray-600">地代家賃、水道光熱費、通信費など</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-orange-100 p-2 rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">法務・許認可関連費用</h3>
                                        <p className="text-gray-600">宅建業免許維持費、顧問弁護士費用など</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 提供価値（四方良し） */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <Users className="w-8 h-8" />
                        提供価値（四方良し）
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-blue-50 to-blue-100 border-none">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center gap-2">
                                    <Users className="w-5 h-5" />
                                    移住希望者へ
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <span>魅力的な住まい：プロの視点でリノベーションされた住宅に、比較的手頃な初期費用で入居可能</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <span>透明性と安心感：リノベーションの全プロセスを動画で確認可能</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <span>将来の選択肢：賃貸として住みながら、将来的に購入する選択肢も検討可能</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-red-50 to-red-100 border-none">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-red-700 flex items-center gap-2">
                                    <Youtube className="w-5 h-5" />
                                    リノベYouTuberへ
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                        <span>社会的信用と実績：自治体連携による「お墨付き」を得て、活動の信頼性が向上</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                        <span>新たな収益源：リノベーションフィー、賃貸成功報酬、動画コンテンツからの広告収入増加</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                        <span>安定した案件機会：プラットフォームからの継続的な物件紹介</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-green-50 to-green-100 border-none">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-green-700 flex items-center gap-2">
                                    <Home className="w-5 h-5" />
                                    空き家所有者へ
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span>資産価値の向上：放置されていた空き家が再生され、賃貸収入や売却益を生む資産へと変化</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span>管理負担の軽減：入居者が見つかることによる管理の手間やコスト削減</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-md bg-gradient-to-br from-purple-50 to-purple-100 border-none">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-purple-700 flex items-center gap-2">
                                    <Building className="w-5 h-5" />
                                    地方自治体へ
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                                        <span>空き家問題の解決：活用困難だった空き家の削減に貢献</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                                        <span>効果的な移住促進：リノベ動画という魅力的なコンテンツによるPR効果</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                                        <span>地域経済の活性化：移住者増加による消費拡大、関係人口の創出</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 事業推進体制 */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <Users className="w-8 h-8" />
                        事業推進体制
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">内部体制</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">事業統括</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">自治体連携</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">パートナー（YouTuber）連携</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">移住者サポート・マーケティング</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">システム開発・運用</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-orange-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">管理部門（法務・財務）</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">外部連携</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">自治体：空き家バンク担当部署との緊密な連携協定</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">リノベYouTuber：パートナーシップ契約</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">宅地建物取引業者：仲介業務に関する提携</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">建築士・施工業者：リノベーション品質監修</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="bg-blue-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">地域NPO・団体：移住者サポート、コミュニティ形成</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 将来展望 */}
                <section className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                        <TrendingUp className="w-8 h-8" />
                        将来展望
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-t-4 border-orange-400">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">短期（1～2年）</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>モデル地域での実証事業開始</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>プラットフォーム（MVP）の構築・運用開始</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>初期パートナー数名との連携、数件の再生・賃貸マッチング事例創出</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-t-4 border-orange-600">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">中期（3～5年）</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>対応エリアの段階的拡大（複数自治体との連携）</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>認定パートナー数の増加とネットワーク化</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>賃貸仲介事業の安定化、売買仲介機能の強化</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-t-4 border-orange-800">
                            <div className="p-6 pt-6">
                                <h3 className="text-xl font-semibold mb-3 text-orange-700">長期（5年～）</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>全国の主要な移住関心エリアへの展開</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>リノベーション資材・設備の共同購入スキーム構築</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ArrowRight className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                                        <span>移住後の定着支援サービスの拡充</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* まとめ */}
                <section className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl shadow-lg p-8 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">まとめ</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg mb-4">
                                本事業は、空き家問題と地方移住ニーズを結びつけ、リノベYouTuberの創造性と発信力を活用した革新的なプラットフォームを提供します。
                            </p>
                            <p className="text-lg mb-6">
                                空き家所有者、リノベYouTuber、移住希望者、地方自治体の「四方良し」の持続可能なエコシステムを構築し、空き家問題の解決と地方創生の推進に貢献します。
                            </p>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-orange-600 hover:bg-gray-100">
                                お問い合わせ <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <img
                                src="https://ssstakahashi-storage.studiofoods.net/image/blogs/others/Gemini_Generated_Image_q073cjq073cjq073.jpeg"
                                alt="リノベーション完成イメージ"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                                <p className="text-white font-medium">新たな暮らしの選択肢を提供します</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}