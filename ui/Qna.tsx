import { title } from 'process'

export default function Qna() {
  const data = [
    {
      title: '1',
      description:
        'מה שמייחד את המערכת שלנו הוא היכולת המתקדמת לעקוב באופן מדויק אחר כל שלב בתהליך ההתקנה, שבוצע על ידי המתקין בשטח. כל משימה מקבלת ברקוד ייעודי, אותו ניתן לסרוק בקלות בכל שלב של הפרויקט. כך, לכל פרט במערכת שלכם יש מעקב ייחודי שמאפשר לראות בזמן אמת את סטטוס ההתקנה שלו – בין אם הוא בשלב התכנון, באמצע התקנה, או כבר הושלם. היתרון המרכזי של המערכת הוא היכולת שלכם לקבל תמונת מצב מלאה ומפורטת על כל שלב בפרויקט, ולהבטיח שהעבודה מתבצעת בצורה יעילה ושקופה לחלוטין',
    },
    {
      title: '2',
      description:
        'קבלת נתונים אמינים ב-100% היא המוטו שלנו. לשם כך יצרנו מערכת מתקדמת המתרגמת את כל המידע המוזן אליה דרך סריקות הברקודים שמתבצעות בשטח על ידי הקבלנים לאחר סיום עבודתם. המערכת מרכזת ומעבדת את הנתונים לתוך טבלאות מסודרות, המאפשרות לכם לנתח את הביצועים, להסיק מסקנות ולייעל את זמני הפרויקט. כך תוכלו לקבל תמונה ברורה ואמינה בזמן אמת על התקדמות הפרויקט ולבצע התאמות לשיפור התהליכים',
    },
    {
      title: '3',
      description: `תוכנת המעקב שפיתחנו מאפשרת שליטה ובקרה מלאה על תהליך הזמנת החומרים מהמפעל לשטח. כל מוצר במפעל מסומן ב'ברקוד שינוע' ייחודי, אותו סורקים בזמן העמסתו על הרכב, ולאחר מכן בשטח על ידי משתמש מורשה שמאשר את קבלת המוצר. בעזרת התוכנה, תוכלו לעקוב אחר כל שלב בתהליך השינוע בזמן אמת, לוודא שכל המוצרים הגיעו ליעדם, ולשפר את ניהול הפרויקטים והאספקה באופן יעיל ומבוקר`,
    },
    {
      title: '4',
      description: `פיתחנו יומן משימות אישי המיועד למנהלי עבודה, מנהלי פרויקטים, מנהלי ביצוע וקבלנים. ביומן תוכלו לנהל את כל הפעילויות שלכם בצורה מרוכזת – להוסיף פגישות עתידיות, משימות לביצוע, תזכורות וסטטוס ביצוע בזמן אמת. בנוסף, המערכת מאפשרת שיתוף משימות בין כל המשתמשים השייכים לפרויקט, כך שניתן לחלק ולתאם משימות בצורה יעילה בין חברי הצוות השונים הנמצאים במערכת. יומן המשימות הופך את ניהול הפרויקטים שלכם לארגון חכם וקל יותר, עם שליטה מלאה על כל הפרטים`,
    },
    {
      title: '5',
      description: `מערכת חכמה המחשבת תשלומים לקבלן בהתאם לכמות הביצוע של כל משימה. המערכת תבצע עבורכם חישוב אוטומטי לתשלום לקבלן, בהתאם להגדרות התשלום שתגדירו בתחילת הפרויקט במערכת. פתרון זה יחסוך לכם זמן יקר, ימנע סכסוכים כספיים עם הקבלנים, וימנע עצירות עבודה. בנוסף, המערכת מספקת פתרון אמין ומדויק לניהול תשלומים בקבלנות, ומבטיחה שקיפות ומעקב מלא על ביצועי הקבלן והתשלומים המגיעים לו`,
    },
    {
      title: '6',
      description: `האפליקציה שלנו כוללת שעון נוכחות מובנה עבור כל המשתמשים בפרויקט, כולל עובדי קבלן, מנהלי עבודה, צוות המפעל והלוגיסטיקה. בעזרת שעון הנוכחות, ניתן לעקוב בצורה מדויקת ואוטומטית אחר זמני העבודה של כל המשתתפים בפרויקט, ולהבטיח תיעוד מסודר ואמין של שעות העבודה. הפתרון משפר את ניהול כוח האדם ומאפשר מעקב אפקטיבי על נוכחות הצוות בשטח`,
    },
  ]

  return (
    <div className="mb-40">
      <h3 className="text-700 mb-4">יתרונות ופתרונות</h3>
      <div className="grid grid-cols-3 gap-20 ">
        {data.map((item) => (
          <section key={item.title} className=" ">
            <h3 className="text-800 mb-8">{item.title}</h3>
            <p>{item.description}</p>
          </section>
        ))}
      </div>
    </div>
  )
}