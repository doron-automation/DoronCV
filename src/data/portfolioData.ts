import { 
  ProjectItem, 
  ExperienceItem, 
  SkillCategory, 
  MetricItem, 
  PipelineStep, 
  CertificationItem, 
  EducationItem 
} from '../types';

export const PERSONAL_INFO = {
  name: {
    he: 'דורון כהן',
    en: 'Doron Cohen'
  },
  title: {
    he: 'Senior QA Engineer',
    en: 'Senior QA Engineer'
  },
  specialization: {
    he: 'Automation · Cloud · Microservices · API · Manual Testing',
    en: 'Automation · Cloud · Microservices · API · Manual Testing'
  },
  heroSub: {
    he: 'מהנדס QA בכיר עם 12+ שנות ניסיון בבדיקות מערכות Web, Mobile, SaaS, Cloud ו-Microservices מורכבות מקצה לקצה.',
    en: 'Senior QA Engineer with 12+ years of extensive experience delivering comprehensive testing for Web, Mobile, SaaS, Cloud, and Microservices architectures.'
  },
  heroHighlight: {
    he: 'שילוב עמוק של אוטומציה מתקדמת (Playwright, Selenium, Python) ובדיקות ידניות קפדניות (Exploratory, UAT, Regression) עם ארכיטקטורת AWS, בדיקות API ו-CI/CD.',
    en: 'Deep synergy of modern test automation (Playwright, Selenium, Python) and rigorous manual validation (Exploratory, UAT, Regression) across AWS cloud environments, API ecosystems, and CI/CD pipelines.'
  },
  email: 'doroncohenqa@gmail.com',
  phone: '054-6997207',
  phoneDisplay: '054-6997207',
  location: {
    he: 'ישראל (פתוח למשרות היברידיות / מרכז / דרום / Remote)',
    en: 'Israel (Open for Hybrid / Center / South / Remote)'
  },
  availability: {
    he: 'זמין מיידית (Immediate Availability)',
    en: 'Available Immediately'
  },
  linkedin: 'https://www.linkedin.com/in/doron-cohen-qa',
  github: 'https://github.com/doroncohenqa',
  resumeFilename: 'Doron_Cohen_QA_Resume.pdf'
};

