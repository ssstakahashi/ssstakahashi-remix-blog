import { useEffect, useState } from "react";
import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";

const columns = 4;
const rows = 4;

interface TileType {
    index: number;
    value: number;
}

// 初期タイルを作成する関数
// 初期タイルを作成する関数
const createInitialTiles = () => {
    // タイルの配列を作成
    const tiles = Array.from({ length: rows * columns }, (_, index) => ({
        index, // タイルのインデックス
        value: index, // タイルの値
    }));
    // 作成したタイルの配列を返す
    return tiles;
};

// タイルの位置を入れ替える関数
const swap = (tiles: TileType[], index1: number, index2: number) => {
    // 新しいタイル配列を作成
    const newTiles = [...tiles];
    // 指定された2つのタイルの値を入れ替える
    [newTiles[index1].value, newTiles[index2].value] = [newTiles[index2].value, newTiles[index1].value];
    // 入れ替えた新しいタイル配列を返す
    return newTiles;
};

// タイルをシャッフルする関数
const shuffleTiles = (tiles: { index: number; value: number }[]) => {
    // 1000回繰り返す
    Array.from({ length: 1000 }).forEach(() => {
        // 空のタイルのインデックスを見つける
        const emptyTileIndex = tiles.findIndex((t) => t.value === 0);
        // 隣接するタイルのインデックスを取得する
        const adjacentTileIndices = tiles.map((_, index) => index).filter((index) => isAdjacent(index, emptyTileIndex));
        // 隣接するタイルの中からランダムに1つ選ぶ
        const randomIndex = adjacentTileIndices[Math.floor(Math.random() * adjacentTileIndices.length)];
        // 空のタイルとランダムに選んだタイルを入れ替える
        tiles = swap(tiles, emptyTileIndex, randomIndex);
    });
    // シャッフルされたタイルを返す
    return tiles;
};

// 2つのタイルが隣接しているかどうかを判定する関数
// 2つのタイルが隣接しているかどうかを判定する関数
const isAdjacent = (index1: number, index2: number) => {
    // index1の行番号を計算
    const row1 = Math.floor(index1 / columns);
    // index1の列番号を計算
    const col1 = index1 % columns;
    // index2の行番号を計算
    const row2 = Math.floor(index2 / columns);
    // index2の列番号を計算
    const col2 = index2 % columns;
    // 行と列の差の絶対値の合計が1であれば隣接していると判定
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
};

export default function TileGame() {
    // タイルの状態を管理するためのuseStateフック
    const [tiles, setTiles] = useState(createInitialTiles);
    // カウントの状態を管理するためのuseStateフック
    const [count, setCount] = useState(0);
    // 紙吹雪の表示状態を管理するためのuseStateフック
    const [showConfetti, setShowConfetti] = useState(false);
    // ウィンドウサイズを取得するためのカスタムフック
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    // コンポーネントがマウントされたときにタイルをシャッフルするuseEffectフック
    useEffect(() => {
        setTiles(shuffleTiles([...tiles]));
    }, []);

    // タイルがクリックされたときのハンドラー関数
    // タイルがクリックされたときのハンドラー関数
    const onClickTile = (tile: { index: number; value: number }) => {
        // 空のタイルのインデックスを見つける
        const emptyTileIndex = tiles.findIndex((t) => t.value === 0);
        // クリックされたタイルが空のタイルと隣接しているかどうかを確認する
        if (isAdjacent(tile.index, emptyTileIndex)) {
            // タイルを入れ替える
            const newTiles = swap(tiles, tile.index, emptyTileIndex);
            // 新しいタイルの状態を設定する
            setTiles(newTiles);
            // カウントを1増やす
            setCount((count) => count + 1);
        }
    };

    // リセットボタンがクリックされたときのハンドラー関数
    const onClickReset = () => {
        // タイルをシャッフルする
        setTiles(shuffleTiles([...tiles]));
        // カウントをリセットする
        setCount(0);
        // 紙吹雪を表示する
        setShowConfetti(true);
        // 6秒後に紙吹雪を非表示にする
        setTimeout(() => setShowConfetti(false), 6000);
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
        <div className="flex flex-col justify-center items-center h-screen">
            {showConfetti && <Confetti width={width} height={height} />}
            <table id="table" className="transform scale-200">
                <tbody>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: columns }).map((_, colIndex) => {
                                const tileIndex = rowIndex * columns + colIndex;
                                const tile = tiles[tileIndex];
                                return (
                                    <td
                                        key={tile.index}
                                        data-index={tile.index}
                                        data-value={tile.value}
                                        onClick={() => onClickTile(tile)}
                                        className="text-2xl border-2 border-gray-500 w-24 h-24 text-center hover:bg-gray-300"
                                    >
                                        {tile.value === 0 ? "" : tile.value}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="m-4">
                <span className="text-4xl">{count} 回</span>
            </div>
            <div className="m-2">
                <button onClick={onClickReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    リセット
                </button>
            </div>
        </div>
    );
}

