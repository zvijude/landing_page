import Icon from 'zvijude/icon'

export default function FeatureTabs() {
  const features = [
    {
      id: 1,
      icon: 'head-side-brain',
      title: 'אוטומציה',
      description:
        'אוטומציה של משימות במערכת  מאפשרת ייעול משמעותי של תהליכי העבודה. המערכת מתזמנת ומנהלת משימות בצורה אוטומטית, משגרת תזכורות והתראות בהתאם לשלבי הפרויקט, ומבצעת מעקב אחר הביצועים בזמן אמת. כך, כל משימה מוקצית ונעקבת באופן אוטומטי, מבלי צורך במעקב ידני, מה שמפחית טעויות, חוסך זמן יקר ומשפר את התיאום בין כל המשתמשים בפרויקט',
      image: '/users.png',
      alt: 'AI measuring a window',
    },
    {
      id: 2,
      icon: 'calendar-clock',
      title: 'מעקב מדויק',
      description:
        'המערכת  מאפשרת מעקב מדויק אחר כל שלב בתהליך ההתקנה, מהתחלה ועד לסיום. בעזרת ברקודים ייחודיים לכל פריט ומשימה, תוכלו לצפות בזמן אמת בהתקדמות ההתקנות, לדעת איזה שלב הושלם ומה עדיין נותר לביצוע. המערכת מספקת לכם שקיפות מלאה ומבטיחה שכל פריט בפרויקט מנוהל ומפוקח בצורה יעילה, כך שתמיד תהיו מעודכנים בכל רגע על מצב ההתקנה בשטח',
      image: '/parts.png',
      alt: 'AI measuring a window',
    },
    {
      id: 3,
      icon: 'clipboard-list-check',
      title: 'ניהול ואישור התקנות',
      description:
        'המערכת  לניהול ופיקוח קבלני משנה מספקת פתרון יעיל לשליטה ובקרה על כל הפעילות של קבלני המשנה בפרויקט. המערכת מאפשרת להקצות משימות לקבלני משנה, לעקוב אחר ביצוען בזמן אמת, ולוודא שהן מבוצעות בהתאם ללוח הזמנים והדרישות שהוגדרו. בנוסף, תוכלו לעקוב אחר נוכחות קבלני המשנה, לדווח על ביצועים, ולבצע חישובים אוטומטיים לתשלום בהתאם לכמות הביצועים. המערכת גם מאפשרת ניהול שקוף של התקשורת והעבודה עם קבלני המשנה, ובכך מונעת עיכובים וסכסוכים ומבטיחה עבודה חלקה ויעילה',
      image: '/placeholder.svg?height=400&width=600',
      alt: 'AR view of a window installation',
    },
  ] as any[]

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold  mb-12 text-blue-950">
        מערכת לניהול פרויקטים עד לפרט הכי קטן
      </h2>
      <div className="">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {features.map((item) => (
            <div key={item.id}>
              <div className="grid gap-4 p-8 transition-colors duration-200 ease-in-out text-start">
                <Icon
                  name={item.icon}
                  type="reg"
                  className="size-8"
                  flip={item.icon === 'head-side-brain'}
                />
                <h3 className="text-500 text-blue-950">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