export const KEY_METRICS: MetricItem[] = [
  {
    id: 'years',
    number: 12,
    suffix: '+',
    label: 'שנות ניסיון',
    sublabel: 'בדיקות מערכות ענן, לוויין ו-Microservices',
    iconName: 'ShieldCheck'
  },
  {
    id: 'coverage',
    number: 95,
    suffix: '%',
    label: 'Test Coverage',
    sublabel: 'כיסוי בדיקות בפיצ׳רים קריטיים (מ-60% ל-95%)',
    iconName: 'CodeXml'
  },
  {
    id: 'bug_reduction',
    number: 30,
    suffix: '%',
    label: 'הפחתת באגים בייצור',
    sublabel: 'Reduction in Production Bugs ברגרסיה אסטרטגית',
    iconName: 'BugOff'
  },
  {
    id: 'exec_speed',
    number: 40,
    suffix: '%',
    label: 'קיצור זמן ריצת בדיקות',
    sublabel: 'Reduction in Test Execution Time באופטימיזציה',
    iconName: 'Zap'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'nice',
    company: 'NICE Systems',
    role: 'Senior QA Engineer',
    period: '2020 – 2026',
    location: 'ישראל',
    department: 'Microservices & Cloud QA Team',
    summary: 'הובלת אסטרטגיית בדיקות אינטגרציה ו-E2E למערכת Microservices מבוססת AWS, גדולה, מורכבת ומבוזרת בענן.',
    achievements: [
      'הוביל את אסטרטגיית בדיקות האינטגרציה וה-E2E למערכת Microservices מבוססת AWS בעלת עומסים גבוהים.',
      'הגדיל את כיסוי הבדיקות בפיצ׳רים קריטיים מ-60% ל-95% באמצעות פיתוח תשתיות אוטומציה מתקדמות ל-API ול-E2E.',
      'הפחית ב-30% את כמות הבאגים בייצור (Production Bugs) באמצעות תכנון רגרסיה חכמה ושיפורי איכות רוחביים.',
      'פיתח ותחזק חבילות אוטומציה מתקדמות ב-Python, Playwright ו-Selenium עם Page Object Model (POM).',
      'תכנן וביצע בדיקות ידניות E2E מעמיקות, כולל Exploratory Testing, Smoke, Regression ו-UAT.',
      'ביצע בדיקות API ו-Backend מקיפות באמצעות Postman, Swagger, שאילתות JSON ושירותי REST.',
      'עבד באופן שוטף עם צנרות Jenkins CI/CD, סביבות Docker, Kubernetes וניטור לוגים ב-Splunk ו-Kibana.',
      'ביצע בדיקות ביצועים מקיפות באמצעות Gatling לאיתור וטיפול בצווארי בקבוק (Bottlenecks) קריטיים.',
      'חקר תקלות ייצור מורכבות (Production Investigation) וניהל את מחזור החיים המלא של Defect Management דרך Jira.',
      'עבד בצמוד לצוותי R&D, DevOps, ארכיטקטים ומנהלי מוצר בסביבת Agile / Scrum מהירה.',
      'מינף כלי AI מובילים (GitHub Copilot, ChatGPT) לשיפור איכות מסמכי STD/STP ולהאצת תכנון בדיקות (Test Plans).'
    ],
    techStack: [
      'Microservices',
      'AWS',
      'Playwright',
      'Selenium',
      'Python',
      'Pytest',
      'REST API',
      'Postman',
      'Jenkins CI/CD',
      'Gatling',
      'Splunk',
      'Docker',
      'Kubernetes',
      'SQL',
      'Jira',
      'Agile / Scrum'
    ],
    impactStats: [
      { label: 'כיסוי פיצ׳רים', value: '95%' },
      { label: 'הפחתת באגים בייצור', value: '-30%' },
      { label: 'קיצור מחזור שחרור', value: 'x2 מהיר יותר' }
    ]
  },
  {
    id: 'gilat',
    company: 'Gilat Satellite Networks',
    role: 'Senior QA Engineer',
    period: '2011 – 2019',
    location: 'ישראל',
    department: 'Multidisciplinary Systems & Networks QA',
    summary: 'ביצוע בדיקות אינטגרציה, תאימות, Backend ופרוטוקולי תקשורת רב-תחומיים במערכות לוויין גלובליות מורכבות.',
    achievements: [
      'ביצע בדיקות אינטגרציה מורכבות, בדיקות תאימות, Backend ו-API בסביבות תקשורת לוויין מתקדמות.',
      'ביצע ניתוח לוגים מעמיק (Deep Log Investigation) באמצעות כלי Linux ייעודיים ו-Wireshark ברמת הפאקטות.',
      'בדק ואימת פרוטוקולי תקשורת ורשת מגוונים: HTTP, SOAP UI, SNMP, FTP, TCP/IP ו-Ethernet.',
      'כתב והריץ שאילתות SQL מורכבות ב-MSSQL וב-Oracle לאיתור תקלות, אימות נתונים (Data Integrity) ושחזור בעיות.',
      'הוביל אופטימיזציית תהליכי בדיקה למערכות רב-תחומיות וקיצר את זמן ריצת הבדיקות הכולל ב-~40%.',
      'הוביל פרויקטי R&D רב-תחומיים במקביל מהשקה ועד מסירה ללקוח (Customer Delivery), תוך תיאום צוותים של 10+ מהנדסים בחומרה, תוכנה ואינטגרציה.'
    ],
    techStack: [
      'Integration Testing',
      'Backend Testing',
      'API / REST',
      'SOAP UI',
      'Wireshark',
      'Linux CLI',
      'SNMP',
      'FTP',
      'SQL (MSSQL/Oracle)',
      'TCP/IP',
      'Multidisciplinary',
      'Satellite Comms'
    ],
    impactStats: [
      { label: 'קיצור זמן בדיקות', value: '-40%' },
      { label: 'גודל צוותי R&D', value: '10+ מהנדסים' },
      { label: 'וותק והובלה', value: '8 שנים' }
    ]
  }
];

