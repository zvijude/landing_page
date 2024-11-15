import { Btn } from 'zvijude/btns'

export default function Hero() {
  return (
    <>
      <div
        className="relative h-screen bg-img bg-overlay text-white"
        style={{ backgroundImage: `url(${src})` }}>
        <p className="text-700 font-semibold underline underline-offset-4 absolute top-4 left-4">
          Roi Crm
        </p>

        <div className="abs-center mobile:w-[calc(100%-3rem)]">
          <div className="lg:max-w-2xl text-center mx-auto">
            <h1 className="text-800 font-bold text-pretty">
              מערכת ייחודית לחברות ומפעלי אלומיניום
            </h1>
            <p className="mt-3 text-500">
              פתרון ברקודים בטכנולוגיית סריקה מתקדמת, לניטור כל שלבי הביצוע מתחילת המשימה ועד לסיומה
            </p>
          </div>

          <div className="mt-12 relative lg:max-w-5xl">
            <img src="/hero1.jpg" alt="" className="rounded-md max-h-[450px]" />

            <Btn
              lbl="נגן סרטון"
              clr="text"
              icon="play"
              className="abs-center"
              size="large"
              flipIcon
              popoverTarget="video"
            />
          </div>
        </div>
      </div>

      <span className="pop p-0 w-full h-96 lg:w-[900px] lg:h-[600px]" popover="auto" id="video">
        <iframe
          className="size-full"
          src="https://www.youtube.com/embed/upY0HdXzBGI?si=1mv86e9WyHSg53K0"
          title="Roi Crm"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </span>
    </>
  )
}
const src = 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=1000'
