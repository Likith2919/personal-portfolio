import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  ShieldCheck,
  BarChart,
  Layers,
  Zap,
  Linkedin,
  Github,
  Languages,
  Users,
  Clock,
  GraduationCap,
  Award,
  Server,
  Terminal,
  Eye,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Motion = motion;

const profile = {
  name: 'Likith Sirigiri',
  fullName: 'Likith Venkat Pavan Kumar Sirigiri',
  email: 'sirigirilikith1796@gmail.com',
  phone: '+91-9912791165',
  resume: '/Likith_Sirigiri_DevOps_Resume_v2.pdf',
  github: 'https://github.com/Likith2919',
  linkedin: 'https://linkedin.com/in/likithsirigiri',
  location: 'Bangalore, India'
};

const copy = {
  en: {
    nav: {
      role: 'DevOps Engineer & Team Lead',
      availability: 'Open To Global Roles',
      contact: 'Schedule Intro Call'
    },
    hero: {
      eyebrow: 'Platform Reliability. Observability. Cloud Cost Control.',
      title: 'DevOps Team Lead Building Production Platforms That Scale.',
      subtitle:
        'DevOps Engineer & Team Lead with 4+ years delivering resilient cloud-native platforms, full observability stacks, and 40%+ infrastructure cost savings. Led a 20-member DevOps team for a fintech SaaS platform. Open to remote or onsite opportunities — Japan & Global.',
      primary: 'Download Resume',
      secondary: 'View Case Studies'
    },
    stats: [
      { label: 'Cost Reduction', value: '40%+', icon: BarChart },
      { label: 'Team Led', value: '20 Members', icon: Users },
      { label: 'Experience', value: '4+ Years', icon: Zap }
    ],
    recruiterSignals: [
      { label: 'Target Market', value: 'Japan & Global', icon: Globe2 },
      { label: 'Visa Status', value: 'Sponsorship Required', icon: ShieldCheck },
      { label: 'Japanese', value: 'Beginner (Learning)', icon: Languages },
      { label: 'Relocation', value: 'Ready to Relocate', icon: MapPin }
    ],
    metrics: [
      { value: '40%+', label: 'Cloud Cost Reduction' },
      { value: '20', label: 'Team Members Led' },
      { value: '<3 min', label: 'Deployment Time (was 20–30 min)' },
      { value: '4+', label: 'Years Experience' }
    ],
    casesTitle: 'Selected Platform Initiatives',
    cases: [
      {
        title: 'Azure Cost Intelligence',
        summary: 'Live FinOps dashboard achieving 40%+ total cloud cost reduction.',
        problem: 'Cloud spend was rising with low VM utilisation visibility across subscriptions.',
        solution: 'Built live resource utilisation analysis per subscription/resource group over 15-day windows; automated non-prod shutdown/startup post business hours.',
        impact: 'Achieved 40%+ total cloud cost reduction, zero additional licensing cost.',
        tags: ['Azure', 'FinOps', 'Automation', 'Cost Optimisation']
      },
      {
        title: 'Mongo Explorer',
        summary: 'Custom internal DB tool replacing NoSQL Booster — zero licensing cost.',
        problem: 'Production DB access had audit gaps and no approval workflow, creating compliance risk.',
        solution: 'Built custom tool with MFA login, maker-checker approval (PM sign-off for every prod change), 20-min inactivity auto-logout, and expiry-based user accounts.',
        impact: 'Eliminated audit gaps and unauthorised production access; built entirely on open-source.',
        tags: ['Security', 'Compliance', 'Open-Source', 'MongoDB']
      },
      {
        title: 'Agent-Based Deployment Dashboard',
        summary: 'Zero-downtime deployment pipeline cutting deploy time from 20–30 min to under 3 min.',
        problem: 'UI and API deployments took 20–30 minutes with manual steps and downtime risk.',
        solution: 'Developed a custom agent-based Deployment Dashboard enabling zero-downtime deployments with automated rollback triggers.',
        impact: 'Reduced average deployment time from 20–30 minutes to under 3 minutes.',
        tags: ['CI/CD', 'Automation', 'Zero-Downtime', 'Jenkins']
      },
      {
        title: 'Full Observability Stack',
        summary: 'End-to-end monitoring with custom exporters for fintech SaaS platform.',
        problem: 'No proactive infrastructure visibility; client SLA issues were detected reactively.',
        solution: 'Designed and implemented Prometheus + Grafana with custom exporters for MongoDB, RabbitMQ, and Keycloak.',
        impact: 'Enabled proactive detection of infrastructure and API issues, directly improving client SLA adherence.',
        tags: ['Prometheus', 'Grafana', 'ELK', 'Observability']
      }
    ],
    experienceTitle: 'Professional Experience',
    experience: [
      {
        company: 'ezee.ai',
        companyNote: 'Fintech SaaS Platform (Veefin Solutions) · Bangalore, India',
        period: 'Dec 2024 – Present',
        role: 'DevOps & L1 Team Lead',
        bullets: [
          'Led and mentored a 20-member cross-functional DevOps and L1 team, overseeing daily operations, incident resolution, and release delivery across multiple enterprise client environments.',
          'Designed full observability stack using Prometheus & Grafana with custom exporters (MongoDB, RabbitMQ, Keycloak), improving client SLA adherence.',
          'Built Mongo Explorer from scratch: custom internal DB tool with MFA, maker-checker approval workflow, and audit trails — replacing paid NoSQL Booster.',
          'Developed agent-based Deployment Dashboard enabling zero-downtime deployments, reducing deploy time from 20–30 min to under 3 min.',
          'Designed Azure Cost Intelligence dashboard achieving 40%+ total cloud cost reduction via rightsizing and automated non-prod shutdowns.',
          'Represented DevOps in client-facing communications, business negotiations, onboarding, and DR compliance drills. All tooling built on open-source — zero licensing cost.'
        ]
      },
      {
        company: 'C R Infotech',
        companyNote: 'IT Services Company · Bangalore, India',
        period: 'Aug 2023 – Nov 2024',
        role: 'DevOps Engineer',
        bullets: [
          'Designed and maintained CI/CD pipelines using Jenkins and GitHub Actions across dev, staging, and production environments.',
          'Managed AWS infrastructure (EC2, EKS, S3, RDS, VPC, IAM) using Terraform and Ansible, ensuring consistent and repeatable provisioning.',
          'Containerised application workloads using Docker and Kubernetes (EKS), supporting horizontal scaling and deployment consistency.',
          'Implemented security compliance controls, disaster recovery measures, and automated alerting using Prometheus and Grafana.',
          'Documented infrastructure configurations, runbooks, and incident response procedures to support team knowledge sharing.'
        ]
      },
      {
        company: 'Avance Consulting / Wisestep',
        companyNote: 'Consulting Engagement (Recruitment Technology SaaS)',
        period: 'Jul 2022 – Aug 2023',
        role: 'DevOps Engineer (Consultant)',
        bullets: [
          'Managed and optimised CI/CD pipelines on Jenkins, standardising pipeline structure across dev and production environments.',
          'Implemented IaC using Terraform and CloudFormation for AWS provisioning, eliminating configuration drift.',
          'Implemented security best practices: IAM policies, secrets management, and environment segregation across the full deployment pipeline.',
          'Participated in on-call rotation to resolve incidents and maintain high system availability.'
        ]
      },
      {
        company: 'Unilax Consumer Solutions',
        companyNote: 'Consumer Technology Startup · Bangalore, India',
        period: 'Jan 2022 – Jun 2022',
        role: 'DevOps Engineer',
        bullets: [
          'Built and maintained CI/CD pipelines using Jenkins; containerised applications with Docker, reducing environment inconsistency issues.',
          'Automated infrastructure provisioning using Terraform and Ansible, improving deployment speed and repeatability.',
          'Troubleshot and resolved production incidents; supported development teams on DevOps best practices.'
        ]
      },
      {
        company: 'C360 Software',
        companyNote: 'Software Products Company · First Professional Role',
        period: 'Jul 2021 – Jan 2022',
        role: 'Jr. DevOps Engineer',
        bullets: [
          'Monitored and maintained infrastructure to ensure optimal system performance and availability.',
          'Assisted senior DevOps engineers in implementing automation tools and deployment pipeline improvements.',
          'Collaborated with development and operations teams to troubleshoot technical issues and support deployment planning.'
        ]
      }
    ],
    stackTitle: 'Technology Coverage',
    stack: [
      { group: 'Cloud (AWS)', items: ['EC2', 'EKS', 'S3', 'RDS', 'CloudWatch', 'IAM', 'VPC', 'Route53', 'CloudFront', 'Lambda'] },
      { group: 'Cloud (Azure)', items: ['Virtual Machines', 'Resource Groups', 'Cost Management', 'Subscription Management'] },
      { group: 'Infra as Code', items: ['Terraform', 'Ansible', 'CloudFormation'] },
      { group: 'Containers & Orchestration', items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'EKS'] },
      { group: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'Zero-Downtime Pipelines'] },
      { group: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'ELK Stack', 'MongoDB Exporter', 'RabbitMQ Exporter'] },
      { group: 'Databases & Messaging', items: ['MongoDB', 'RabbitMQ', 'PostgreSQL'] },
      { group: 'Scripting & OS', items: ['Bash', 'Python', 'Linux (Ubuntu / CentOS)'] }
    ],
    certifications: [
      { name: 'AWS Certified Solutions Architect – Associate', status: 'In Progress', target: 'Target: Q3 2026' },
      { name: 'Certified Kubernetes Administrator (CKA)', status: 'Planned', target: 'Target: Q4 2026' }
    ],
    education: [
      {
        degree: 'B.Tech – Electrical & Electronics Engineering',
        institution: 'Narayana Engineering College, Nellore | JNTU Anantapuram',
        period: '2016 – 2019'
      },
      {
        degree: 'Diploma – Electrical & Electronics Engineering',
        institution: 'Government Polytechnic College, Nellore',
        period: '2012 – 2016'
      }
    ],
    languages: [
      { lang: 'English', level: 'Professional' },
      { lang: 'Telugu', level: 'Native' },
      { lang: 'Hindi', level: 'Conversational' },
      { lang: 'Japanese', level: 'Beginner (Learning)' }
    ],
    footer: {
      headline: 'Open for Senior DevOps / Platform Engineering Roles — Japan & Global',
      description:
        'If your team needs cloud-native expertise, strong observability, and measurable infrastructure cost savings, I am available for interviews.',
      cta: 'Contact by Email'
    }
  },
  jp: {
    nav: {
      role: 'DevOpsエンジニア & チームリード',
      availability: '日本・グローバル採用募集中',
      contact: 'イントロコールを予約'
    },
    hero: {
      eyebrow: 'プラットフォームの信頼性。オブザーバビリティ。クラウドコスト管理。',
      title: 'スケールに対応するプロダクション・プラットフォームを構築するDevOpsチームリード。',
      subtitle:
        '4年以上の経験を持つDevOpsエンジニア & チームリード。クラウドネイティブインフラの設計、フルオブザーバビリティスタックの構築、40%以上のインフラコスト削減を実現。フィンテックSaaSプラットフォームにて20名のDevOpsチームを率いた実績あり。日本およびグローバルでのリモート・オンサイト機会を探しています。',
      primary: '履歴書をダウンロード',
      secondary: 'ケーススタディを見る'
    },
    metrics: [
      { value: '40%+', label: 'クラウドコスト削減' },
      { value: '20名', label: 'チームリード実績' },
      { value: '3分以内', label: 'デプロイ時間（従来20〜30分）' },
      { value: '4年以上', label: 'DevOps経験' }
    ],
    recruiterSignals: [
      { label: 'ターゲット市場', value: '日本・グローバル', icon: Globe2 },
      { label: 'ビザステータス', value: 'スポンサーシップ希望', icon: ShieldCheck },
      { label: '日本語', value: '初級（学習中）', icon: Languages },
      { label: '移住意欲', value: '移住可能', icon: MapPin }
    ],
    stats: [
      { value: '40%+', label: 'コスト削減', icon: BarChart },
      { value: '20名', label: 'チームリード', icon: Users },
      { value: '4年以上', label: 'DevOps経験', icon: Zap }
    ],
    casesTitle: '主なプラットフォーム・プロジェクト',
    cases: [
      {
        title: 'Azure Cost Intelligence',
        summary: 'ライブFinOpsダッシュボードで40%以上のクラウドコスト削減を実現。',
        problem: 'サブスクリプション全体でVMの使用率の可視性が低く、クラウド支出が増加していました。',
        solution: 'サブスクリプション・リソースグループごとの15日間のリソース使用率分析と、業務時間外の非本番環境の自動シャットダウン/起動を構築。',
        impact: '追加ライセンスコストゼロで、40%以上のクラウドコスト削減を達成。',
        tags: ['Azure', 'FinOps', 'Automation', 'コスト最適化']
      },
      {
        title: 'Mongo Explorer',
        summary: 'NoSQL Boosterを置き換えたカスタム内部DBツール — ライセンスコストゼロ。',
        problem: '本番DBアクセスに監査ギャップと承認ワークフローがなく、コンプライアンスリスクが生じていました。',
        solution: 'MFAログイン、メーカーチェッカー承認ワークフロー（PM承認）、20分不活動自動ログアウト、有効期限付きユーザーアカウントを持つカスタムツールを構築。',
        impact: '監査ギャップと無許可の本番アクセスを排除。完全オープンソースで構築。',
        tags: ['Security', 'Compliance', 'Open-Source', 'MongoDB']
      },
      {
        title: 'エージェントベースDeployment Dashboard',
        summary: 'デプロイ時間を20〜30分から3分未満に短縮。',
        problem: 'UIおよびAPIのデプロイに20〜30分かかり、手動ステップとダウンタイムリスクがありました。',
        solution: '自動ロールバックトリガーを備えたゼロダウンタイムデプロイを可能にするエージェントベースのDeployment Dashboardを開発。',
        impact: '平均デプロイ時間を20〜30分から3分未満に短縮。',
        tags: ['CI/CD', '自動化', 'ゼロダウンタイム', 'Jenkins']
      },
      {
        title: 'フル・オブザーバビリティスタック',
        summary: 'カスタムエクスポーターによるフィンテックSaaSの完全監視基盤。',
        problem: 'インフラの可視性がなく、クライアントSLAの問題は事後対応でした。',
        solution: 'MongoDB、RabbitMQ、Keycloak向けのカスタムエクスポーターを備えたPrometheus + Grafanaを設計・実装。',
        impact: 'インフラおよびAPIの問題をプロアクティブに検出し、クライアントSLA遵守を直接改善。',
        tags: ['Prometheus', 'Grafana', 'ELK', 'Observability']
      }
    ],
    experienceTitle: '職務経歴',
    experience: [
      {
        company: 'ezee.ai',
        companyNote: 'フィンテックSaaSプラットフォーム（Veefin Solutions）· バンガロール',
        period: '2024年12月 – 現在',
        role: 'DevOps & L1チームリード',
        bullets: [
          '20名のクロスファンクショナルDevOps・L1チームを率い、複数のエンタープライズクライアント環境にわたる日常運用、インシデント解決、リリースデリバリーを監督。',
          'Prometheus & Grafanaとカスタムエクスポーター（MongoDB、RabbitMQ、Keycloak）を使用したフルオブザーバビリティスタックを構築。',
          'MFA、メーカーチェッカー承認ワークフロー、監査証跡を備えたMongo Explorerをゼロから構築 — 有料NoSQL Boosterを置き換え。',
          'ゼロダウンタイムデプロイを可能にするエージェントベースDeployment Dashboardを開発し、デプロイ時間を20〜30分から3分未満に短縮。',
          'Azure Cost Intelligenceダッシュボードを設計し、40%以上のクラウドコスト削減を達成。'
        ]
      },
      {
        company: 'C R Infotech',
        companyNote: 'ITサービス企業 · バンガロール',
        period: '2023年8月 – 2024年11月',
        role: 'DevOpsエンジニア',
        bullets: [
          'JenkinsとGitHub ActionsでCI/CDパイプラインを設計・維持。',
          'TerraformとAnsibleを使用してAWSインフラ（EC2、EKS、S3、RDS、VPC、IAM）を管理。',
          'DockerとKubernetes（EKS）によるコンテナ化でスケーラビリティを向上。',
          'PrometheusとGrafanaで自動アラートとDR対策を実装。'
        ]
      },
      {
        company: 'Avance Consulting / Wisestep',
        companyNote: 'コンサルティング（採用テクノロジーSaaS）',
        period: '2022年7月 – 2023年8月',
        role: 'DevOpsエンジニア（コンサルタント）',
        bullets: [
          'JenkinsのCI/CDパイプラインを最適化・標準化。',
          'TerraformとCloudFormationでAWSプロビジョニングのIaCを実装。',
          'IAMポリシー、シークレット管理、環境分離によるセキュリティベストプラクティスを実装。'
        ]
      },
      {
        company: 'Unilax Consumer Solutions',
        companyNote: 'コンシューマーテクノロジースタートアップ · バンガロール',
        period: '2022年1月 – 2022年6月',
        role: 'DevOpsエンジニア',
        bullets: [
          'JenkinsでCI/CDパイプラインを構築・維持；Dockerでアプリケーションをコンテナ化。',
          'TerraformとAnsibleでインフラプロビジョニングを自動化。'
        ]
      },
      {
        company: 'C360 Software',
        companyNote: 'ソフトウェアプロダクツ企業 · 最初のプロフェッショナルロール',
        period: '2021年7月 – 2022年1月',
        role: 'Jr. DevOpsエンジニア',
        bullets: [
          'インフラの監視・維持を担当。',
          'シニアDevOpsエンジニアの自動化ツールとパイプライン改善を支援。'
        ]
      }
    ],
    stackTitle: '技術スタック',
    stack: [
      { group: 'クラウド (AWS)', items: ['EC2', 'EKS', 'S3', 'RDS', 'CloudWatch', 'IAM', 'VPC', 'Route53', 'Lambda'] },
      { group: 'クラウド (Azure)', items: ['Virtual Machines', 'Resource Groups', 'Cost Management'] },
      { group: 'IaC', items: ['Terraform', 'Ansible', 'CloudFormation'] },
      { group: 'コンテナ', items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'EKS'] },
      { group: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'ゼロダウンタイム'] },
      { group: 'モニタリング', items: ['Prometheus', 'Grafana', 'ELK Stack'] },
      { group: 'DB & メッセージング', items: ['MongoDB', 'RabbitMQ', 'PostgreSQL'] },
      { group: 'スクリプト & OS', items: ['Bash', 'Python', 'Linux'] }
    ],
    certifications: [
      { name: 'AWS認定ソリューションアーキテクト – アソシエイト', status: '取得中', target: 'Q3 2026予定' },
      { name: 'Certified Kubernetes Administrator (CKA)', status: '計画中', target: 'Q4 2026予定' }
    ],
    education: [
      {
        degree: 'B.Tech – 電気電子工学',
        institution: 'Narayana Engineering College, Nellore | JNTU Anantapuram',
        period: '2016 – 2019'
      },
      {
        degree: 'Diploma – 電気電子工学',
        institution: 'Government Polytechnic College, Nellore',
        period: '2012 – 2016'
      }
    ],
    languages: [
      { lang: '英語', level: 'ビジネス' },
      { lang: 'テルグ語', level: 'ネイティブ' },
      { lang: 'ヒンディー語', level: '日常会話' },
      { lang: '日本語', level: '初級（学習中）' }
    ],
    footer: {
      headline: '日本・グローバルでのシニアDevOps / プラットフォームエンジニア職を募集中',
      description:
        'クラウドネイティブの専門知識、強力なオブザーバビリティ、そして実証済みのインフラコスト削減が必要な場合は、お気軽にご連絡ください。',
      cta: 'メールで問い合わせる'
    }
  }
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

