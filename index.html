# congenial-engine
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>منصة توازُن | المساعد الرقمي لحياة متوازنة</title>
    <link rel="stylesheet" href="style.css">
    <!-- استدعاء خط ألمنيوم/تجريفي حديث من جوجل -->
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>

    <!-- الشريط العلوي -->
    <nav class="navbar">
        <div class="logo">توازُن <span>.</span></div>
        <ul class="nav-links">
            <li><a href="#dashboard" class="active">لوحة التحكم</a></li>
            <li><a href="#generator">مولد الأنشطة</a></li>
            <li><a href="#reminders">التذكيرات</a></li>
        </ul>
        <button class="btn-primary" onclick="triggerQuickBreak()">استراحة سريعة الآن</button>
    </nav>

    <main class="container">
        <!-- قسم الترحيب ومؤشر التوازن -->
        <section id="dashboard" class="card dashboard-card">
            <h2>مرحباً بك، كيف حال توازنك اليوم؟ 👋</h2>
            <p>المساعد الرقمي يعمل في الخلفية لمساعدتك على فصل العمل عن الحياة الأسرية.</p>
            
            <div class="balance-stats">
                <div class="stat-box work">
                    <h3>ساعات العمل</h3>
                    <p id="work-hours">5.5 ساعة</p>
                </div>
                <div class="stat-box rest">
                    <h3>فترات الراحة</h3>
                    <p id="rest-breaks">3 استراحات</p>
                </div>
                <div class="stat-box family">
                    <h3>وقت العائلة</h3>
                    <p id="family-time">1.5 ساعة</p>
                </div>
            </div>
        </section>

        <!-- مولد الأنشطة العائلية الذكي -->
        <section id="generator" class="card">
            <h2>🎯 مولّد الأنشطة الأسرية الذكي</h2>
            <p>اختر الوقت المتاح لديك حالياً، وسيتم اقتراح نشاط عالي الجودة للقيام به فوراً:</p>

            <div class="time-selector">
                <button onclick="generateActivity(15)">15 دقيقة</button>
                <button onclick="generateActivity(30)">30 دقيقة</button>
                <button onclick="generateActivity(60)">ساعة فأكثر</button>
            </div>

            <div id="activity-result" class="activity-box hidden">
                <h3 id="activity-title">اسم النشاط</h3>
                <p id="activity-desc">وصف النشاط سيظهر هنا...</p>
                <span id="activity-badge" class="badge">الفئة</span>
            </div>
        </section>

        <!-- نافذة التذكيرات والوضع العائلي -->
        <section id="reminders" class="card">
            <h2>🔔 التذكيرات الذكية وتفعيل "الوضع العائلي"</h2>
            <p>فعل "الوضع العائلي" لكتم إشعارات العمل والتركيز مع أسرتك ذهنيًا.</p>

            <div class="toggle-container">
                <label class="switch">
                    <input type="checkbox" id="familyModeToggle" onchange="toggleFamilyMode()">
                    <span class="slider round"></span>
                </label>
                <span class="toggle-label" id="mode-status">الوضع العائلي: غير مفعل</span>
            </div>

            <div id="notification-banner" class="notification hidden">
                <p id="notification-text">تذكير: حان وقت غلق الحاسوب والانضمام للعائلة!</p>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>


// مفتاح API الخاص بك (احرص على تأمينه في المشاريع الحقيقية عبر خادم خلفي)
const API_KEY = 'YOUR_GEMINI_API_KEY';

// دالة توليد الأنشطة باستخدام الذكاء الاصطناعي
async function generateActivity(minutes) {
    const activityResult = document.getElementById('activity-result');
    const titleEl = document.getElementById('activity-title');
    const descEl = document.getElementById('activity-desc');
    const badgeEl = document.getElementById('activity-badge');

    // إظهار حالة الجلب
    activityResult.classList.remove('hidden');
    titleEl.innerText = "جاري ابتكار نشاط مخصص...";
    descEl.innerText = "المساعد الذكي يفكر في أفضل نشاط يناسب وقتك الآن...";
    badgeEl.innerText = "ذكاء اصطناعي • " + minutes + " دقيقة";

    // الأوامر الموجهة للذكاء الاصطناعي (Prompt)
    const prompt = `اقترح نشاطاً عائلياً مبتكراً وممتعاً يجمع بين الأهل أو الأطفال يستغرق تقريباً ${minutes} دقيقة.
    أعطني النتيجة بصيغة JSON فقط تحتوي على المفاتيح التالية باللغة العربية:
    {
      "title": "عنوان النشاط",
      "desc": "وصف جذاب ومختصر للنشاط وطريقة القيام به",
      "category": "فئة النشاط (مثل: ترفيه، ثقافة، نشاط بدني، تواصل)"
    }`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            })
        });

        if (!response.ok) throw new Error("فشل الاتصال بالمحرك");

        const data = await response.json();
        const aiResponse = JSON.parse(data.candidates[0].content.parts[0].text);

        // تحديث الواجهة بالنشاط الذكي المولّد
        titleEl.innerText = aiResponse.title;
        descEl.innerText = aiResponse.desc;
        badgeEl.innerText = aiResponse.category + " • " + minutes + " دقيقة";

    } catch (error) {
        console.warn("تعذر الجلب من المحرك، تم التحويل للخيار الاحتياطي:", error);
        // في حال وجود خطأ أو عدم وجود مفتاح API، يتم اختيار نشاط محلي احتياطي
        fallbackLocalActivity(minutes);
    }
}

