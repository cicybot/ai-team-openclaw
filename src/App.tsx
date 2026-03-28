/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  Code, 
  Search, 
  BarChart3, 
  Globe, 
  Clock,
  History,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Database,
  Terminal,
  Layers,
  Plus,
  LayoutDashboard,
  Settings,
  LogOut,
  ExternalLink,
  Bot,
  Smartphone,
  Lock,
  Shield,
  Github,
  User,
  Key,
  Wallet,
  Ticket,
  Gift,
  Sparkles,
  RefreshCw,
  ChevronLeft,
  Paperclip,
  Send,
  HardDrive
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// --- Components ---

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '工作流', href: '#workflow' },
    { name: '核心功能', href: '#features' },
    { name: '典型场景', href: '#use-cases' },
    { name: '定价', href: '#pricing' },
    { name: '常见问题', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2 md:py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 md:w-9 md:h-9 bg-orange-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Users className="text-black w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white">CiCy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs lg:text-sm font-medium text-gray-400 hover:text-orange-500 transition-colors">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-xs lg:text-sm font-bold text-gray-400 hover:text-white transition-colors"
            >
              登录
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="bg-white text-black px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-xs lg:text-sm font-bold hover:bg-orange-500 transition-all active:scale-95"
            >
              立即开始
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => navigate('/login')}
              className="bg-orange-500 text-black px-3 py-1.5 rounded-full text-[10px] font-bold active:scale-95"
            >
              立即开始
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1" aria-label={isOpen ? "关闭菜单" : "打开菜单"}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 text-xl font-bold border-b border-white/5 pb-2">
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setIsOpen(false); navigate('/dashboard'); }}
                className="text-gray-400 text-lg font-bold hover:text-white transition-colors text-left px-2"
              >
                登录
              </button>
              <button 
                onClick={() => { setIsOpen(false); navigate('/login'); }}
                className="bg-orange-500 text-black w-full py-4 rounded-xl font-black text-lg shadow-[0_0_30px_rgba(249,115,22,0.2)]"
              >
                立即开始
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
      {/* Visual Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] md:w-[1000px] h-[300px] sm:h-[600px] bg-orange-500/10 blur-[80px] md:blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-3 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase bg-orange-500/5 border border-orange-500/20 rounded-full">
              <Cpu className="w-3 h-3" /> Next-Gen AI Orchestration Platform
            </div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-[10px] md:text-xs font-bold text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
            >
              <Zap className="w-3 h-3 animate-pulse" /> 
              限时福利：注册即送 $100 额度，GPT-5.4 & OPUS-4.6 任意挥霍
            </motion.div>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-[1.05]">
            分钟级组建并部署你的 <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-600">多 Agent 协作团队</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed font-medium px-2 sm:px-0">
            CiCy 是一个 AI 编排平台。招募专业 Agent 角色，定义协作链路，将复杂的业务流程转化为 24/7 自动执行的虚拟军团。
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-10 md:mb-12">
            <span className="text-[10px] md:text-xs font-bold text-orange-500 uppercase tracking-widest mr-1">开箱即用:</span>
            {['OpenClaw', 'Claude Code', 'Codex', 'OpenCode'].map((tool) => (
              <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] md:text-xs font-bold text-gray-300 flex items-center gap-2">
                <div className="w-1 h-1 bg-orange-500 rounded-full" /> {tool}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
            <button 
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-orange-500 text-black rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3 group active:scale-95"
            >
              立即开始 <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
            <div className="flex items-center gap-2 md:gap-2.5"><ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" /> 无需代码基础</div>
            <div className="flex items-center gap-2 md:gap-2.5"><Terminal className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" /> 支持 API 接入</div>
            <div className="flex items-center gap-2 md:gap-2.5"><Database className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-500" /> 数据私有化加密</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    {
      id: "01",
      title: "招募角色",
      desc: "从 50+ 预设模板中选择专业 Agent（如：调研员、架构师、文案师），或通过 System Prompt 自定义角色。",
      icon: <Users className="w-6 h-6 md:w-7 md:h-7" />
    },
    {
      id: "02",
      title: "分配权限",
      desc: "为 Agent 挂载工具（搜索、代码执行、API 节点）并定义操作边界与数据输入源。",
      icon: <Layers className="w-6 h-6 md:w-7 md:h-7" />
    },
    {
      id: "03",
      title: "运行复用",
      desc: "启动军团协作，实时监控任务日志。将验证成功的配置保存为版本，一键复用或扩编。",
      icon: <Zap className="w-6 h-6 md:w-7 md:h-7" />
    }
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">3 步上线你的 AI 军团</h2>
          <p className="text-gray-400 text-sm md:text-base">从招募到执行，全流程可视化编排</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-black border-2 border-orange-500 flex items-center justify-center text-orange-500 mb-6 md:mb-8 group-hover:bg-orange-500 group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                {step.icon}
              </div>
              <div className="text-orange-500 font-mono text-[10px] md:text-sm mb-2 md:mb-4 tracking-widest">STEP {step.id}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-xs md:text-sm px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Metrics = () => {
  const stats = [
    { label: "人工干预时间减少", value: "75%", desc: "在多步内容生产流中" },
    { label: "交付周期缩短", value: "12x", desc: "复杂调研报告产出" },
    { label: "执行成本下降", value: "1/12", desc: "对比传统外包模式" }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 md:p-10 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 text-center group hover:border-orange-500/50 transition-all">
              <div className="text-4xl md:text-5xl font-black text-white mb-3 md:mb-4 group-hover:text-orange-500 transition-colors">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">{stat.label}</div>
              <p className="text-[9px] md:text-[10px] text-gray-500 italic">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "角色化招募", desc: "定义 Agent 职责、性格与工具权限，构建专业人才库。", icon: <Users /> },
    { title: "军团化协作", desc: "多 Agent 自动分工，像真实团队一样接力完成闭环任务。", icon: <Layers /> },
    { title: "全天候执行", desc: "24/7 不间断工作，无需休息，响应速度以秒计。", icon: <Clock /> },
    { title: "可视化管理", desc: "在指挥中心实时监控任务日志、Agent 状态与资源消耗。", icon: <BarChart3 /> },
    { title: "版本化复用", desc: "将验证成功的协作链路保存为模板，一键扩编执行规模。", icon: <Zap /> },
    { title: "工具挂载", desc: "支持搜索、代码执行、数据库及自定义 API 节点接入。", icon: <Terminal /> }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">核心技术能力</h2>
          <p className="text-gray-400 text-xs md:text-sm">超越对话框，构建真正的自主执行系统</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-black border border-white/5 hover:border-orange-500/30 transition-all group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg md:rounded-xl flex items-center justify-center text-orange-500 mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{f.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    { 
      title: "内容流水线", 
      roles: "调研员 + 撰稿人 + 校对员", 
      input: "行业关键词 / 选题", 
      output: "5 篇 SEO 文章 + 社交媒体分发文案", 
      icon: <Globe /> 
    },
    { 
      title: "自动化获客", 
      roles: "线索挖掘员 + 邮件撰写人 + 自动跟进员", 
      input: "行业关键词 / 地区", 
      output: "已验证的潜在客户名单 + 个性化开发信", 
      icon: <TrendingUp /> 
    },
    { 
      title: "技术文档专家", 
      roles: "代码解析师 + 技术作家 + 翻译官", 
      input: "GitHub 仓库 URL", 
      output: "多语言开发者文档 + API 示例", 
      icon: <Code /> 
    },
    { 
      title: "竞品情报站", 
      roles: "网页监控员 + 数据分析师 + 报告生成器", 
      input: "竞品官网列表", 
      output: "周度价格变动表 + 功能更新摘要", 
      icon: <Search /> 
    },
    { 
      title: "客户成功中心", 
      roles: "工单分类员 + 知识库检索员 + 答疑专家", 
      input: "用户咨询 / 工单数据", 
      output: "准确的解决方案建议 + 满意度预判", 
      icon: <MessageSquare /> 
    },
    { 
      title: "电商运营军团", 
      roles: "趋势分析师 + 标题优化师 + 价格策略师", 
      input: "商品列表 / 竞品数据", 
      output: "高转化标题建议 + 实时动态调价方案", 
      icon: <BarChart3 /> 
    }
  ];

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">典型场景示例</h2>
          <p className="text-gray-400 text-xs md:text-sm">覆盖全业务场景的 AI 协作闭环</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-950 border border-white/5 hover:border-orange-500/40 transition-all">
              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <div className="p-2.5 md:p-3 bg-orange-500/20 rounded-lg md:rounded-xl text-orange-500">
                  {c.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">{c.title}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">角色组合</span>
                  <span className="text-xs md:text-sm text-white font-medium">{c.roles}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">输入</span>
                  <span className="text-xs md:text-sm text-gray-400">{c.input}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">产出</span>
                  <span className="text-sm md:text-base text-orange-500 font-black">{c.output}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const navigate = useNavigate();
  const plans = [
    { 
      name: "Starter (个人)", 
      desc: "适合独立开发者与个人创作者", 
      price: "赠送 $100",
      features: ["注册即领 $100 AI 额度", "1 个活跃军团席位", "基础 Agent 模板库", "VM 节点按需付费 (Balance)"],
      cta: "立即领取"
    },
    { 
      name: "Team (团队)", 
      desc: "适合快速增长的运营与开发团队", 
      price: "按需计费",
      features: ["无限军团席位", "自定义 Agent 权限", "API 接入能力", "优先技术支持"],
      highlight: true,
      cta: "立即开通"
    },
    { 
      name: "Enterprise (企业)", 
      desc: "适合需要大规模执行力的企业", 
      price: "定制方案",
      features: ["无限军团扩编", "私有化部署 (VPC)", "专属工具开发", "SLA 保障", "SSO 单点登录"],
      cta: "联系我们"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">透明的定价，无限的增长</h2>
          <p className="text-gray-400 text-xs md:text-sm">选择适合您业务规模的军团配置</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`p-8 md:p-10 rounded-3xl md:rounded-[40px] border ${p.highlight ? 'bg-orange-500 border-orange-500 text-black' : 'bg-black border-white/10 text-white'} flex flex-col relative overflow-hidden`}>
              {p.highlight && <div className="absolute top-0 right-0 bg-black text-white text-[9px] md:text-[10px] font-black px-3 py-1 md:px-4 md:py-1 rounded-bl-lg md:rounded-bl-xl uppercase tracking-widest">Most Popular</div>}
              <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2">{p.name}</h3>
              <div className="text-2xl md:text-3xl font-black mb-4 md:mb-6">{p.price}</div>
              <p className={`text-[11px] md:text-xs mb-8 md:mb-10 font-medium ${p.highlight ? 'text-black/70' : 'text-gray-500'}`}>{p.desc}</p>
              <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow">
                {p.features.map((f, fi) => (
                  <motion.li 
                    key={fi} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: fi * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-xs md:text-sm font-medium"
                  >
                    <CheckCircle2 className={`w-4 h-4 md:w-5 md:h-5 shrink-0 ${p.highlight ? 'text-black' : 'text-orange-500'}`} /> {f}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                onClick={() => navigate('/login')}
                whileHover={{ scale: 1.02, boxShadow: p.highlight ? "0 0 30px rgba(0,0,0,0.3)" : "0 0 30px rgba(249,115,22,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all ${p.highlight ? 'bg-black text-white hover:bg-zinc-800 shadow-xl' : 'bg-white text-black hover:bg-orange-500'}`}
              >
                {p.cta}
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const navigate = useNavigate();
  const faqs = [
    { q: "数据安全如何保证？", a: "采用企业级 AES-256 加密，支持私有化部署。您的数据仅用于军团内部执行，绝不用于模型训练。" },
    { q: "Agent 权限如何管理？", a: "您可以为每个 Agent 挂载特定的工具（如 Google 搜索、Python 解释器）并定义其能访问的数据库边界。" },
    { q: "需要写代码吗？", a: "基础编排完全可视化。高级用户可以通过 Python SDK 自定义更复杂的逻辑与工具。" },
    { q: "可以自定义 Agent 吗？", a: "是的。您可以定义 Agent 的系统提示词（System Prompt）、专业背景、知识库以及它在军团中的协作顺序。" },
    { q: "能接入现有工具吗？", a: "支持 Webhook、主流 SaaS API 以及自定义 API 节点接入，实现与现有业务系统的无缝联动。" },
    { q: "计费逻辑是什么？", a: "CiCy 采用双货币系统：Credits（积分）用于 AI 模型 Token 消耗，注册即送 $100；Balance（余额）为真实货币，用于支付高性能 VM 计算节点与存储资源。" },
    { q: "适合哪些人群？", a: "适合独立开发者、增长团队、电商运营、初创公司 CEO 等需要规模化执行力的专业人士。" },
    { q: "不适合哪些人群？", a: "不适合只需要简单对话（如 ChatGPT）或单点任务、不需要多步骤协作的场景。" },
    { q: "支持私有化部署吗？", a: "Sovereign 版支持在您的私有 VPC 或本地服务器上部署，确保最高级别的数据合规。" },
    { q: "如何开始？", a: "点击 '立即开始' 注册账号，选择一个场景模板，3 分钟内即可上线您的第一支 AI 军团。" }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-black text-white mb-10 md:mb-16 text-center">常见问题 / FAQ</h2>
        <div className="grid gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-950 border border-white/5 hover:border-white/20 transition-all group">
              <h4 className="text-white font-bold text-sm md:text-base mb-2 md:mb-3 flex items-start md:items-center gap-3">
                <span className="text-orange-500 font-mono shrink-0">Q:</span> {f.q}
              </h4>
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed pl-7 md:pl-8 group-hover:text-gray-400 transition-colors">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button 
            onClick={() => navigate('/login')}
            className="text-orange-500 font-bold hover:underline"
          >
            还有其他问题？立即开始咨询
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="py-16 md:py-24 bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 md:mb-10 tracking-tighter leading-tight">立即开始组建你的 AI 军团</h2>
        <p className="text-sm md:text-lg text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto px-4">无需信用卡，5 分钟上线你的第一支协作团队。释放你的创造力，把执行交给 CiCy。</p>
        
        <button 
          onClick={() => navigate('/login')}
          className="w-full sm:w-auto px-10 py-5 md:px-16 md:py-6 bg-orange-500 text-black rounded-xl md:rounded-2xl font-black text-xl md:text-2xl hover:bg-orange-400 transition-all shadow-[0_0_50px_rgba(249,115,22,0.3)] active:scale-95"
        >
          立即开始
        </button>
        
        <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <Users className="text-black w-3 h-3" />
            </div>
            <span>© 2026 CiCy. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
            <a href="#" className="hover:text-white transition-colors">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const RechargePage = ({ setBalance, setCredits }: any) => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [history, setHistory] = useState([
    { id: 1, code: 'CICY-8888-9999', amount: '$50.00', type: 'Credits', date: '2026-03-25 14:20', status: 'Success' },
    { id: 2, code: 'CICY-1234-5678', amount: '$100.00', type: 'Balance', date: '2026-03-20 09:15', status: 'Success' },
  ]);

  const handleRedeem = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      if (code.startsWith('CICY-')) {
        const type = Math.random() > 0.5 ? 'Credits' : 'Balance';
        const amount = 20.00;
        
        if (type === 'Credits') setCredits((prev: number) => prev + amount);
        else setBalance((prev: number) => prev + amount);

        const newEntry = {
          id: Date.now(),
          code: code,
          amount: `$${amount.toFixed(2)}`,
          type: type,
          date: new Date().toLocaleString(),
          status: 'Success'
        };
        setHistory([newEntry, ...history]);
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 overflow-y-auto">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl"
      >
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold"
          >
            <ChevronLeft className="w-4 h-4" /> 返回控制台
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <Wallet className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-black tracking-tighter">充值中心</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Recharge Form */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-[32px] shadow-2xl h-full">
              <div className="mb-8">
                <h1 className="text-2xl font-black mb-2">兑换充值码</h1>
                <p className="text-gray-500 text-sm">目前仅支持通过官方渠道获取的 <span className="text-blue-500 font-bold">CiCy 充值码</span> 进行账户充值。</p>
              </div>

              {status === 'success' ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-left py-10"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-xl font-black mb-2">兑换成功！</h2>
                  <p className="text-gray-500 text-sm mb-8">您的账户余额已更新，请查看充值记录。</p>
                  <button 
                    onClick={() => { setStatus('idle'); setCode(''); }}
                    className="w-fit px-12 bg-white text-black py-4 rounded-2xl font-black text-lg hover:bg-gray-200 transition-all"
                  >
                    继续兑换
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleRedeem} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">充值码</label>
                    <div className="relative">
                      <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input 
                        type="text" 
                        placeholder="请输入 CICY-XXXX-XXXX" 
                        value={code}
                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-blue-500 transition-all outline-none font-mono"
                        required
                      />
                    </div>
                    {status === 'error' && (
                      <p className="text-red-500 text-[10px] font-bold ml-1 mt-1">无效的充值码，请检查后重试。</p>
                    )}
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-fit px-12 bg-blue-500 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-400 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : '立即兑换'}
                  </button>

                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] text-gray-600 leading-relaxed">
                      * 充值码通常由合作伙伴或官方活动发放。<br />
                      * 兑换后 Credits 或 Balance 将立即到账。<br />
                      * 如有疑问，请联系官方技术支持。
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: History */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-950 border border-white/10 p-6 rounded-[32px] shadow-2xl h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <History className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-black">充值记录</h2>
              </div>

              <div className="space-y-4 flex-grow overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                {history.length === 0 ? (
                  <div className="text-center py-10 text-gray-600">
                    <Clock className="w-8 h-8 mx-auto mb-2 opacity-20" />
                    <p className="text-xs">暂无记录</p>
                  </div>
                ) : (
                  history.map((item) => (
                    <div key={item.id} className="p-4 bg-black border border-white/5 rounded-2xl space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gray-500">{item.code}</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.type === 'Credits' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'}`}>
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black">{item.amount}</span>
                        <span className="text-[10px] text-gray-600">{item.date}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login/registration
    navigate('/dashboard');
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex items-center justify-center gap-3 mb-10 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)]">
            <Users className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter">CiCy</span>
        </div>

        <div className="bg-zinc-950 border border-white/10 p-8 rounded-[32px] shadow-2xl">
          <div className="mb-8">
            <h1 className="text-2xl font-black mb-2">立即加入 AI 军团</h1>
            <p className="text-gray-500 text-sm">注册即送 <span className="text-orange-500 font-bold">$100 Token 额度</span>，GPT-5.4 & OPUS-4.6 任意挥霍</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">用户名</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="请输入用户名" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-orange-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">密码</label>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="password" 
                  placeholder="请输入密码" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-orange-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-orange-500 text-black py-4 rounded-2xl font-black text-lg hover:bg-orange-400 transition-all shadow-[0_0_30px_rgba(249,115,22,0.2)] active:scale-95"
            >
              立即注册并领取额度
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5">
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-widest font-black text-gray-600">第三方登录</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSocialLogin('github')}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all"
              >
                <Github className="w-4 h-4" /> GitHub
              </button>
              <button 
                onClick={() => handleSocialLogin('google')}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-500 text-xs font-bold hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> 返回首页
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          <div className="flex items-center gap-2"><Lock className="w-3 h-3" /> 银行级加密</div>
          <div className="flex items-center gap-2"><Shield className="w-3 h-3" /> 隐私保护</div>
        </div>
      </motion.div>
    </div>
  );
};

