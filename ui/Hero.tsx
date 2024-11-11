import { Btn } from 'zvijude/btns'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-16">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl text-pretty">
            מערכת ייחודית לחברות ומפעלי
            <span className="text-blue-700"> אלומיניום </span>
          </h1>
          <p className="mt-3 text-lg text-gray-800">
            פתרון ברקודים בטכנולוגיית סריקה מתקדמת, לניטור כל שלבי הביצוע מתחילת המשימה ועד לסיומה
          </p>
        </div>

        <div className="mt-10 relative max-w-5xl mx-auto">
          <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('/hero1.jpg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div className="absolute inset-0 size-full">
            <div className="flex flex-col justify-center items-center size-full">
              <Btn lbl="sdfsd" clr="text" icon="play" />
            </div>
          </div>

          <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
            <div className="bg-white size-48 rounded-lg"></div>
          </div>

          <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div className="bg-white size-48 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