// قائمة احتياطية محلياً عند عدم توفر الإنترنت أو مفتاح API
const localActivities = {
    15: { title: "تحدي الألغاز السريعة", desc: "العبوا لعبة تخمين الكلمات أو الألغاز الذهنية السريعة لإشعال جو من المرح.", category: "مرح وتسلية" },
    30: { title: "تحضير وجبة خفيفة", desc: "شاركوا في المطبخ لتحضير عصير طازج أو سلطة فواكه بروح الفريق الواحد.", category: "مشاركة" },
    60: { title: "سينما منزلية", desc: "حضّروا الفشار وشاهدوا فيلماً وثائقياً أو عائلياً ملهماً واغلقوا الإضاءة.", category: "ترفيه" }
};

function fallbackLocalActivity(minutes) {
    const selected = localActivities[minutes] || localActivities[15];
    document.getElementById('activity-title').innerText = selected.title;
    document.getElementById('activity-desc').innerText = selected.desc;
    document.getElementById('activity-badge').innerText = selected.category + " • " + minutes + " دقيقة (وضع أوفلاين)";
}

// وظيفة تفعيل/إلغاء الوضع العائلي
function toggleFamilyMode() {
    const isChecked = document.getElementById('familyModeToggle').checked;
    const statusText = document.getElementById('mode-status');
    const notification = document.getElementById('notification-banner');
    const notificationText = document.getElementById('notification-text');

    if (isChecked) {
        statusText.innerText = "الوضع العائلي: مفعّل 🟢 (تم كتم إشعارات العمل)";
        statusText.style.color = "#10b981";
        notificationText.innerText = "✨ أحسنت! تم حظر تنبيهات المهام. استمتع بوقتك الذهبي مع أسرتك الآن.";
        notification.classList.remove('hidden');
    } else {
        statusText.innerText = "الوضع العائلي: غير مفعل ⚪";
        statusText.style.color = "#0f172a";
        notification.classList.add('hidden');
    }
}

// زر الاستراحة السريعة
function triggerQuickBreak() {
    alert("⏰ المساعد الذكي: لقد عملت بجد! خذ استراحة لمدة 5 دقائق، اشرب الماء ومدد جسدك.");
}




:root {
    --primary-color: #2c3e50;
    --accent-color: #27ae60;
    --bg-color: #f4f7f6;
    --card-bg: #ffffff;
    --text-color: #333333;
    --text-light: #7f8c8d;
    --border-radius: 12px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Tajawal', sans-serif;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

/* الشريط العلوي */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--card-bg);
    padding: 1rem 5%;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
}

.logo span { color: var(--accent-color); }

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
}

/* الكروت والتنسيق العام */
.container {
    max-width: 900px;
    margin: 30px auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.card {
    background: var(--card-bg);
    padding: 25px;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}

.card h2 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

/* مؤشرات التوازن */
.balance-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.stat-box {
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    background: #f8f9fa;
}

.stat-box.work { border-top: 4px solid #e74c3c; }
.stat-box.rest { border-top: 4px solid #f39c12; }
.stat-box.family { border-top: 4px solid var(--accent-color); }

.stat-box p {
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 5px;
}

/* أزرار مولد الأنشطة */
.time-selector {
    display: flex;
    gap: 10px;
    margin: 15px 0;
}

button {
    padding: 10px 20px;
    border: none;
    background: #eef2f5;
    color: var(--primary-color);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
}

button:hover, .btn-primary {
    background: var(--accent-color);
    color: white;
}

.activity-box {
    margin-top: 15px;
    padding: 15px;
    background: #eef9f2;
    border-right: 4px solid var(--accent-color);
    border-radius: 6px;
}

.badge {
    display: inline-block;
    background: var(--accent-color);
    color: white;
    font-size: 0.8rem;
    padding: 3px 8px;
    border-radius: 4px;
    margin-top: 10px;
}

/* زر الوضع العائلي */
.toggle-container {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 15px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
}

.switch input { opacity: 0; width: 0; height: 0; }

.slider {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px; width: 18px;
    left: 4px; bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider { background-color: var(--accent-color); }
input:checked + .slider:before { transform: translateX(24px); }

/* التنبيهات */
.notification {
    margin-top: 15px;
    padding: 12px;
    background-color: #fff3cd;
    color: #856404;
    border-radius: 6px;
}

.hidden { display: none; }