function ExpandableExperience({ item }) {
  const [open, setOpen] = useState(false);
  const preview = item.bullets.slice(0, 2);
  const rest = item.bullets.slice(2);

  return (
    <article className="timeline-item">
      <div className="timeline-head">
        <div>
          <p className="company">{item.company}</p>
          {item.companyNote && <p className="company-note">{item.companyNote}</p>}
        </div>
        <p className="period">{item.period}</p>
      </div>
      <p className="role">{item.role}</p>
      <ul className="bullet-list">
        {preview.map((b) => <li key={b}>{b}</li>)}
        {open && rest.map((b) => <li key={b}>{b}</li>)}
      </ul>
      {rest.length > 0 && (
        <button className="expand-btn" onClick={() => setOpen(!open)}>
          {open ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> +{rest.length} more</>}
        </button>
      )}
    </article>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="page">
      <header className="topbar">
        <div className="shell topbar-inner">
          <div className="brand-block">
            <p className="brand-name">{profile.name}</p>
            <p className="brand-role">{t.nav.role}</p>
          </div>
          <div className="top-actions">
            <div className="availability">
              <span className="dot" />
              <span>{t.nav.availability}</span>
            </div>
            <button className="lang-switch" onClick={() => setLang(lang === 'en' ? 'jp' : 'en')}>
              {lang === 'en' ? 'JP' : 'EN'}
            </button>
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>
              {t.nav.contact}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="shell">
            <Motion.p variants={rise} initial="hidden" animate="show" className="eyebrow">
              {t.hero.eyebrow}
            </Motion.p>
            <Motion.h1 variants={rise} initial="hidden" animate="show" className="hero-title">
              {t.hero.title}
            </Motion.h1>
            <Motion.p variants={rise} initial="hidden" animate="show" className="hero-subtitle">
              {t.hero.subtitle}
            </Motion.p>

            <Motion.div variants={rise} initial="hidden" animate="show" className="hero-ctas">
              <a className="btn btn-solid" href={profile.resume} target="_blank" rel="noreferrer">
                {t.hero.primary}
              </a>
              <a className="btn btn-ghost" href="#case-studies">
                {t.hero.secondary}
              </a>
            </Motion.div>

            <Motion.div variants={rise} initial="hidden" animate="show" className="signal-grid">
              {t.recruiterSignals.map((item) => (
                <article key={item.label} className="signal-card">
                  <item.icon size={16} />
                  <p className="signal-label">{item.label}</p>
                  <p className="signal-value">{item.value}</p>
                </article>
              ))}
            </Motion.div>
          </div>
        </section>

        {/* METRICS */}
        <section className="metrics">
          <div className="shell metric-grid">
            {t.metrics.map((m) => (
              <article key={m.label} className="metric-card">
                <p className="metric-value">{m.value}</p>
                <p className="metric-label">{m.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies" className="cases">
          <div className="shell">
            <h2 className="section-title">{t.casesTitle}</h2>
            <div className="cases-grid cases-grid-2">
              {t.cases.map((item) => (
                <Motion.article key={item.title} className="case-card" whileHover={{ y: -4 }}>
                  <p className="case-name">{item.title}</p>
                  <p className="case-summary">{item.summary}</p>
                  <p className="case-line"><strong>Problem:</strong> {item.problem}</p>
                  <p className="case-line"><strong>Action:</strong> {item.solution}</p>
                  <p className="case-line"><strong>Impact:</strong> {item.impact}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a className="case-link" href={profile.resume} target="_blank" rel="noreferrer">
                    Details <ArrowUpRight size={14} />
                  </a>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience">
          <div className="shell">
            <h2 className="section-title">{t.experienceTitle}</h2>
            <div className="timeline">
              {t.experience.map((item) => (
                <ExpandableExperience key={`${item.company}-${item.period}`} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="stack">
          <div className="shell">
            <h2 className="section-title">{t.stackTitle}</h2>
            <div className="stack-grid stack-grid-4">
              {t.stack.map((group) => (
                <article key={group.group} className="stack-card">
                  <p className="stack-name">{group.group}</p>
                  <div className="tag-row">
                    {group.items.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS + EDUCATION + LANGUAGES */}
        <section className="extras">
          <div className="shell extras-grid">
            {/* Certifications */}
            <article className="extra-card">
              <div className="extra-header">
                <Award size={18} className="extra-icon" />
                <h3 className="extra-title">{lang === 'en' ? 'Certifications' : '資格'}</h3>
              </div>
              <div className="cert-list">
                {t.certifications.map((c) => (
                  <div key={c.name} className="cert-item">
                    <p className="cert-name">{c.name}</p>
                    <div className="cert-meta">
                      <span className={`cert-status cert-status--${c.status === 'In Progress' || c.status === '取得中' ? 'inprogress' : 'planned'}`}>
                        {c.status}
                      </span>
                      <span className="cert-target">{c.target}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Education */}
            <article className="extra-card">
              <div className="extra-header">
                <GraduationCap size={18} className="extra-icon" />
                <h3 className="extra-title">{lang === 'en' ? 'Education' : '学歴'}</h3>
              </div>
              <div className="edu-list">
                {t.education.map((e) => (
                  <div key={e.degree} className="edu-item">
                    <p className="edu-degree">{e.degree}</p>
                    <p className="edu-institution">{e.institution}</p>
                    <p className="edu-period">{e.period}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Languages */}
            <article className="extra-card">
              <div className="extra-header">
                <Languages size={18} className="extra-icon" />
                <h3 className="extra-title">{lang === 'en' ? 'Languages' : '言語'}</h3>
              </div>
              <div className="lang-list">
                {t.languages.map((l) => (
                  <div key={l.lang} className="lang-item">
                    <span className="lang-name">{l.lang}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-box">
          <ShieldCheck size={22} />
          <div>
            <h3>{t.footer.headline}</h3>
            <p>{t.footer.description}</p>
          </div>
          <div className="footer-actions">
            <a className="btn btn-solid" href={`mailto:${profile.email}`}>{t.footer.cta}</a>
            {profile.linkedin && (
              <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            )}
            {profile.github && (
              <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
        <div className="shell meta-row">
          <span>{profile.location}</span>
          <span>© 2026 {profile.name.toUpperCase()}</span>
        </div>
      </footer>
    </div>
  );
}