export const AUTOMATION_PIPELINE: PipelineStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Requirements & User Stories',
    subtitle: 'ניתוח דרישות ואפיון',
    description: 'סקירת PRD, איתור מקרי קצה, הגדרת קריטריוני קבלה (Acceptance Criteria) והערכת סיכונים מוקדמת.',
    icon: 'FileText',
    tech: ['Jira', 'Confluence', 'Agile']
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Test Design & STP/STD',
    subtitle: 'תכנון בדיקות ותרחישים',
    description: 'מיפוי תרחישי בדיקה (Positive, Negative, Boundary), סיווג ל-Smoke, Regression ו-Critical Path, שימוש ב-AI להאצת כתיבת STP/STD.',
    icon: 'Cpu',
    tech: ['TestRail', 'Copilot', 'Xray']
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Framework & POM Development',
    subtitle: 'פיתוח תשתית ב-Python & Playwright',
    description: 'בניית מודלים מבוססי Page Object Model (POM), שימוש ב-Fixtures, Data-Driven Tests ו-Config Management גמיש.',
    icon: 'Code',
    tech: ['Python', 'Playwright', 'Selenium']
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Multi-Layer Test Execution',
    subtitle: 'בדיקות API, UI ו-E2E מקביליות',
    description: 'כיסוי מרובה שכבות: בדיקות API מהירות לאימות Business Logic לצד בדיקות E2E מלאות בדפדפנים מרובים.',
    icon: 'Layers',
    tech: ['REST', 'Playwright UI', 'Postman']
  },
  {
    id: 'step-5',
    stepNumber: 5,
    title: 'Pytest Engine & Assertions',
    subtitle: 'מנוע הרצה ו-Assertions',
    description: 'הרצה מקבילית מהירה (pytest-xdist), ניהול Assertions מדויקים, צילומי מסך אוטומטיים בכישלון ו-Retries חכמים.',
    icon: 'PlayCircle',
    tech: ['Pytest', 'pytest-xdist', 'Hooks']
  },
  {
    id: 'step-6',
    stepNumber: 6,
    title: 'Jenkins CI/CD Pipeline',
    subtitle: 'אינטגרציה לצנרת CI/CD',
    description: 'טריגר אוטומטי בכל Commit / PR, הרצה בקונטיינרי Docker מבודדים, בדיקת שער איכות (Quality Gate) לפני Merge.',
    icon: 'Workflow',
    tech: ['Jenkins', 'Docker', 'GitHub Actions']
  },
  {
    id: 'step-7',
    stepNumber: 7,
    title: 'Allure Reporting & Metrics',
    subtitle: 'דוחות Allure וויזואליזציה',
    description: 'הפקת דוחות איכות עשירים עם צילומי מסך, וידאו, זמני ריצה, היסטוריית רגרסיה וסיווג אוטומטי של תקלות.',
    icon: 'BarChart3',
    tech: ['Allure', 'Slack Alerts', 'Kibana']
  },
  {
    id: 'step-8',
    stepNumber: 8,
    title: 'Production Readiness & Release',
    subtitle: 'אישור שחרור לסביבת ייצור',
    description: 'אישור Release סופי עם 0 באגים חוסמים (Blockers), ניטור יציבות ו-Smoke Test חי בסביבת Production.',
    icon: 'CheckCircle2',
    tech: ['AWS CloudWatch', 'Splunk', 'Production']
  }
];

