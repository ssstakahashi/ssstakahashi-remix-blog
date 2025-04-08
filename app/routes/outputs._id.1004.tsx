import { useEffect, useState } from "react";
import Confetti from "react-confetti";


export type TitleType = {
    titleNumber: number;
    op01: number;
    op02: number;
    op03: number;
    op04: number;
    op05: number;
    title: string;
};

export const titles: TitleType[] = [
    {
        titleNumber: 1,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '私は挫折をしてもめげない。 簡単にはあきらめない。',
    },
    {
        titleNumber: 2,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '私は努力家だ。',
    },
    {
        titleNumber: 3,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: 'いちど始めたことは、必ずやり遂げる。',
    },
    {
        titleNumber: 4,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '私は動勉だ。絶対にあきらめない。',
    },
    {
        titleNumber: 5,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '重要な課題を克服するために、挫折を乗り越えた経験験がある。',
    },
    {
        titleNumber: 6,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '新しいアイデアやプロジェクトが出てくると、ついそちらに気を取られてしまう。',
    },
    {
        titleNumber: 7,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '目標を設定しても、すぐべつの目標に乗り換えることが多い。',
    },
    {
        titleNumber: 8,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '達成まで何力月もかかることに、ずっと集中して取り組むことがなかなかできない。',
    },
    {
        titleNumber: 9,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '興味の対象が毎年のように変わる。',
    },
    {
        titleNumber: 10,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: 'アイデアやプロジェクトに夢中になっても、すぐに興味を失ってしまったことがある。',
    },
];

export type ResultType = {
    // titleNumber: number;
    radio0: string;
    radio1: string;
    radio2: string;
    radio3: string;
    radio4: string;
    radio5: string;
    radio6: string;
    radio7: string;
    radio8: string;
    radio9: string;
    score: number;
};

export const initialResult = {
    radio0: "",
    radio1: "",
    radio2: "",
    radio3: "",
    radio4: "",
    radio5: "",
    radio6: "",
    radio7: "",
    radio8: "",
    radio9: "",
    score: 0,
};

export default function Grit() {

    const [result, setResult] = useState(initialResult);
    // 紙吹雪の表示状態を管理するためのuseStateフック
    const [showConfetti, setShowConfetti] = useState(false);
    // ウィンドウサイズを取得するためのState
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const resultSelector = () => {

        let score = 0;
        for (let i = 0; i <= 9; i++) {
            const title = titles[i] as TitleType;
            const radioValue = result[`radio${i}` as keyof ResultType];
            if (radioValue) {
                score += Number(title[radioValue as keyof TitleType]);
            }
        }
        score = Math.round(score * 1000) / 1000 / 5;
        setResult({ ...result, score: score });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resultSelector();
        // 紙吹雪を表示する
        setShowConfetti(true);
        // 6秒後に紙吹雪を非表示にする
        setTimeout(() => setShowConfetti(false), 6000);
    };
    const onClick_clear = () => {
        const clearedResult = { ...initialResult, score: 0 };
        setResult(clearedResult);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            };
            // 初期サイズを設定
            handleResize();

            // リサイズイベントリスナーを追加
            window.addEventListener('resize', handleResize);

            // クリーンアップ関数でリスナーを削除
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="p-8">
            {showConfetti && <Confetti width={width} height={height} />}
            <div
                className="
            font-OpenSans 
            flex 
            flex-col 
            justify-center 
            items-center
        "
            >
                <h2 className="text-2xl font-bold">
                    「やり抜く力」をはかるグリット·スケール
                </h2>
                <p className="text-sm">
                    当てはまる箇所を選択してください。算出された数値（１０点満点）があなたのグリット·スコアとなります。
                </p>
                <div>
                    <ul className="text-sm text-left">
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                まったく当てはまらない:
                            </span>{' '}
                            <span>1</span>
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                あまり当てはまらない:
                            </span>{' '}
                            <span>2</span>
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                いくらか当てはまる:
                            </span>{' '}
                            <span>3</span>
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                かなり当てはまる:
                            </span>{' '}
                            4
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                非常に当てはまる:
                            </span>{' '}
                            5
                        </li>
                    </ul>
                </div>
            </div>

            <table className="font-OpenSans w-full text-sm border border-gray-300 divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th align="center"></th>
                        <th align="center" className="border-r">
                            項目
                        </th>
                        <th align="center">1</th>
                        <th align="center">2</th>
                        <th align="center">3</th>
                        <th align="center">4</th>
                        <th align="center">5</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-300">
                    {titles.map((x, index) => {
                        return (
                            <tr key={x.titleNumber} style={{ height: '40px' }}>
                                <td
                                    align="center"
                                    style={{
                                        width: '32px',
                                        padding: '0 12px',
                                    }}
                                >
                                    {x.titleNumber}
                                </td>
                                <td className="w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4 border-l border-r px-2 py-1">
                                    {x.title}
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op01'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                'op01' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op01',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op01',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op02'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                'op02' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op02',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op02',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op03'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                'op03' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op03',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op03',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op04'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                'op04' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op04',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op04',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op05'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                'op05' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op05',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op05',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="mt-8">
                <div className="text-center mb-8">
                    <h2>
                        あたたのグリット・スコアは、{result.score}
                        点です！！
                    </h2>
                </div>
                <div className="buttonArea space-x-4 text-center">
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-4 py-2 rounded-md w-1/4"
                        onClick={onClick_clear}
                    >
                        リセット
                    </button>
                    <input
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-1/4"
                        onClick={(e) =>
                            onSubmit(
                                e as unknown as React.FormEvent<HTMLFormElement>,
                            )
                        }
                        value="確定"
                    />
                </div>
            </div>
        </div>

    );
};
