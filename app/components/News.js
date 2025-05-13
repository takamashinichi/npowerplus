export default function News() {
  return (
    <section className="bg-[#e0c9ab] py-6 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-3 md:mb-6">お知らせ</h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
            <span className="md:min-w-[100px] text-sm font-semibold">2024/06/08</span>
            <p>Nパワープラス250mlのミニボトル販売開始いたしました。</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
            <span className="md:min-w-[100px] text-sm font-semibold">2023/09/21</span>
            <p>花岡先生が名古屋で農業セミナー開催が決定しました！</p>
          </div>
        </div>
      </div>
    </section>
  );
} 