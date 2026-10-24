'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  ArrowUpLeft,
  Award,
  BadgeCheck,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'

const diplomas = [
  { number: '01', title: 'دبلومة السياحة الشاملة', english: 'Comprehensive Tourism', image: '/diploma-tourism.png', description: 'تأهيل عملي شامل للعمل في شركات السياحة والسفر.', color: 'bg-[#eef8fc]', icon: Globe2, details: ['أماديوس Basic وAdvanced', 'الحجز أونلاين للطيران والفنادق', 'تصميم باكدجات شهر العسل والرحلات العائلية والشبابية', 'السياحة الدينية والعلاجية والتعليمية', 'التأشيرات: العمرة وشنجن', 'التعامل مع الموردين وأنواعهم', 'أساسيات رحلات الكروز'] },
  { number: '02', title: 'دبلومة التخصص', english: 'Travel Consultant', image: '/diploma-consultant.png', description: 'التأهيل للعمل كـ Travel Consultant محترف.', color: 'bg-[#f1f8fb]', icon: Users, details: ['أماديوس Basic', 'الحجز أونلاين للطيران والفنادق', 'تصميم الباكدجات السياحية', 'السياحة الدينية: العمرة والحج', 'التأشيرات: العمرة وشنجن', 'أساسيات رحلات الكروز'] },
  { number: '03', title: 'دبلومة الطيران', english: 'Airline Staff', image: '/diploma-aviation.png', description: 'إعداد عملي للعمل كموظف طيران وإدارة حجوزات المسافرين.', color: 'bg-[#edf5ff]', icon: Plane, details: ['أماديوس Basic وAdvanced', 'الحجز أونلاين للطيران', 'مهارات التواصل مع شركات الطيران', 'حجز وإدارة حجوزات الجروبات'] },
  { number: '04', title: 'دبلومة الأوبريشن والفنادق', english: 'Hotel Operations', image: '/diploma-hotel.png', description: 'إتقان تشغيل الفنادق والبرامج السياحية وإدارة الموردين.', color: 'bg-[#f0f8fb]', icon: MapPin, details: ['التعاقدات مع الفنادق', 'أنواع الفنادق والغرف والإطلالات والتصنيف', 'تصميم الباكدجات السياحية', 'السياحة الدينية والعلاجية والتعليمية', 'التأشيرات: العمرة وشنجن', 'الموردون أونلاين وأوفلاين', 'أساسيات رحلات الكروز'] },
  { number: '05', title: 'دبلومة التأشيرات', english: 'Visa Specialist', image: '/diploma-visa.png', description: 'احتراف تجهيز ملفات السفر والتأشيرات باحترافية ودقة.', color: 'bg-[#f0f8fb]', icon: ShieldCheck, details: ['أنواع التأشيرات ومتطلبات كل دولة', 'تجهيز ملف العميل ومراجعة المستندات', 'تأشيرات الشنجن وأمريكا ودول الخليج', 'حجز المواعيد ومتابعة الطلبات', 'التعامل مع العملاء ورفض التأشيرات'] },
]