const CreateTeamPage = ({ balance, onConfirm }: { balance: number, onConfirm: (data: any) => boolean }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    region: '美国',
    cpu: '2',
    ram: '4',
    disk: '50',
    agents: ['OpenClaw']
  });

  const regions = ['美国', '台湾', '香港', '新加坡', '日本', '韩国'];
  const cpuOptions = ['2', '4', '8', '16'];
  const ramOptions = ['4', '8', '16', '32', '64'];
  const diskOptions = ['50', '100', '200', '500', '1000'];
  const optionalAgents = [
    { id: 'Claude Code', name: 'Claude Code', desc: 'Anthropic 官方工具' },
    { id: 'Codex', name: 'Codex', desc: 'GitHub 代码引擎' },
    { id: 'OpenCode', name: 'OpenCode', desc: '开源代码分析' }
  ];

  const calculateCost = () => {
    const base = 10;
    const cpuCost = parseInt(formData.cpu) * 2;
    const ramCost = parseInt(formData.ram) * 1;
    const diskCost = parseInt(formData.disk) * 0.05;
    const agentCost = (formData.agents.length - 1) * 5;
    return (base + cpuCost + ramCost + diskCost + agentCost).toFixed(2);
  };

  const totalCost = parseFloat(calculateCost());
  const canAfford = balance >= totalCost;

  const handleToggleAgent = (agentId: string) => {
    if (agentId === 'OpenClaw') return; // Mandatory
    setFormData(prev => ({
      ...prev,
      agents: prev.agents.includes(agentId) 
        ? prev.agents.filter(id => id !== agentId)
        : [...prev.agents, agentId]
    }));
  };

  const handleFinalConfirm = () => {
    const success = onConfirm(formData);
    if (success) {
      navigate('/dashboard');
    }
  };

  const progress = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-12 px-4 overflow-y-auto">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between mb-12">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold"
          >
            <ChevronLeft className="w-4 h-4" /> 取消并返回
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <Plus className="text-black w-4 h-4" />
            </div>
            <span className="text-xl font-black tracking-tighter">组建新军团</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 space-y-4">
          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500 px-1">
            <span className={step >= 1 ? 'text-orange-500' : ''}>1. 基础配置</span>
            <span className={step >= 2 ? 'text-orange-500' : ''}>2. 资源分配</span>
            <span className={step >= 3 ? 'text-orange-500' : ''}>3. 支付部署</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            />
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">团队名称</label>
                    <input 
                      type="text"
                      placeholder="例如：研发一组 / 自动化营销团队"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-2xl py-5 px-8 text-base focus:border-orange-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">部署区域 (VM Region)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {regions.map(r => (
                        <button
                          key={r}
                          onClick={() => setFormData({...formData, region: r})}
                          className={`py-4 rounded-2xl text-sm font-bold border transition-all ${formData.region === r ? 'bg-orange-500 border-orange-500 text-black shadow-lg shadow-orange-500/20' : 'bg-black border-white/5 text-gray-500 hover:border-white/20'}`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 flex items-center gap-2">
                        <Cpu className="w-3 h-3" /> CPU (Cores)
                      </label>
                      <select 
                        value={formData.cpu}
                        onChange={(e) => setFormData({...formData, cpu: e.target.value})}
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 text-sm focus:border-orange-500 outline-none appearance-none cursor-pointer"
                      >
                        {cpuOptions.map(o => <option key={o} value={o}>{o} vCPU</option>)}
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 flex items-center gap-2">
                        <Layers className="w-3 h-3" /> RAM (GB)
                      </label>
                      <select 
                        value={formData.ram}
                        onChange={(e) => setFormData({...formData, ram: e.target.value})}
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 text-sm focus:border-orange-500 outline-none appearance-none cursor-pointer"
                      >
                        {ramOptions.map(o => <option key={o} value={o}>{o} GB</option>)}
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 flex items-center gap-2">
                        <HardDrive className="w-3 h-3" /> Disk (GB)
                      </label>
                      <select 
                        value={formData.disk}
                        onChange={(e) => setFormData({...formData, disk: e.target.value})}
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 text-sm focus:border-orange-500 outline-none appearance-none cursor-pointer"
                      >
                        {diskOptions.map(o => <option key={o} value={o}>{o} GB SSD</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10">
                    <h4 className="text-sm font-bold text-blue-500 mb-6 flex items-center gap-2 uppercase tracking-widest">
                      <Bot className="w-5 h-5" /> 预装 Agent 编排
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-5 bg-black/40 rounded-2xl border border-orange-500/30">
                        <div className="flex items-center gap-4">
                          <Terminal className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="text-sm font-bold">OpenClaw</div>
                            <div className="text-[11px] text-gray-500">核心研发助手 (必选)</div>
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-orange-500" />
                      </div>
                      {optionalAgents.map(agent => (
                        <button
                          key={agent.id}
                          onClick={() => handleToggleAgent(agent.id)}
                          className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${formData.agents.includes(agent.id) ? 'bg-black/40 border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
                        >
                          <div className="flex items-center gap-4">
                            <Code className={`w-5 h-5 ${formData.agents.includes(agent.id) ? 'text-white' : 'text-gray-600'}`} />
                            <div className="text-left">
                              <div className={`text-sm font-bold ${formData.agents.includes(agent.id) ? 'text-white' : 'text-gray-500'}`}>{agent.name}</div>
                              <div className="text-[11px] text-gray-600">{agent.desc}</div>
                            </div>
                          </div>
                          {formData.agents.includes(agent.id) ? (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-white/10" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div className="p-10 rounded-[32px] bg-zinc-900 border border-white/5 space-y-8">
                    <div className="flex items-center justify-between pb-8 border-b border-white/5">
                      <span className="text-base font-bold text-gray-400">预计月度费用</span>
                      <span className="text-4xl font-black text-white">${totalCost}</span>
                    </div>
                    <div className="space-y-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">当前余额 (Balance)</span>
                        <span className={`font-bold ${canAfford ? 'text-green-500' : 'text-red-500'}`}>${balance.toFixed(2)}</span>
                      </div>
                      {!canAfford && (
                        <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-start gap-4">
                          <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          <div className="text-xs text-red-500 leading-relaxed font-bold">
                            余额不足。组建军团需要支付 VM 基础运行费用。请先前往充值中心充值真实货币 (Balance)。
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-[11px] font-black uppercase tracking-widest text-gray-600 px-4">
                    <div className="flex items-center gap-3"><Globe className="w-4 h-4" /> {formData.region} 节点</div>
                    <div className="flex items-center gap-3"><Cpu className="w-4 h-4" /> {formData.cpu} 核 / {formData.ram}GB</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-8 bg-black/40 border-t border-white/5 flex items-center justify-between">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : navigate('/dashboard')}
              className="px-8 py-4 rounded-2xl text-sm font-bold text-gray-500 hover:text-white transition-colors"
            >
              {step === 1 ? '取消' : '上一步'}
            </button>
            {step < 3 ? (
              <button 
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && !formData.name}
                className="bg-white text-black px-12 py-4 rounded-2xl font-black text-sm hover:bg-gray-200 transition-all disabled:opacity-50 shadow-xl"
              >
                下一步
              </button>
            ) : (
              canAfford ? (
                <button 
                  onClick={handleFinalConfirm}
                  className="bg-orange-500 text-black px-12 py-4 rounded-2xl font-black text-sm hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/20"
                >
                  确认支付并部署
                </button>
              ) : (
                <button 
                  onClick={() => navigate('/recharge')}
                  className="bg-blue-500 text-white px-12 py-4 rounded-2xl font-black text-sm hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-3"
                >
                  <Wallet className="w-5 h-5" /> 立即充值
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ teams, setTeams, credits, setCredits, balance, setBalance }: any) => {
  const navigate = useNavigate();
  const [activeTeamId, setActiveTeamId] = useState('1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [hasClaimedTrial, setHasClaimedTrial] = useState(false);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [claimCode, setClaimCode] = useState('');
  const [qrSeed, setQrSeed] = useState(Date.now());
  const [chatMessages, setChatMessages] = useState([
    { id: '1', sender: 'Researcher', content: '我已经完成了关于 OpenClaw 的初步调研，结果显示其在自主研发场景下表现优异。', time: '10:24 AM' },
    { id: '2', sender: 'Architect', content: '很好。Developer，请根据调研报告开始搭建基础架构。', time: '10:26 AM' },
    { id: '3', sender: 'Developer', content: '收到，正在拉取代码库并配置环境。', time: '10:28 AM' },
    { id: '4', sender: 'You', content: '大家进度不错，注意 Credits 的消耗情况。', time: '10:30 AM', isMe: true },
  ]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        sender: 'You',
        content: inputMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true
      };
      setChatMessages([...chatMessages, newMessage]);
      setInputMessage('');
      
      // Simulate agent response
      setTimeout(() => {
        const agentResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'Architect',
          content: '收到指令，正在协调军团成员执行任务。',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isMe: false
        };
        setChatMessages(prev => [...prev, agentResponse]);
      }, 1000);
    }
  };

  const handleClaimTrial = () => {
    if (!hasClaimedTrial) {
      setClaimCode(Math.floor(100000 + Math.random() * 900000).toString());
      setIsClaimModalOpen(true);
    }
  };

  const confirmClaim = () => {
    setBalance((prev: number) => prev + 100);
    setHasClaimedTrial(true);
    setIsClaimModalOpen(false);
    setToastMessage('成功领取 100 试用金额！');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const refreshCode = () => {
    setClaimCode(Math.floor(100000 + Math.random() * 900000).toString());
    setQrSeed(Date.now());
  };

  const agents = [
    { id: '1', name: 'Researcher', role: '调研员', status: 'online', avatar: 'bg-blue-500' },
    { id: '2', name: 'Developer', role: '开发工程师', status: 'online', avatar: 'bg-green-500' },
    { id: '3', name: 'Architect', role: '架构师', status: 'busy', avatar: 'bg-purple-500' },
    { id: '4', name: 'QA Engineer', role: '测试工程师', status: 'offline', avatar: 'bg-zinc-700' },
  ];

  const activeTeam = teams.find((t: any) => t.id === activeTeamId) || teams[0];

  const handleAddTeam = () => {
    navigate('/create-team');
  };

  const tools = [
    { name: 'OpenClaw', desc: '自主式 AI 研发助手', icon: <Terminal className="w-6 h-6" />, color: 'bg-blue-500', currency: 'Credits' },
    { name: 'Claude Code', desc: 'Anthropic 官方代码工具', icon: <Code className="w-6 h-6" />, color: 'bg-purple-500', currency: 'Credits' },
    { name: 'VM Instance', desc: '高性能计算节点 (Ubuntu/Debian)', icon: <Cpu className="w-6 h-6" />, color: 'bg-green-500', currency: 'Balance' },
    { name: 'OpenCode', desc: '开源代码分析引擎', icon: <Database className="w-6 h-6" />, color: 'bg-orange-500', currency: 'Credits' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className="bg-zinc-950 border-r border-white/10 flex flex-col shrink-0 relative z-20"
      >
        <div className="p-6 flex items-center gap-3 border-b border-white/5">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
            <Users className="text-black w-4 h-4" />
          </div>
          <span className="text-xl font-black tracking-tighter">CiCy</span>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-6">
          <AnimatePresence>
            {!hasClaimedTrial && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative group cursor-pointer"
                onClick={handleClaimTrial}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-zinc-900 border border-orange-500/30 p-4 rounded-2xl overflow-hidden">
                  <div className="absolute -right-2 -top-2 w-12 h-12 bg-orange-500/10 rounded-full blur-xl" />
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                      <Gift className="w-5 h-5 text-black" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-orange-500 bg-orange-500/10 px-1.5 py-0.5 rounded">新人专享</span>
                        <Sparkles className="w-2.5 h-2.5 text-orange-500 animate-pulse" />
                      </div>
                      <h3 className="text-xs font-black text-white">领取 100 试用金</h3>
                      <p className="text-[9px] text-gray-500 leading-tight mt-1">立即开启您的 AI 协作之旅</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-tighter">Limited Offer</div>
                    <div className="flex items-center gap-1 text-orange-500 text-[10px] font-black">
                      立即领取 <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => navigate('/recharge')}
              className="bg-orange-500 text-black py-3 rounded-xl font-black text-xs hover:bg-orange-400 transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> 立即充值
            </button>
            <button 
              onClick={handleAddTeam}
              className="bg-white/5 border border-white/10 text-white py-3 rounded-xl font-black text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-orange-500" /> 加团队
            </button>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-[10px] uppercase tracking-widest font-black text-gray-500">我的团队</span>
            </div>
            <div className="space-y-1">
              {teams.map(team => (
                <button
                  key={team.id}
                  onClick={() => setActiveTeamId(team.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTeamId === team.id ? 'bg-orange-500 text-black' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <div className={`w-2 h-2 rounded-full ${activeTeamId === team.id ? 'bg-black' : 'bg-orange-500'}`} />
                  <span className="truncate">{team.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-red-500/10 hover:text-red-500 transition-all"
          >
            <LogOut className="w-4 h-4" /> 退出登录
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0 bg-black relative">
        {/* Header */}
        <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-black/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="h-4 w-px bg-white/10 mx-2" />
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              {activeTeam.name}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full">
              <Zap className="w-3 h-3 text-orange-500" />
              <span className="text-[10px] font-black text-orange-500">{credits.toFixed(2)} Credits</span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <Wallet className="w-3 h-3 text-blue-500" />
              <span className="text-[10px] font-black text-blue-500">${balance.toFixed(2)} Balance</span>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border border-white/20 hover:scale-110 transition-transform active:scale-95"
              />
              
              <AnimatePresence>
                {isUserMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setIsUserMenuOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40"
                    >
                      <div className="p-2">
                        <button 
                          onClick={() => {
                            setIsUserMenuOpen(false);
                            setIsPasswordModalOpen(true);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                        >
                          <Lock className="w-4 h-4" /> 修改密码
                        </button>
                        <button 
                          onClick={() => navigate('/')}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-red-500/60 hover:bg-red-500/10 hover:text-red-500 transition-all"
                        >
                          <LogOut className="w-4 h-4" /> 退出登录
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Message Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-orange-500 text-black px-6 py-2 rounded-full font-black text-xs shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Claim Trial Modal */}
        <AnimatePresence>
          {isClaimModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsClaimModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-sm bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                    <Gift className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-2xl font-black mb-2">领取 100 试用金</h2>
                  <p className="text-gray-500 text-xs mb-8 leading-relaxed">扫描下方二维码添加客服微信<br />发送 6 位验证码即可自动领取</p>
                  
                  <div className="bg-white p-4 rounded-3xl w-48 h-48 mx-auto mb-4 relative group">
                    <img 
                      src={`https://picsum.photos/seed/${qrSeed}/400/400`} 
                      alt="WeChat QR Code" 
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <Search className="w-8 h-8 text-black/20" />
                    </div>
                  </div>

                  <button 
                    onClick={refreshCode}
                    className="flex items-center gap-2 mx-auto mb-8 text-[10px] font-black text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest"
                  >
                    <RefreshCw className="w-3 h-3" /> 刷新二维码与验证码
                  </button>

                  <div className="space-y-4">
                    <div className="bg-black border border-white/5 rounded-2xl p-4 relative group">
                      <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">您的专属验证码</div>
                      <div className="text-3xl font-black text-orange-500 tracking-[0.2em]">{claimCode}</div>
                    </div>

                    <button 
                      onClick={confirmClaim}
                      className="w-full bg-white text-black py-4 rounded-2xl font-black text-sm hover:bg-gray-200 transition-all active:scale-95 shadow-xl"
                    >
                      我已发送，立即领取
                    </button>
                    <button 
                      onClick={() => setIsClaimModalOpen(false)}
                      className="text-gray-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"
                    >
                      稍后再说
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Change Password Modal */}
        <AnimatePresence>
          {isPasswordModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPasswordModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-sm bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                      <Lock className="w-5 h-5 text-black" />
                    </div>
                    <h2 className="text-xl font-black">修改密码</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">原密码</label>
                      <input 
                        type="password" 
                        placeholder="请输入当前密码" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 text-sm focus:border-orange-500 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">新密码</label>
                      <input 
                        type="password" 
                        placeholder="请输入新密码" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 text-sm focus:border-orange-500 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-500 ml-1">确认新密码</label>
                      <input 
                        type="password" 
                        placeholder="请再次输入新密码" 
                        className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 text-sm focus:border-orange-500 transition-all outline-none"
                      />
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <button 
                        onClick={() => setIsPasswordModalOpen(false)}
                        className="flex-grow bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black text-sm hover:bg-white/10 transition-all"
                      >
                        取消
                      </button>
                      <button 
                        onClick={() => {
                          setIsPasswordModalOpen(false);
                          setToastMessage('密码修改成功');
                          setTimeout(() => setToastMessage(''), 3000);
                        }}
                        className="flex-grow bg-orange-500 text-black py-4 rounded-2xl font-black text-sm hover:bg-orange-400 transition-all shadow-lg"
                      >
                        确认修改
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Console Content - Chat Interface */}
        <div className="flex-grow flex overflow-hidden relative">
          {/* Chat Area */}
          <div className="flex-grow flex flex-col min-w-0 bg-black">
            {/* Message History */}
            <div className="flex-grow overflow-y-auto p-6 space-y-8 scroll-smooth custom-scrollbar">
              <div className="max-w-3xl mx-auto space-y-8">
                {chatMessages.map((chat) => (
                  <motion.div 
                    key={chat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-4 ${chat.isMe ? 'flex-row-reverse' : ''}`}
                  >
                    {!chat.isMe && (
                      <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center font-black text-xs text-white ${agents.find(a => a.name === chat.sender)?.avatar || 'bg-zinc-800'}`}>
                        {chat.sender[0]}
                      </div>
                    )}
                    <div className={`flex flex-col gap-1.5 max-w-[80%] ${chat.isMe ? 'items-end' : ''}`}>
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{chat.sender}</span>
                        <span className="text-[9px] text-gray-600">{chat.time}</span>
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${chat.isMe ? 'bg-orange-500 text-black font-medium' : 'bg-zinc-900 text-gray-300 border border-white/5'}`}>
                        {chat.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Prompt Input Area */}
            <div className="p-6 border-t border-white/5 bg-black/50 backdrop-blur-xl">
              <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500">
                  <Zap className="w-4 h-4" />
                </div>
                <input 
                  type="text"
                  placeholder="给您的军团下达指令..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-12 pr-24 text-sm focus:border-orange-500 transition-all outline-none"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 transition-colors">
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleSendMessage}
                    className="bg-orange-500 text-black p-2 rounded-xl hover:bg-orange-400 transition-all shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="max-w-3xl mx-auto mt-3 flex items-center gap-4 px-2">
                <div className="flex items-center gap-1.5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                  <div className="w-1 h-1 bg-green-500 rounded-full" />
                  4 Agents Ready
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-black text-gray-600 uppercase tracking-widest">
                  <div className="w-1 h-1 bg-orange-500 rounded-full" />
                  Credits: {credits.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Agent Roles */}
          <div className="w-72 border-l border-white/10 bg-zinc-950 hidden lg:flex flex-col shrink-0">
            <div className="p-6 border-b border-white/5">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">军团成员 (Agents)</h3>
              <div className="space-y-4">
                {agents.map((agent) => (
                  <div key={agent.id} className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs ${agent.avatar}`}>
                        {agent.name[0]}
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-zinc-950 ${agent.status === 'online' ? 'bg-green-500' : agent.status === 'busy' ? 'bg-orange-500' : 'bg-zinc-600'}`} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="text-xs font-bold text-white truncate group-hover:text-orange-500 transition-colors">{agent.name}</div>
                      <div className="text-[10px] text-gray-500 font-medium">{agent.role}</div>
                    </div>
                    <button className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-white/5 rounded-md text-gray-500 transition-all">
                      <Settings className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 flex-grow overflow-y-auto space-y-6">
              <div>
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">活跃工具</h3>
                <div className="space-y-2">
                  {tools.map((tool, i) => (
                    <div key={i} className="p-3 rounded-xl bg-black border border-white/5 flex items-center gap-3">
                      <div className={`w-8 h-8 ${tool.color} rounded-lg flex items-center justify-center text-white shrink-0`}>
                        {React.cloneElement(tool.icon as React.ReactElement, { className: 'w-4 h-4' })}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-white truncate">{tool.name}</div>
                        <div className="text-[9px] text-gray-600 truncate">Running</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-white/5">
              <button className="w-full py-3 rounded-xl border border-dashed border-white/10 text-gray-500 hover:text-white hover:border-white/20 transition-all text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                <Plus className="w-3.5 h-3.5" /> 招募新 Agent
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <Workflow />
        <Metrics />
        <Features />
        <UseCases />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  const [teams, setTeams] = useState([
    { id: '1', name: '我的默认团队', role: 'Owner' }
  ]);
  const [credits, setCredits] = useState(100.00);
  const [balance, setBalance] = useState(0.00);

  const handleAddTeam = (data: any) => {
    const base = 10;
    const cpuCost = parseInt(data.cpu) * 2;
    const ramCost = parseInt(data.ram) * 1;
    const diskCost = parseInt(data.disk) * 0.05;
    const agentCost = (data.agents.length - 1) * 5;
    const totalCost = base + cpuCost + ramCost + diskCost + agentCost;

    if (balance >= totalCost) {
      setBalance(prev => prev - totalCost);
      const newId = (teams.length + 1).toString();
      const newTeam = {
        id: newId,
        name: data.name,
        role: 'Owner',
        config: data
      };
      setTeams([...teams, newTeam]);
      return true;
    }
    return false;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard teams={teams} setTeams={setTeams} credits={credits} setCredits={setCredits} balance={balance} setBalance={setBalance} />} 
        />
        <Route 
          path="/recharge" 
          element={<RechargePage setBalance={setBalance} setCredits={setCredits} />} 
        />
        <Route 
          path="/create-team" 
          element={<CreateTeamPage balance={balance} onConfirm={handleAddTeam} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
