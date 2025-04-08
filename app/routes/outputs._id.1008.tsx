
// Start of Selection
import IntroductionSlide from "~/contents/output/1008/components/slides/IntroductionSlide";
import TitleSlide from "~/contents/output/1008/components/slides/TitleSlide";
import BackgroundSlide from "~/contents/output/1008/components/slides/BackgroundSlide";
import ConceptSlide from "~/contents/output/1008/components/slides/ConceptSlide";
import TargetSlide from "~/contents/output/1008/components/slides/TargetSlide";
import GameOverviewSlide from "~/contents/output/1008/components/slides/GameOverviewSlide";
import RealConnectionSlide from "~/contents/output/1008/components/slides/RealConnectionSlide";
import FarmerSupportSlide from "~/contents/output/1008/components/slides/FarmerSupportSlide";
import BusinessModelSlide from "~/contents/output/1008/components/slides/BusinessModelSlide";
import ChallengesSlide from "~/contents/output/1008/components/slides/ChallengesSlide";
import SummarySlide from "~/contents/output/1008/components/slides/SummarySlide";

export default function FarmingGames() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 w-full">
            {/* ヘッダー部分 - 固定位置で最前面に */}
            <div className="bg-white/80 backdrop-blur-sm shadow-md">
                <div className="max-w-4xl mx-auto py-4 px-4">
                    <TitleSlide />
                </div>
            </div>

            {/* メインコンテンツ - ヘッダーの下にマージンを設定 */}
            <div className="max-w-4xl mx-auto py-8 px-4 mt-[calc(2rem+var(--header-height,120px))]">
                <div className="space-y-16">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg z-40">
                        <IntroductionSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <BackgroundSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <ConceptSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <TargetSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <GameOverviewSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <RealConnectionSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <FarmerSupportSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <BusinessModelSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <ChallengesSlide />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-8 shadow-lg">
                        <SummarySlide />
                    </div>
                </div>

                <div className="mt-16 text-center text-gray-600 text-sm">
                    <p>© 2025 ポケット農園プロジェクト</p>
                </div>
            </div>
        </div>
    )
}