const systems = [
  { name: 'Amadeus', arabic: 'أماديوس', description: 'النظام الأكثر انتشاراً في شركات الطيران والسياحة حول العالم.', image: '/system-amadeus.png', accent: 'from-[#153b57] to-[#267c85]' },
  { name: 'Galileo', arabic: 'جاليليو', description: 'حلول حجز عالمية تمنحك مرونة وسرعة في خدمة المسافرين.', image: '/system-galileo.png', accent: 'from-[#0d5361] to-[#38a59b]' },
  { name: 'Sabre', arabic: 'سابـر', description: 'منصة احترافية لإدارة الحجوزات والتسعير والتذاكر.', image: '/system-sabre.png', accent: 'from-[#1d365c] to-[#7585b0]' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedDiploma, setSelectedDiploma] = useState<(typeof diplomas)[number] | null>(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#eaf7fb] text-[#102c3e]">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-[#1B2B65]/95 text-white shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <a href="#top" className="flex items-center" aria-label="العودة للرئيسية">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6L9f6YfKK4QrHdz5Cs49hfkmT8nbnM.png" alt="شعار أكاديمية خطوة" className="h-20 w-32 rounded-xl object-contain" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/90 lg:flex">
            <a href="#top" className="text-white">الرئيسية</a><a href="#about" className="transition hover:text-[#42B0D8]">من نحن</a><a href="#diplomas" className="transition hover:text-[#42B0D8]">الدبلومات</a><a href="#systems" className="transition hover:text-[#42B0D8]">أنظمة الحجز</a><a href="#why" className="transition hover:text-[#42B0D8]">لماذا خطوة؟</a><a href="#contact" className="transition hover:text-[#42B0D8]">تواصل معنا</a>
          </nav>
          <a href="https://wa.me/201111165368?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D8%AE%D8%B7%D9%88%D8%A9%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AF%D8%A8%D9%84%D9%88%D9%85%D8%A7%D8%AA" className="hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#259d66] sm:flex"><MessageCircle className="size-4" /> تواصل واتساب</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 lg:hidden" aria-label="فتح القائمة">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-white/10 bg-[#1B2B65] px-6 py-5 lg:hidden"><a href="#top">الرئيسية</a><a href="#about">من نحن</a><a href="#diplomas">الدبلومات</a><a href="#systems">أنظمة الحجز</a><a href="#why">لماذا خطوة؟</a><a href="#contact">تواصل معنا</a></nav>}
      </header>

      <section id="top" className="relative flex min-h-[680px] items-end bg-[#1B2B65] pt-28 text-white">
        <div className="hero-pan absolute inset-0 bg-[url('/khatwa-world-hero.png')] bg-cover bg-center bg-no-repeat" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,61,.9)_0%,rgba(16,48,101,.72)_42%,rgba(27,43,101,.3)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,25,57,.52)_0%,transparent_42%,rgba(8,25,57,.55)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 lg:grid-cols-[1fr_360px] lg:items-end lg:px-10 lg:pb-28">
          <div className="max-w-2xl rounded-[2rem] bg-[#102c3e]/55 p-6 backdrop-blur-[2px] md:p-8"><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#42B0D8]/50 bg-[#42B0D8]/10 px-4 py-2 text-xs font-bold text-[#f0d594]"><Sparkles className="size-3.5" /> مستقبلك يبدأ بخطوة</div><h1 className="max-w-2xl text-5xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-6xl">أكاديمية خطوة<br /><span className="text-[#42B0D8]">بوابتك لسوق العمل السياحي!</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-white/80">لسنا مجرد قاعات تدريبية.. نحن ننقلك مباشرةً إلى قلب السوق!</p><div className="mt-7 max-w-xl rounded-2xl border border-[#42B0D8]/40 bg-[#42B0D8]/10 p-4 text-sm font-bold leading-7 text-[#d8f5ff]">الأكاديمية الوحيدة في الشرق الأوسط التي توفر تدريبًا عمليًا داخل شركة سياحة حقيقية!</div><div className="mt-9 flex flex-wrap gap-4"><a href="#diplomas" className="inline-flex items-center gap-2 rounded-full bg-[#42B0D8] px-7 py-3.5 font-bold text-[#1B2B65] transition hover:bg-[#edce8a]">استكشف الدبلومات <ArrowLeft className="size-4" /></a><a href="https://wa.me/201111165368?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D8%AE%D8%B7%D9%88%D8%A9%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AF%D8%A8%D9%84%D9%88%D9%85%D8%A7%D8%AA" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 font-bold transition hover:bg-white/10"><MessageCircle className="size-4" /> تواصل عبر الواتساب</a></div></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#eaf7fb] to-transparent" />
      </section>

      <section id="about" className="bg-[#eaf7fb] px-5 py-24 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div className="overflow-hidden rounded-[2rem] border border-[#42B0D8]/35 bg-[#eaf7fb] p-5 shadow-xl shadow-[#1B2B65]/10"><div className="rounded-[1.5rem] bg-[#d8f1f8] p-3"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6L9f6YfKK4QrHdz5Cs49hfkmT8nbnM.png" alt="شعار أكاديمية خطوة" className="mx-auto w-full max-w-sm rounded-2xl object-contain" /></div><div className="mt-5 rounded-2xl border border-[#42B0D8]/50 bg-white/70 p-5 text-center text-[#1B2B65]"><p className="text-sm font-bold text-[#1B2B65]">خبرة عملية تبدأ قبل التخرج</p><p className="mt-2 text-sm leading-7 text-[#1B2B65]">تعليم متخصص، معايشة ميدانية، وفرص حقيقية في صناعة السياحة والطيران.</p></div></div><div><p className="mb-3 text-sm font-bold text-[#42B0D8]">عن أكاديمية خطوة</p><h2 className="text-4xl font-bold leading-tight text-[#1B2B65] md:text-5xl">حيث تبدأ مسيرتك المهنية من قلب سوق العمل الحقيقي</h2><p className="mt-6 leading-8 text-[#1B2B65]">نحن لسنا مجرد مركز تدريبي يمنح شهادات ورقية، بل نحن الكيان التعليمي الأول والوحيد في الشرق الأوسط الذي يكسر الفجوة بين الدراسة النظرية والواقع العملي. تأسست أكاديمية خطوة لتكون المزيج المثالي بين التعليم الأكاديمي المتخصص والمعايشة الميدانية الفعلية في صناعة السياحة والطيران.</p><div className="mt-5 rounded-2xl border-r-4 border-[#42B0D8] bg-[#eef8fc] p-5 text-base font-bold leading-8 text-[#102c3e] shadow-sm md:text-lg">تدريب عملي شامل على أنظمة الحجز العالمية (Amadeus, Galileo, Sabre)، وإدارة العمليات السياحية، حجز الفنادق، استخراج التأشيرات، وتنفيذ برامج السفر المتكاملة.</div><div className="mt-6 grid grid-cols-2 gap-3"><div className="group relative h-28 overflow-hidden rounded-2xl"><img src="/diploma-tourism.png" alt="إدارة البرامج السياحية" className="size-full object-cover transition group-hover:scale-105" /><div className="absolute inset-0 bg-[#1B2B65]/55" /><span className="absolute inset-x-3 bottom-3 text-base font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.8)]">البرامج السياحية</span></div><div className="group relative h-28 overflow-hidden rounded-2xl"><img src="/diploma-hotel.png" alt="حجز الفنادق" className="size-full object-cover transition group-hover:scale-105" /><div className="absolute inset-0 bg-[#1B2B65]/55" /><span className="absolute inset-x-3 bottom-3 text-base font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.8)]">حجز الفنادق</span></div><div className="group relative h-28 overflow-hidden rounded-2xl"><img src="/diploma-aviation.png" alt="أنظمة الطيران والحجز" className="size-full object-cover transition group-hover:scale-105" /><div className="absolute inset-0 bg-[#1B2B65]/55" /><span className="absolute inset-x-3 bottom-3 text-base font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.8)]">الطيران والحجز</span></div><div className="group relative h-28 overflow-hidden rounded-2xl"><img src="/diploma-consultant.png" alt="إدارة التأشيرات والسفر" className="size-full object-cover transition group-hover:scale-105" /><div className="absolute inset-0 bg-[#1B2B65]/55" /><span className="absolute inset-x-3 bottom-3 text-base font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.8)]">التأشيرات والسفر</span></div></div><div className="mt-8 grid gap-5 sm:grid-cols-2"><div className="rounded-2xl border border-[#42B0D8]/35 bg-[#F8FAFC] p-6 shadow-sm"><h3 className="text-lg font-bold text-[#102c3e]">رؤيتنا</h3><p className="mt-3 text-base leading-8 text-[#1B2B65]">أن نكون الوجهة الأولى لإعداد كوادر محترفة مصقولة بالخبرة العملية.</p></div><div className="rounded-2xl border border-[#42B0D8]/50 bg-[#eef8fc] p-6 shadow-sm"><h3 className="text-lg font-bold text-[#102c3e]">رسالتنا</h3><p className="mt-3 text-base leading-8 text-[#1B2B65]">تمكين الشباب العربي من إتقان كافة مجالات السياحة والسفر وأنظمة الحجز العالمية عبر تطبيق عملي 100% ومعايشة ميدانية حقيقية.</p></div></div><div className="mt-8"><h3 className="text-2xl font-bold text-[#102c3e]">لماذا خطوة هي اختيارك الأول؟</h3><ul className="mt-5 grid gap-4 text-base leading-8 text-[#1B2B65] sm:grid-cols-2"><li>المعايشة الميدانية داخل شركة سياحة حقيقية.</li><li>خبراء صناعة من كبرى شركات الطيران والسياحة.</li><li>دعم التوظيف والاستعداد للمقابلات.</li><li>شهادة خبرة معتمدة قبل التخرج.</li></ul></div></div></div></section><section id="systems" className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><div className="mb-12 max-w-2xl"><p className="mb-3 text-sm font-bold text-[#42B0D8]">تدريب عملي على أنظمة NDC وGDS</p><h2 className="text-4xl font-bold tracking-tight md:text-5xl">أنظمة الحجز العالمية</h2><p className="mt-4 leading-8 text-[#1B2B65]">إتقانك لأنظمة الحجز يمنحك أفضلية حقيقية ويؤهلك للعمل في كبرى شركات السياحة والطيران.</p></div><div className="grid gap-5 md:grid-cols-3">{systems.map((system) => <article key={system.name} className="group overflow-hidden rounded-2xl border border-[#dbe7e5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-48 overflow-hidden"><img src={system.image} alt={`تدريب عملي على نظام ${system.name}`} className="size-full object-cover transition duration-500 group-hover:scale-105" /><div className={`absolute inset-0 bg-gradient-to-t ${system.accent} opacity-80`} /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white"><div><h3 className="text-3xl font-bold">{system.name}</h3><p className="mt-1 text-sm text-white/80">{system.arabic}</p></div><span className="grid size-11 place-items-center rounded-xl bg-white/20 backdrop-blur-sm"><Plane className="size-5 -rotate-45" /></span></div></div><div className="p-6"><p className="leading-7 text-[#1B2B65]">{system.description}</p><a href="#diplomas" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#42B0D8]">اكتشف برامجنا <ArrowLeft className="size-4" /></a></div></article>)}</div></section>

      <section id="diplomas" className="bg-[#edf5f3] px-5 py-20 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-bold text-[#42B0D8]">طريقك إلى الاحتراف</p><h2 className="text-4xl font-bold tracking-tight md:text-5xl">الدبلومات التدريبية</h2></div><p className="max-w-sm leading-7 text-[#1B2B65]">اختر المسار الذي يناسب طموحك وابدأ رحلة التعلم العملية.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{diplomas.map((diploma, index) => { const Icon = diploma.icon; return <button key={diploma.title} onClick={() => setSelectedDiploma(diploma)} className={`group overflow-hidden rounded-2xl border border-[#d7e7ef] bg-white text-right shadow-sm transition hover:-translate-y-1 hover:border-[#42B0D8] hover:shadow-xl ${index === 0 ? 'lg:col-span-2' : ''}`}><div className="relative h-52 overflow-hidden"><img src={diploma.image} alt={diploma.title} className="size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#1B2B65]/80 via-transparent to-transparent" /><span className="absolute bottom-4 right-5 text-sm font-bold text-white">{diploma.number}</span><span className="absolute bottom-3 left-5 grid size-10 place-items-center rounded-xl bg-white/90 text-[#1B2B65]"><Icon className="size-5" /></span></div><div className="p-6"><p className="mb-1 text-xs font-bold text-[#42B0D8]">{diploma.english}</p><h3 className="text-2xl font-bold text-[#1B2B65]">{diploma.title}</h3><p className="mt-3 max-w-lg leading-7 text-[#1B2B65]">{diploma.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1B2B65]">اضغط لمعرفة التفاصيل <ArrowLeft className="size-4 transition group-hover:-translate-x-1" /></span></div></button>})}</div></div></section>

      <section id="why" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10"><div><p className="mb-3 text-sm font-bold text-[#42B0D8]">المميزات بتاعت خطوة</p><h2 className="text-4xl font-bold leading-tight md:text-5xl">أكاديمية خطوة.. بوابتك المباشرة<br /><span className="text-[#42B0D8]">لسوق العمل السياحي!</span></h2><p className="mt-5 leading-8 text-[#1B2B65]">لسنا مجرد قاعات تدريبية.. نحن ننقلك مباشرةً إلى قلب السوق!</p><p className="mt-4 font-bold text-[#1B2B65]">مع خطوة.. الخبرة بتبدأ قبل التخرج!</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1B2B65] px-6 py-3.5 font-bold text-white transition hover:bg-[#263a83]">احجز مقعدك الآن <ArrowLeft className="size-4" /></a></div><div className="grid gap-4 sm:grid-cols-2">{[{icon: Plane, title: 'تطبيق عملي 100%', text: 'تدريب مباشر على عملاء حقيقيين وحجوزات فعلية.', image: '/benefit-practical.png'},{icon: MapPin, title: 'معايشة ميدانية', text: 'تدريب عملي داخل شركة سياحة فور الانتهاء من الدبلومة.', image: '/benefit-field.png'},{icon: Users, title: 'دعم التوظيف', text: 'توفير فرص عمل وتعيين حقيقية للمتميزين.', image: '/benefit-employment.png'},{icon: Award, title: 'شهادة خبرة معتمدة', text: 'وثيقة موثقة تثبت ممارستك الفعلية وتدعم سيرتك الذاتية.', image: '/benefit-certificate.png'}].map((item) => {const Icon = item.icon; return <article key={item.title} className="group overflow-hidden rounded-2xl border border-[#42B0D8]/40 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#42B0D8] hover:shadow-lg"><div className="relative h-32 overflow-hidden"><img src={item.image} alt={item.title} className="size-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#102c3e]/75 via-[#102c3e]/15 to-transparent" /><span className="absolute right-4 top-4 grid size-11 place-items-center rounded-xl bg-white/90 text-[#42B0D8] shadow-sm"><Icon className="size-5" /></span><h3 className="absolute inset-x-4 bottom-3 text-lg font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,.85)]">{item.title}</h3></div><p className="p-5 text-base font-bold leading-8 text-[#1B2B65]">{item.text}</p></article>})}</div></section>

      <section id="contact" className="bg-[#1B2B65] px-5 py-20 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold text-[#42B0D8]">خطوتك الأولى تبدأ هنا</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">سجّل اهتمامك<br />وابدأ رحلتك</h2>
            <p className="mt-5 max-w-md leading-8 text-white/65">اترك بياناتك وسيتواصل معك فريقنا لمساعدتك في اختيار الدبلومة المناسبة.</p>
            <div className="mt-8 flex flex-col gap-4 text-sm text-white/75">
              <a href="tel:01111165368" className="flex items-center gap-3 transition hover:text-white"><Phone className="size-4 text-[#42B0D8]" /> 01111165368</a>
              <span className="flex items-center gap-3"><Mail className="size-4 text-[#42B0D8]" /> info@khatwaaa.com</span>
            </div>
          </div>
          <form 
            onSubmit={(event) => { 
              event.preventDefault(); 
              const formData = new FormData(event.currentTarget);
              const name = formData.get('name') as string;
              const phone = formData.get('phone') as string;
              const diploma = formData.get('diploma') as string;
              const notes = formData.get('notes') as string;

              const whatsappMessage = `مرحباً، أود التسجيل في أكاديمية خطوة:%0A- الاسم: ${name}%0A- الهاتف: ${phone}%0A- الدبلومة: ${diploma}%0A- ملاحظات: ${notes || 'لا يوجد'}`;
              
              window.open(`https://wa.me/201111165368?text=${whatsappMessage}`, '_blank');
              setSubmitted(true); 
            }} 
            className="rounded-3xl bg-white p-7 text-[#123d50] shadow-2xl md:p-9"
          >
            {submitted ? (
              <div className="flex min-h-[330px] flex-col items-center justify-center text-center">
                <span className="grid size-16 place-items-center rounded-full bg-[#e9f4f2] text-[#42B0D8]">
                  <Check className="size-8" />
                </span>
                <h3 className="mt-5 text-2xl font-bold">تم تجهيز طلبك بنجاح</h3>
                <p className="mt-2 text-[#6c7e89]">جاري تحويلك إلى الواتساب لإتمام التسجيل مع الفريق.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-bold text-[#42B0D8]">إرسال تسجيل آخر</button>
              </div>
            ) : (
              <>
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">سجّل معنا</h3>
                    <p className="mt-1 text-sm text-[#6c7e89]">املأ البيانات وسنتواصل معك</p>
                  </div>
                  <span className="grid size-11 place-items-center rounded-xl bg-[#f8f1df] text-[#b18536]">
                    <Star className="size-5" />
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">
                    الاسم بالكامل
                    <input required name="name" className="rounded-xl border border-[#dbe7e5] bg-[#F8FAFC] px-4 py-3 font-normal outline-none transition focus:border-[#42B0D8]" placeholder="اكتب اسمك الكامل" />
                  </label>
                  <label className="grid gap-2 text-sm font-bold">
                    رقم الهاتف
                    <input required name="phone" type="tel" className="rounded-xl border border-[#dbe7e5] bg-[#F8FAFC] px-4 py-3 font-normal outline-none transition focus:border-[#42B0D8]" placeholder="01xxxxxxxxx" />
                  </label>
                </div>
                <label className="mt-4 grid gap-2 text-sm font-bold">
                  اختر الدبلومة
                  <select name="diploma" className="rounded-xl border border-[#dbe7e5] bg-[#F8FAFC] px-4 py-3 font-normal outline-none focus:border-[#42B0D8]">
                    <option>اختر الدبلومة المناسبة</option>
                    {diplomas.map((d) => <option key={d.title}>{d.title}</option>)}
                  </select>
                </label>
                <label className="mt-4 grid gap-2 text-sm font-bold">
                  ملاحظات (اختياري)
                  <textarea name="notes" rows={3} className="resize-none rounded-xl border border-[#dbe7e5] bg-[#F8FAFC] px-4 py-3 font-normal outline-none focus:border-[#42B0D8]" placeholder="هل لديك أي استفسار؟" />
                </label>
                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 font-bold text-white transition hover:bg-[#259d66]" type="submit">
                  <MessageCircle className="size-5" /> تواصل معنا عبر الواتساب
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <a href="https://wa.me/201111165368?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9%20%D8%AE%D8%B7%D9%88%D8%A9%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%AF%D8%A8%D9%84%D9%88%D9%85%D8%A7%D8%AA" aria-label="تواصل عبر الواتساب" className="fixed bottom-5 left-5 z-30 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#1ebe5d]"><MessageCircle className="size-5" /> تواصل عبر الواتساب</a>

      <footer className="bg-[#061f2e] px-5 py-8 text-white/60 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm md:flex-row"><span>© 2025 أكاديمية خطوة. جميع الحقوق محفوظة.</span><a href="tel:01111165368" className="flex items-center gap-2 transition hover:text-white"><Phone className="size-4" /> 01111165368</a><div className="flex items-center gap-5"><a href="#" aria-label="Instagram" className="text-xs font-bold transition hover:text-white">IG</a><a href="#" aria-label="LinkedIn" className="text-xs font-bold transition hover:text-white">in</a><a href="#" aria-label="WhatsApp" className="transition hover:text-white"><MessageCircle className="size-4" /></a></div><span className="flex items-center gap-2"><Clock3 className="size-4" /> تدريب يفتح لك الأبواب</span></div></footer>

      {selectedDiploma && <div className="fixed inset-0 z-50 grid place-items-center bg-[#061f2e]/70 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="diploma-title" onClick={() => setSelectedDiploma(null)}><div className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-start justify-between"><div><p className="text-sm font-bold text-[#42B0D8]">{selectedDiploma.english}</p><h2 id="diploma-title" className="mt-1 text-2xl font-bold text-[#123d50]">{selectedDiploma.title}</h2></div><button onClick={() => setSelectedDiploma(null)} className="rounded-full bg-[#edf5f3] p-2 text-[#123d50]" aria-label="إغلاق"><X className="size-5" /></button></div><p className="mt-5 leading-7 text-[#1B2B65]">{selectedDiploma.description}</p><div className="mt-6 grid gap-3">{selectedDiploma.details.map((detail) => <div key={detail} className="flex items-center gap-3 rounded-xl bg-[#f6faf9] p-3 text-sm font-medium text-[#123d50]"><Check className="size-4 text-[#42B0D8]" /> {detail}</div>)}</div><a href="#contact" onClick={() => setSelectedDiploma(null)} className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-[#123d50] px-5 py-3.5 font-bold text-white">احجز مكانك <ArrowLeft className="size-4" /></a></div></div>}
    </main>
  )
}