export const AUTOMATION_CARDS = [
  {
    name: 'Playwright',
    category: 'E2E & Component',
    desc: 'אוטומציה מודרנית מהירה, תמיכה מובנית ב-Async/Await, Auto-wait ורשת מרובת דפדפנים (Chromium, Firefox, WebKit).',
    icon: 'Gauge'
  },
  {
    name: 'Selenium WebDriver',
    category: 'Cross-Browser Automation',
    desc: 'ניסיון רב שנים בבניית סוויטות Selenium עמידות ויציבות, טיפול ב-Explicit Waits ו-Dynamic Elements.',
    icon: 'Globe'
  },
  {
    name: 'Python',
    category: 'Core Language',
    desc: 'שפת הפיתוח המרכזית לתשתיות אוטומציה, סקריפטים ל-Data Generation, אינטגרציה עם APIs ומסדי נתונים.',
    icon: 'Terminal'
  },
  {
    name: 'Pytest Framework',
    category: 'Test Runner',
    desc: 'ניהול Fixtures מתקדם, פרמטריזציה (Parametrize), הרצה מקבילית מבוזרת ו-Hooks לדיווח מותאם אישית.',
    icon: 'Play'
  },
  {
    name: 'API Automation',
    category: 'Backend & Microservices',
    desc: 'סוויטות בדיקה מהירות מבוססות Requests/REST, אימות JSON Schemas, Response Codes ו-Database Consistency.',
    icon: 'Network'
  },
  {
    name: 'E2E Architecture',
    category: 'User Flow Integrity',
    desc: 'תכנון ומימוש Page Object Model (POM) נקי, בידוד סביבות, איפוס State ובדיקות End-to-End אמיתיות.',
    icon: 'Workflow'
  },
  {
    name: 'CI/CD Integration',
    category: 'Continuous Testing',
    desc: 'חיבור סוויטות הבדיקה לצנרות Jenkins ו-Docker, חסימת Deploy שבור (Fail-Fast) והתראות מיידיות.',
    icon: 'GitBranch'
  },
  {
    name: 'Allure Reporting',
    category: 'Observability & QA BI',
    desc: 'דשבורד תוצאות אינטראקטיבי עם צילומי מסך בכישלונות, עקבות רשת (HAR logs) וניתוח טרנדים היסטוריים.',
    icon: 'PieChart'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'testing',
    title: 'Testing Methodologies',
    iconName: 'CheckSquare',
    skills: [
      { name: 'Web Applications', level: 'Expert', highlight: true },
      { name: 'Mobile (iOS & Android)', level: 'Advanced', highlight: true },
      { name: 'API & REST Services', level: 'Expert', highlight: true },
      { name: 'Microservices Testing', level: 'Expert', highlight: true },
      { name: 'Integration Testing', level: 'Expert', highlight: true },
      { name: 'Regression Testing', level: 'Expert', highlight: true },
      { name: 'Smoke / Sanity Testing', level: 'Expert' },
      { name: 'UAT (User Acceptance)', level: 'Advanced' },
      { name: 'Exploratory Testing', level: 'Expert', highlight: true },
      { name: 'Performance Testing', level: 'Advanced', highlight: true },
      { name: 'DB & Data Integrity', level: 'Expert' }
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Code',
    iconName: 'Code2',
    skills: [
      { name: 'Python', level: 'Expert', highlight: true },
      { name: 'Playwright', level: 'Expert', highlight: true },
      { name: 'Selenium WebDriver', level: 'Expert', highlight: true },
      { name: 'Pytest', level: 'Expert', highlight: true },
      { name: 'Page Object Model (POM)', level: 'Expert', highlight: true },
      { name: 'Requests / REST API', level: 'Expert', highlight: true },
      { name: 'Appium (Mobile)', level: 'Proficient' },
      { name: 'Data-Driven Testing', level: 'Expert' }
    ]
  },
  {
    id: 'cloud_devops',
    title: 'Cloud & DevOps',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 'Advanced', highlight: true },
      { name: 'Docker Containers', level: 'Advanced', highlight: true },
      { name: 'Kubernetes (K8s)', level: 'Proficient', highlight: true },
      { name: 'Jenkins CI/CD', level: 'Advanced', highlight: true },
      { name: 'AWS CloudWatch', level: 'Advanced' },
      { name: 'RabbitMQ / Kafka', level: 'Proficient' },
      { name: 'Azure Cloud', level: 'Proficient' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Observability',
    iconName: 'Wrench',
    skills: [
      { name: 'Postman', level: 'Expert', highlight: true },
      { name: 'Jira Defect Lifecycle', level: 'Expert', highlight: true },
      { name: 'Git & GitHub / GitLab', level: 'Expert', highlight: true },
      { name: 'Splunk Log Analyzer', level: 'Advanced', highlight: true },
      { name: 'Kibana & Elastic', level: 'Advanced' },
      { name: 'Swagger / OpenAPI', level: 'Expert' },
      { name: 'Allure Report', level: 'Expert', highlight: true },
      { name: 'Gatling (Load/Perf)', level: 'Advanced' },
      { name: 'Bitbucket', level: 'Advanced' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Querying',
    iconName: 'Database',
    skills: [
      { name: 'SQL Querying', level: 'Expert', highlight: true },
      { name: 'MSSQL Server', level: 'Advanced', highlight: true },
      { name: 'Oracle Database', level: 'Advanced' },
      { name: 'MySQL / PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB (NoSQL)', level: 'Proficient', highlight: true },
      { name: 'AWS DynamoDB', level: 'Proficient' },
      { name: 'Redis Cache', level: 'Proficient' }
    ]
  },
  {
    id: 'networking',
    title: 'Networking & Protocols',
    iconName: 'Network',
    skills: [
      { name: 'Wireshark Packet Analysis', level: 'Expert', highlight: true },
      { name: 'Linux CLI & Scripting', level: 'Advanced', highlight: true },
      { name: 'HTTP / HTTPS Protocols', level: 'Expert', highlight: true },
      { name: 'SOAP UI & XML', level: 'Advanced' },
      { name: 'SNMP & Network Monitors', level: 'Advanced' },
      { name: 'FTP / SFTP', level: 'Advanced' },
      { name: 'TCP/IP Architecture', level: 'Expert' },
      { name: 'Cisco Routing/Switching', level: 'Proficient' }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'dominos-e2e',
    title: 'Domino\'s E2E Automation Framework',
    subtitle: 'מערכת אוטומציה לבדיקת תהליך הזמנה מלא באתר Domino\'s',
    category: 'E2E',
    technologies: ['Python', 'Playwright', 'Pytest', 'POM', 'Allure', 'Fixtures', 'Screenshots'],
    description: 'מערכת אוטומציה מתקדמת מקצה לקצה לבדיקת כל זרימת ההזמנה באתר Domino\'s: בחירת סניף, הרכבת פיצה עם תוספות, עגלת קניות, בדיקת קופונים, ואימות שלבי ה-Checkout תוך שימוש ב-Page Object Model (POM) נקי.',
    features: [
      'Page Object Model (POM) מלא עם הפרדה נקייה בין לוגיקת דפים לבדיקות',
      'תמיכה מלאה בהרצה במקביל (Parallel Execution) בדפדפנים שונים',
      'מנגנון Fixtures חכם לאתחול דפדפן, ניקוי Cookies ושמירת Session State',
      'תפיסת צילומי מסך ו-Trace אוטומטי בכל כישלון של Assertion',
      'דוחות Allure אינטראקטיביים עם צעדים (Steps) מתועדים',
      'טיפול חכם ב-Exceptions, רשתות איטיות ופופאפים דינמיים'
    ],
    metrics: 'כיסוי 100% מזרימת ההזמנה הקריטית, זמן ריצה < 45 שניות',
    githubUrl: 'https://github.com/doroncohenqa/dominos-playwright-e2e',
    codeSnippet: {
      filename: 'tests/test_order_pizza_e2e.py',
      language: 'python',
      code: `import pytest
from pages.home_page import HomePage
from pages.menu_page import MenuPage
from pages.checkout_page import CheckoutPage
import allure

@allure.feature("Pizza Ordering E2E")
@allure.story("Order Custom Pizza with Toppings")
@pytest.mark.e2e
def test_full_order_flow(page, branch_fixture):
    """Verify complete customer journey from branch selection to payment step"""
    home = HomePage(page)
    menu = MenuPage(page)
    checkout = CheckoutPage(page)
    
    with allure.step("1. Select Delivery Address & Branch"):
        home.navigate()
        home.select_delivery_city("Tel Aviv", "Rothschild 10")
        assert home.is_branch_confirmed(), "Branch was not selected properly"
        
    with allure.step("2. Build Custom Pizza with Olives & Mushrooms"):
        menu.open_pizza_builder()
        menu.select_size("Extra Large (Family)")
        menu.add_topping("Green Olives")
        menu.add_topping("Fresh Mushrooms")
        menu.add_to_cart()
        
    with allure.step("3. Proceed to Checkout and Verify Cart Integrity"):
        menu.proceed_to_checkout()
        assert checkout.get_total_items_count() == 1
        assert "Fresh Mushrooms" in checkout.get_item_toppings()
        assert checkout.is_ready_for_payment()`
    }
  },
  {
    id: 'api-framework',
    title: 'Enterprise API Automation Framework',
    subtitle: 'תשתית אוטומציה לבדיקות REST API ו-Microservices',
    category: 'API',
    technologies: ['Python', 'Pytest', 'Requests', 'JSON Schema', 'REST API', 'Postman', 'OAuth2'],
    description: 'תשתית בדיקות API מהירה ומודולרית לבדיקות Backend של שירותי Microservices, בדיקת Auth Tokens, אימות Schema של JSON Responses, ואימות עקביות מול מסדי נתונים.',
    features: [
      'מחלקה מרכזית (API Client) המנהלת Sessions, Headers, Auth ו-Timeouts',
      'אימות JSON Schema קפדני למניעת שינויי Contract לא צפויים',
      'בדיקות אינטגרציה רציפות בין Microservices מבוזרים',
      'בדיקות עומסים וזמני תגובה ממוצעים (Latency SLA Validation)',
      'אימות נתוני מסד נתונים (SQL/NoSQL) לאחר קריאות POST/PUT/DELETE',
      'דוחות שגיאה עשירים הכוללים Request Payload, Response Code ו-Headers'
    ],
    metrics: '128+ בדיקות API רצות תוך פחות מ-18 שניות ב-CI/CD',
    githubUrl: 'https://github.com/doroncohenqa/python-api-automation-framework',
    codeSnippet: {
      filename: 'services/test_user_microservice.py',
      language: 'python',
      code: `import pytest
from client.api_client import MicroserviceClient
from schemas.user_schema import USER_RESPONSE_SCHEMA
import jsonschema

@pytest.fixture(scope="module")
def client():
    return MicroserviceClient(base_url="https://api.internal.cloud/v1")

@pytest.mark.api
@pytest.mark.smoke
def test_create_and_validate_user(client, unique_user_payload):
    # 1. POST Create User
    response = client.post("/users", json=unique_user_payload)
    assert response.status_code == 201
    user_id = response.json().get("id")
    
    # 2. Schema Validation
    jsonschema.validate(instance=response.json(), schema=USER_RESPONSE_SCHEMA)
    
    # 3. GET Verify User State
    get_res = client.get(f"/users/{user_id}")
    assert get_res.status_code == 200
    assert get_res.json()["email"] == unique_user_payload["email"]
    assert get_res.json()["status"] == "ACTIVE"`
    }
  },
  {
    id: 'web-framework',
    title: 'Cross-Browser Web Automation Suite',
    subtitle: 'תשתית אוטומציה עמידה בדפדפנים מרובים',
    category: 'Framework',
    technologies: ['Playwright', 'Python', 'Pytest', 'POM', 'Cross-Browser', 'CI/CD', 'Docker'],
    description: 'חבילת בדיקות אינטרנט רוחבית המכסה ממשקי משתמש מורכבים ב-SaaS, מערכות ניהול דוחות ודשבורדים עתירי נתונים, כולל אימות קבצים מורדים, גרפים אינטראקטיביים והרשאת משתמשים.',
    features: [
      'הרצה חלקה על גבי Chromium, Firefox ו-WebKit במקביל',
      'תמיכה ב-Headless ו-Headed modes לפי משתני סביבה',
      'מנגנון זיהוי אלמנטים גמיש (Role-based & Data-testid Locators)',
      'הקלטת וידאו ועקבות ביצועים (Traces) על סביבות Staging',
      'אינטגרציה ל-Docker לצורך הרצה מבודדת ואחידה ב-Jenkins'
    ],
    metrics: 'הפחתת זמן ריצת חבילת בדיקות ב-65% עם Parallel Execution',
    githubUrl: 'https://github.com/doroncohenqa/playwright-web-automation-suite',
    codeSnippet: {
      filename: 'framework/base_page.py',
      language: 'python',
      code: `from playwright.sync_api import Page, expect

class BasePage:
    def __init__(self, page: Page):
        self.page = page
        
    def wait_and_click(self, selector: str, timeout: int = 5000):
        locator = self.page.locator(selector)
        locator.wait_for(state="visible", timeout=timeout)
        locator.click()
        
    def fill_input(self, selector: str, text: str):
        locator = self.page.locator(selector)
        locator.fill(text)
        
    def assert_toast_message(self, expected_message: str):
        toast = self.page.get_by_role("alert")
        expect(toast).to_contain_text(expected_message)`
    }
  },
  {
    id: 'qa-management',
    title: 'QA Test Management & Defect Lifecycle',
    subtitle: 'מתודולוגיית ניהול בדיקות, STP/STD ומעקב באגים',
    category: 'Management',
    technologies: ['Test Plan (STP)', 'Test Design (STD)', 'Regression Strategy', 'Jira', 'Agile', 'Quality Gates'],
    description: 'תכנון וניהול תהליכי QA שלמים עבור פיצ\'רים מערכתיים מורכבים, החל מכתיבת מסמכי STP/STD, הגדרת מטריצות בדיקה (Test Matrix), תעדוף בדיקות Smoke & Regression ועד ניהול מחזור חיי הבאגים ב-Jira.',
    features: [
      'כתיבת מסמכי STP ו-STD מפורטים ומובנים המכסים תרחישי קצה',
      'הגדרת Quality Gates קפדניים למעבר גרסאות בין Dev, Staging ו-Prod',
      'ניהול רגרסיה יעיל עם סיווג לפי Impact Analysis להקטנת זמן בדיקה',
      'בדיקות Exploratory ו-Usability מבוססות חוויית משתמש אמיתית',
      'תחקור באגים (RCA - Root Cause Analysis) ודוחות איכות שבועיים'
    ],
    metrics: '0 באגים קריטיים (Showstoppers) ב-Production בשחרורי גרסה',
    githubUrl: 'https://github.com/doroncohenqa/qa-test-management-templates',
    codeSnippet: {
      filename: 'docs/test_strategy_template.md',
      language: 'markdown',
      code: `# Quality Assurance Test Strategy (STP)
## 1. Scope & Objectives
- Validate Microservices resilience & API Contract adherence
- Ensure 0 Regression in critical checkout & auth journeys
- Enforce SLA: API Response < 200ms at P95

## 2. Test Execution Matrix
| Phase | Scope | Tool | Frequency |
|---|---|---|---|
| Smoke | Core Endpoints | Pytest + Postman | Every PR Merge |
| Regression | Full E2E & API | Playwright / Jenkins | Nightly Build |
| Performance | Stress & Spike | Gatling | Pre-Release |`
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'bsc',
    degree: 'B.Sc. Computer Science',
    institution: 'המכללה האקדמית להנדסה ע"ש סמי שמעון (SCE)',
    field: 'מדעי המחשב',
    details: 'תואר ראשון מקיף הכולל מבני נתונים, אלגוריתמים, תכנות מונחה עצמים, רשתות תקשורת ומסדי נתונים.',
    icon: 'GraduationCap'
  },
  {
    id: 'qa_elevation',
    degree: 'קורס QA & Test Automation (500 שעות)',
    institution: 'Elevation Academy',
    field: 'הנדסת בדיקות ואוטומציה',
    details: 'הכשרה מעשית מעמיקה בפיתוח אוטומציה ב-Python, ספריות Selenium/Playwright, בדיקות API, מתודולוגיות Agile ו-CI/CD.',
    icon: 'Terminal'
  },
  {
    id: 'cisco',
    degree: 'קורס רשתות תקשורת (Cisco Networking)',
    institution: 'Cisco Networking Academy',
    field: 'תקשורת נתונים ופרוטוקולים',
    details: 'לימוד מעמיק של ארכיטקטורת רשתות, מודל OSI/TCP-IP, פרוטוקולי ניתוב (Routing/Switching), VLANs וניתוח פאקטות.',
    icon: 'Network'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'istqb',
    title: 'ISTQB® Certified Tester',
    issuer: 'ISTQB - International Software Testing Qualifications Board',
    year: 'Certified (Foundation Level - CTFL)',
    credentialId: 'CTFL Certified',
    description: 'הסמכה בינלאומית רשמית במתודולוגיות בדיקות תוכנה, עיצוב בדיקות, ניהול סיכונים ומחזור חיי הפיתוח (SDLC/STLC).',
    icon: 'Award',
    skills: ['Test Design', 'Black-Box', 'White-Box', 'Defect Management', 'Risk Analysis']
  },
  {
    id: 'qa-auto-cert',
    title: 'QA Automation Engineer',
    issuer: 'Elevation',
    year: '500 Training Hours',
    description: 'הסמכה מקצועית באוטומציה: Python, Playwright, Selenium WebDriver, Pytest, API Testing, CI/CD ו-Allure.',
    icon: 'Code2',
    skills: ['Python', 'Playwright', 'Selenium', 'Pytest', 'API Automation', 'Jenkins']
  },
  {
    id: 'cisco-cert',
    title: 'Cisco Certified Networking Course',
    issuer: 'Cisco Academy',
    year: 'Certified Specialist',
    description: 'מומחיות בפרוטוקולי תקשורת רשת, ניתוח תעבורת נתונים, פתרון בעיות תקשורת ואימות תעבורה באמצעות Wireshark.',
    icon: 'Network',
    skills: ['TCP/IP', 'Wireshark', 'HTTP/HTTPS', 'SOAP', 'SNMP', 'Routing/Switching']
  }
];

export const MILITARY_BACKGROUND = {
  title: {
    he: 'שירות צבאי — נגד תקשורת',
    en: 'Military Service — Communications Specialist'
  },
  branch: {
    he: 'חיל הקשר והתקשוב, צה"ל (בה"ד 3)',
    en: 'C4I and Cyber Defense Directorate, IDF'
  },
  details: {
    he: 'אחריות על מערכות תקשורת מתקדמות, ניהול ותחזוקת תשתיות נתונים קריטיות בזמן אמת, עבודה תחת לחץ ומחויבות למצוינות טכנית ואמינות ללא פשרות.',
    en: 'Responsibility for advanced real-time communication systems, maintenance of critical data infrastructures, working under pressure with uncompromising technical excellence and reliability.'
  }
};
