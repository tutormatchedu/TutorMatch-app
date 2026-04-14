/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Map, 
  BarChart3, 
  AlertTriangle, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Apple, 
  Play, 
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  Facebook,
  Instagram,
  Music
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida/ADBb0ugjDuCafSVsz_tfVjZig4h6dbi2uFBX7tGdSwOBXUdaGRHnzK-Fzbx3NRu-Catgs4Di67QmSDfMvm3ZbWW3RpmsVg_VhczmmwdFfeTu2c1Jo4XoWqW3r0HChCCYzSAEfj9gTGb7kkNfmBGpgUiajaN3ZkC1MMAxdTutZVm_BY49lYhsJhf8gnd0CcInNDXij-7mWRkxalq8ycQxAs8coM4tEDy51JbSOYNB7TpwLXt1p7rhDy09p8v11_HgIEAhXjL5D6kSdNbOMw",
  student: "https://cafefcdn.com/zoom/700_438/203337114487263232/2023/10/29/avatar1698567833837-1698567834396443548504.jpg",
  parentApp: "https://lsx.vn/wp-content/uploads/2023/02/Thu-tuc-mo-trung-tam-gia-su-nam-2023.png",
  tutorApp: "https://nld.mediacdn.vn/2016/sk-pic-04-1478591153260.jpg",
  avatar1: "https://lh3.googleusercontent.com/aida-public/AB6AXuC92WuiIa3sMWgMNTYlVl6km8Zfn2b5PCRyEA04TZKE4a5MM605h_9cQbiLuPgy1oyw24wLj4cEwvivK1FWFqMaQozOUJPQvVpenMGDGOB3EfwyRjf7G0ZLyDHT6nbBRRAahC-GFhgn_fk1q57lDlo9nLOb4sy7T1hE340tQaOvQKgEJ74t-4xRtcms3o66z4Nzz-ZFXyoCeb8_5medGquwatBqCxyjgaYqL1Y1OPrjvAKFbk15xvsVfMzklwhQ0AND87X6gGOMyPA",
  avatar2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbdwCERLaY3nUcIkQac__BRteVUVv2Au9pM0Xo7V898UzjtkvSUSXto0Ixp7traZK3pTXhG0REsz9TQ2XtSjD5YgrN-M7_5nLKcWXlqXk-6y90CdC7sRL6FtqwqNt8lTtGx74IY_WQA9gOLFaPdcSLAY-yz4PGkLP5UkspS2mVTG7LQwQWaNq9oFORCrStIIR1ef9B5rw96NYY0E9cICmXKtxzlvzP6hfM52DIkg4hLSAc34Cqgqs0EUsIdFf6-YBdjbzcDQWDELc",
  avatar3: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI9X-k6oEjMnrCG4cLFwx09Zd7qhWVWmH-jD8xFvBSTVssxrfFsmdMEABbrKzVEKCc2Y_xQ5EFGJ9LlEaQDTiB1PGgJI7NFzezMzZJp8crkyOQLTuEtM5-OqHqV60BMqvB53SNwgKO9Bs3U8CMCrTmF6Ul6JQ0U2pZPUiHzO_rQkyhwmWxGanZ8yFCbr8QCdxywEEgaooefy0M5qevQcmIAtxfxhZzAQ4Tbby_tlNB5jmCIBjAHDJPPUF9mcEDUuoyPyMZs2Ouggg"
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/20">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <img src={IMAGES.logo} alt="TutorMatch Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-display font-semibold text-sm">
            {['Trang chủ', 'Giới thiệu', 'Tính năng', 'Đối tượng', 'Cách hoạt động', 'Liên hệ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-600 hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#tai-app" className="btn-primary">
              Tải App
            </a>
            <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col gap-4 font-display font-semibold"
            >
              {['Trang chủ', 'Giới thiệu', 'Tính năng', 'Đối tượng', 'Cách hoạt động', 'Liên hệ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-primary py-2">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="trang-chủ" className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-wider uppercase">
              Giáo dục cá nhân hóa
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-3xl text-balance mx-auto lg:mx-0">
              Kết nối gia sư phù hợp, đồng hành cùng hành trình <span className="text-gradient">học tập của con</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl text-balance mx-auto lg:mx-0">
              Xây dựng lộ trình học tập cá nhân hóa dựa trên năng lực và mục tiêu riêng biệt của từng học sinh từ lớp 1 đến lớp 9.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#tai-app" 
                className="bg-primary-gradient text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1 text-center"
              >
                Tải App Ngay
              </a>
              <a 
                href="#tính-năng" 
                className="bg-slate-200 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:bg-slate-300 text-center"
              >
                Khám phá lộ trình
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[IMAGES.avatar1, IMAGES.avatar2, IMAGES.avatar3].map((img, i) => (
                  <img key={i} src={img} alt="User" className="w-10 h-10 rounded-full border-2 border-surface object-cover" referrerPolicy="no-referrer" />
                ))}
              </div>
              <span className="text-slate-600 font-medium">Hơn 50,000+ phụ huynh đã tin dùng</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            {/* App Mockup */}
            <div className="relative z-10 w-full max-w-[320px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
              <div className="absolute top-0 w-full h-6 bg-slate-900 flex justify-center items-end">
                <div className="w-16 h-4 bg-slate-900 rounded-b-xl"></div>
              </div>
              <div className="w-full h-full bg-surface pt-8 px-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] text-slate-500">Chào buổi sáng,</p>
                    <p className="text-sm font-bold">Mẹ Lan Anh 👋</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 size={14} className="text-primary" />
                  </div>
                </div>
                <div className="bg-primary-gradient p-4 rounded-2xl text-white mb-4">
                  <p className="text-[10px] opacity-80">Tiến độ tuần này</p>
                  <p className="text-lg font-bold">Hoàn thành 85%</p>
                  <div className="w-full bg-white/20 h-1.5 rounded-full mt-2">
                    <div className="w-[85%] bg-white h-full rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Lớp học tiếp theo</p>
                  <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <GraduationCap size={20} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Toán học nâng cao</p>
                      <p className="text-[10px] text-slate-500">Gia sư: Thầy Minh • 19:00</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Users size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Tiếng Anh Giao Tiếp</p>
                      <p className="text-[10px] text-slate-500">Gia sư: Ms. Linh • Ngày mai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -right-4 glass-card p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Star size={20} className="text-orange-600 fill-orange-600" />
              </div>
              <div>
                <p className="text-sm font-bold">4.9/5 Rating</p>
                <p className="text-xs text-slate-500">Gia sư uy tín nhất</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section id="giới-thiệu" className="bg-surface-container py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <img src={IMAGES.student} alt="Student studying" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-4xl font-display font-bold leading-tight text-slate-900 text-balance">
                Minh bạch hóa giáo dục: Khi học tập không còn là áp lực
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Trong thời đại số, việc tìm kiếm một gia sư giỏi không khó, nhưng để tìm một người thực sự thấu hiểu và đồng hành cùng con lại là một thử thách. Phụ huynh thường đối mặt với sự thiếu minh bạch về chất lượng và tiến độ học tập.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                TutorMatch ra đời để xóa bỏ rào cản đó. Chúng tôi không chỉ kết nối, chúng tôi kiến tạo một hệ sinh thái học tập nơi mọi con số đều được đo lường, mọi nỗ lực đều được ghi nhận.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <p className="text-3xl font-extrabold text-primary">100%</p>
                  <p className="text-sm font-semibold text-slate-500">Gia sư xác thực</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <p className="text-3xl font-extrabold text-primary">24/7</p>
                  <p className="text-sm font-semibold text-slate-500">Theo dõi tiến độ</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="tính-năng" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold text-slate-900 text-balance">Tính năng vượt trội</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-balance">Mọi công cụ cần thiết để phụ huynh an tâm và học sinh bứt phá.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Search />, title: "Ghép cặp thần tốc", desc: "Thuật toán AI giúp tìm ra gia sư phù hợp nhất với tính cách và trình độ của con chỉ trong 24h.", color: "bg-blue-100 text-blue-600" },
            { icon: <Map />, title: "Lộ trình cá nhân", desc: "Không dùng chung giáo án. Mỗi học sinh được thiết kế một lộ trình riêng biệt để lấp đầy lỗ hổng kiến thức.", color: "bg-orange-100 text-orange-600" },
            { icon: <BarChart3 />, title: "Báo cáo chi tiết", desc: "Cập nhật kết quả học tập sau mỗi buổi dạy qua Dashboard trực quan ngay trên điện thoại.", color: "bg-purple-100 text-purple-600" },
            { icon: <AlertTriangle />, title: "Cảnh báo sớm", desc: "Hệ thống tự động thông báo khi phát hiện học sinh bị chững lại hoặc gặp khó khăn ở các chủ đề cụ thể.", color: "bg-red-100 text-red-600" },
            { icon: <MessageSquare />, title: "Kết nối trực tiếp", desc: "Kênh chat an toàn giúp phụ huynh và gia sư trao đổi nhanh chóng mọi lúc mọi nơi.", color: "bg-green-100 text-green-600" },
            { icon: <ShieldCheck />, title: "Đánh giá thực tế", desc: "Hệ thống Review minh bạch từ hàng ngàn phụ huynh đi trước, cam kết thông tin 100% thật.", color: "bg-slate-100 text-slate-600" }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interface Showcase */}
      <section id="đối-tượng" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold leading-tight text-slate-900 text-balance">
              Giao diện thông minh cho cả Phụ huynh & Gia sư
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex shrink-0 items-center justify-center">
                  <Users className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Dành cho Phụ huynh</h4>
                  <p className="text-slate-600 leading-relaxed">Theo dõi lịch học, thanh toán học phí và xem nhận xét của gia sư chỉ với vài lần chạm.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex shrink-0 items-center justify-center">
                  <GraduationCap className="text-blue-600" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Dành cho Gia sư</h4>
                  <p className="text-slate-600 leading-relaxed">Quản lý lớp học, chuẩn bị tài liệu và gửi báo cáo tiến độ chuyên nghiệp cho phụ huynh.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 justify-center lg:justify-end relative">
            <motion.img 
              initial={{ rotate: -5, y: 20 }}
              whileInView={{ rotate: -3, y: 0 }}
              src={IMAGES.parentApp} 
              alt="Parent app view" 
              className="w-1/2 rounded-[2.5rem] shadow-2xl z-10" 
              referrerPolicy="no-referrer" 
            />
            <motion.img 
              initial={{ rotate: 5, y: 40 }}
              whileInView={{ rotate: 3, y: 20 }}
              src={IMAGES.tutorApp} 
              alt="Tutor app view" 
              className="w-1/2 rounded-[2.5rem] shadow-2xl translate-y-12" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="cách-hoạt-động" className="py-24 bg-surface-container px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-slate-900 text-balance">4 Bước để bắt đầu hành trình mới</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-20 right-20 h-0.5 border-t-2 border-dashed border-primary/30 z-0"></div>
            {[
              { step: 1, title: "Đăng ký", desc: "Cung cấp thông tin và nhu cầu học tập của con." },
              { step: 2, title: "Ghép cặp", desc: "Nhận danh sách gia sư phù hợp và phỏng vấn miễn phí." },
              { step: 3, title: "Học tập", desc: "Bắt đầu buổi học đầu tiên với lộ trình riêng biệt." },
              { step: 4, title: "Theo dõi", desc: "Xem báo cáo và điều chỉnh lộ trình hàng tuần." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-extrabold text-2xl mb-6 shadow-xl ring-8 ring-surface-container">
                  {item.step}
                </div>
                <h4 className="font-bold text-xl mb-2 text-slate-900">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold text-slate-900 text-balance">Gói học tập linh hoạt cho mọi nhu cầu</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-balance">Chọn gói học phí phù hợp để bắt đầu hành trình nâng tầm tri thức cho con.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {[
            { title: "Gói Khởi Đầu", price: "800.000đ", desc: "Phù hợp cho mục tiêu củng cố kiến thức", features: ["08 buổi/tháng (2 buổi/tuần)", "Giá trị: 100.000đ/buổi", "Phí hoa hồng app: 15%/tháng"], popular: false },
            { title: "Gói Chuyên Nghiệp", price: "1.200.000đ", desc: "Giải pháp toàn diện nhất", features: ["12 buổi/tháng (3 buổi/tuần)", "Giá trị: 100.000đ/buổi", "Phí hoa hồng app: 15%/tháng"], popular: true },
            { title: "Gói Tập Trung", price: "1.600.000đ", desc: "Dành cho mục tiêu ôn thi, tăng tốc", features: ["16 buổi/tháng (4 buổi/tuần)", "Giá trị: 100.000đ/buổi", "Phí hoa hồng app: 15%/tháng"], popular: false }
          ].map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white p-10 rounded-[2.5rem] border ${plan.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-slate-100'} flex flex-col relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Phổ biến nhất
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{plan.title}</h3>
                <p className="text-sm text-slate-500">{plan.desc}</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                <span className="text-slate-500 font-medium"> / tháng</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-slate-600 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#liên-hệ"
                className={`w-full py-4 rounded-2xl font-bold transition-all text-center ${plan.popular ? 'bg-primary-gradient text-white shadow-lg shadow-primary/30' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}
              >
                Đăng ký ngay
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-slate-900">Câu chuyện thành công</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chị Mai Anh", role: "Phụ huynh bé lớp 7, Hà Nội", text: "Nhờ TutorMatch mà tôi không còn phải lo lắng về việc con hổng kiến thức. Báo cáo mỗi buổi học giúp tôi nắm bắt sát sao tình hình của bé.", avatar: IMAGES.avatar1 },
              { name: "Anh Hoàng Nam", role: "Phụ huynh bé lớp 3, TP.HCM", text: "Quy trình xác thực gia sư ở đây rất kỹ. Tôi hoàn toàn tin tưởng khi giao con cho thầy cô mà TutorMatch giới thiệu.", avatar: IMAGES.avatar2 },
              { name: "Cô Thu Trang", role: "Gia sư Tiếng Anh, Đà Nẵng", text: "Làm gia sư trên app rất tiện lợi. Mọi thứ từ lịch dạy đến thanh toán đều minh bạch và đúng hạn.", avatar: IMAGES.avatar3 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 text-orange-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="liên-hệ" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
          <div className="w-full md:w-2/5 bg-primary p-12 text-white">
            <h2 className="text-3xl font-display font-bold mb-10">Liên hệ với chúng tôi</h2>
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span>hotro@tutormatch.vn</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span>1900 1234</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span>123 Ngũ Hành Sơn, Đà Nẵng</span>
              </div>
            </div>
            <div className="mt-16">
              <p className="font-semibold opacity-80 mb-6 uppercase tracking-widest text-xs">Theo dõi chúng tôi</p>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook size={20} />, key: 'fb' },
                  { icon: <Instagram size={20} />, key: 'ig' },
                  { icon: <Music size={20} />, key: 'tk' }
                ].map((social) => (
                  <div key={social.key} className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Họ và tên</label>
                  <input className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Nguyễn Văn A" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Số điện thoại</label>
                  <input className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="090x xxx xxx" type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Lời nhắn</label>
                <textarea className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Tôi cần tư vấn cho con học lớp 5..." rows={4}></textarea>
              </div>
              <button className="bg-primary-gradient text-white w-full py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="tai-app" className="py-24 px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-primary-gradient rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Sẵn sàng để con học tốt hơn?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">Tải ứng dụng TutorMatch ngay hôm nay để nhận ưu đãi buổi học thử miễn phí đầu tiên.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform shadow-xl">
                <Apple size={32} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-70">Download on the</p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </button>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform shadow-xl">
                <Play size={32} fill="currentColor" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-70">Get it on</p>
                  <p className="text-lg font-bold leading-none">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <img src={IMAGES.logo} alt="TutorMatch Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              <p className="text-slate-500 leading-relaxed">Nền tảng kết nối gia sư và phụ huynh hàng đầu Việt Nam, giúp tối ưu hóa việc học tập của thế hệ trẻ.</p>
            </div>
            <div className="text-[#165fab] font-bold italic">
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Về chúng tôi</h5>
              <ul className="space-y-4 text-slate-500">
                {['Điều khoản', 'Bảo mật', 'Liên hệ', 'Tuyển dụng'].map(item => (
                  <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Sản phẩm</h5>
              <ul className="space-y-4 text-slate-500">
                {['Cho phụ huynh', 'Cho gia sư', 'Gói học bổng', 'Câu lạc bộ'].map(item => (
                  <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Đăng ký bản tin</h5>
              <p className="text-slate-500 mb-6 text-sm">Nhận thông báo về các chương trình ưu đãi mới nhất.</p>
              <div className="flex gap-2">
                <input className="bg-slate-50 border-none rounded-xl p-4 text-sm w-full focus:ring-2 focus:ring-primary" placeholder="Email của bạn" type="email" />
                <button className="bg-primary text-white p-4 rounded-xl hover:opacity-90 transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
            © 2026 TutorMatch. Nâng tầm tri thức Việt.
          </div>
        </div>
      </footer>
    </div>
  );
}
