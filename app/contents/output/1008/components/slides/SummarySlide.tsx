import { CheckCircle2 } from "lucide-react"

export default function SummarySlide() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-emerald-800 mb-6">10. まとめ</h2>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md mb-6">
        <p className="text-gray-700 mb-4">
          本企画「ポケット農園」は、単なるゲームに留まらず、プレイヤーに「育てる喜び」と「食への感謝」を、農家には「新たな販路」と「ファンとの繋がり」を提供する、魅力と社会的意義を兼ね備えた試みです。
        </p>
        <p className="text-gray-700">
          私たちは、この革新的な構想が持つ可能性を強く信じ、プロジェクトを成功に導くべく、情熱を持って実現に取り組んでまいります。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-emerald-50 rounded-xl p-4 shadow-md">
          <div className="flex items-center mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">プレイヤーの価値</h3>
          </div>
          <p className="text-sm text-gray-700">育てる喜び、繋がる楽しさ、食への感謝を通じた新しい体験を提供します。</p>
        </div>

        <div className="bg-emerald-50 rounded-xl p-4 shadow-md">
          <div className="flex items-center mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">農家の価値</h3>
          </div>
          <p className="text-sm text-gray-700">
            新たな販路開拓、ファン獲得による安定収入、直接的な情報発信の場を提供します。
          </p>
        </div>

        <div className="bg-emerald-50 rounded-xl p-4 shadow-md">
          <div className="flex items-center mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" />
            <h3 className="text-lg font-semibold text-emerald-700">社会的価値</h3>
          </div>
          <p className="text-sm text-gray-700">食と農業への関心向上、地産地消の促進、地域活性化に貢献します。</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-emerald-800 mb-4">ご清聴ありがとうございました</h3>
        <p className="text-gray-700">ポケット農園プロジェクトチーム</p>
      </div>
    </div>
  )
}
