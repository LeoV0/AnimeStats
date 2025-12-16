export default function JapaneseSection({
  japaneseWord = "アニメを探索する",
  frenchTranslation = "Explorer les animés",
}: {
  japaneseWord?: string;
  frenchTranslation?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 text-white">
      <h2 className="mb-4 text-6xl font-extrabold tracking-wider text-center sm:text-8xl">
        {japaneseWord}
      </h2>
      <p className="text-xl sm:text-2xl text-neutral-400">
        {frenchTranslation}
      </p>
    </div>
  );
}
