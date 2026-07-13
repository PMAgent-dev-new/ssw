// 全ロケール辞書のバレル。言語追加時はここ（＋client.ts/server.ts）を更新するだけで
// 各セクションコンポーネントに反映される。日本語(ja)を既定フォールバックとする。
import ja from './ja';
import en from './en';
import zh from './zh';
import vi from './vi';
import id from './id';
import tl from './tl';
import my from './my';
import th from './th';
import km from './km';
import lo from './lo';
import ne from './ne';

export const dictionaries = { ja, en, zh, vi, id, tl, my, th, km, lo, ne };

export type AppLocale = keyof typeof dictionaries;

/** 現在ロケールに対応する辞書を返す（未知ロケールは日本語へフォールバック）。 */
export function pickLocale(current: string): typeof ja {
  // 各辞書は as const でリテラル型が異なるため unknown 経由で索引アクセスする
  // （キー構造は ja と同一。返り値の型は ja に合わせ、実体は選択ロケールの翻訳）。
  return (dictionaries as unknown as Record<string, typeof ja>)[current] ?? ja;
}

/** UI言語スイッチャー用の選択肢。各言語はその言語自身の呼称で表示する。 */
export const LOCALE_OPTIONS: { code: AppLocale; label: string }[] = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'tl', label: 'Filipino' },
  { code: 'my', label: 'မြန်မာ' },
  { code: 'th', label: 'ไทย' },
  { code: 'km', label: 'ខ្មែរ' },
  { code: 'lo', label: 'ລາວ' },
  { code: 'ne', label: 'नेपाली' },
];
