import os, json

ROOT = r"D:\Work\WorkBuddy AI\AIGC-Interview-Book\docs"
SKIP = {".vitepress", "assets", "node_modules", ".vitepress-dist"}

SECTION_TITLES = {
    "00-导论与学习哲学": "导论与学习哲学（本质 · 跨周期）",
    "01-算法岗-AIGC与LLM": "算法岗 · AIGC 与 LLM 大模型",
    "02-算法岗-AIGC生成式": "算法岗 · AIGC 生成式模型",
    "03-算法岗-AI-Agent": "算法岗 · AI Agent 智能体",
    "04-算法岗-传统深度学习": "算法岗 · 传统深度学习",
    "05-算法岗-前沿与具身": "算法岗 · 前沿与具身智能",
    "06-开发岗-编程语言与工程": "开发岗 · 编程语言与工程",
    "07-开发岗-前后端与全栈": "开发岗 · 前后端与全栈",
    "08-AI应用开发": "AI 应用开发",
    "09-面试实战": "面试实战",
    "10-职业发展与资源": "职业发展与资源",
    "面试真题集": "面试真题集",
}

def strip_prefix(name):
    # remove leading NN- prefix
    parts = name.split("-", 1)
    if parts[0].isdigit():
        return parts[1] if len(parts) > 1 else name
    return name

def item_text(fname):
    base = fname[:-3]  # drop .md
    if base in ("README", "index"):
        return None  # handled by section title
    return strip_prefix(base).replace("-", " ")

sidebar = []
rewrites = {":dir/README.md": ":dir/index.md"}

for d in sorted(os.listdir(ROOT)):
    full = os.path.join(ROOT, d)
    if not os.path.isdir(full) or d in SKIP:
        continue
    title = SECTION_TITLES.get(d, strip_prefix(d))
    md_files = [f for f in os.listdir(full) if f.endswith(".md")]
    md_files.sort()
    items = []
    
    # Check if README.md exists and add explicit rewrite just in case
    if "README.md" in md_files:
        rewrites[f"{d}/README.md"] = f"{d}/index.md"
        
    for f in md_files:
        if f in ("README.md", "index.md"):
            link = f"/{d}/"
            items.append({"text": title, "link": link})
        else:
            link = f"/{d}/{f[:-3]}"
            t = item_text(f)
            if t:
                items.append({"text": t, "link": link})
    sidebar.append({"text": title, "items": items, "collapsed": True})

nav = [
    {
        "text": "🧭 导论与哲学",
        "link": "/00-导论与学习哲学/",
        "activeMatch": "^/00-导论与学习哲学/"
    },
    {
        "text": "🤖 算法岗",
        "activeMatch": "^/(01-算法岗-AIGC与LLM|02-算法岗-AIGC生成式|03-算法岗-AI-Agent|04-算法岗-传统深度学习|05-算法岗-前沿与具身)/",
        "items": [
            {"text": "AIGC 与 LLM 大模型", "link": "/01-算法岗-AIGC与LLM/"},
            {"text": "AIGC 生成式模型", "link": "/02-算法岗-AIGC生成式/"},
            {"text": "AI Agent 智能体", "link": "/03-算法岗-AI-Agent/"},
            {"text": "传统深度学习", "link": "/04-算法岗-传统深度学习/"},
            {"text": "前沿与具身智能", "link": "/05-算法岗-前沿与具身/"}
        ]
    },
    {
        "text": "💻 开发岗",
        "activeMatch": "^/(06-开发岗-编程语言与工程|07-开发岗-前后端与全栈|08-AI应用开发)/",
        "items": [
            {"text": "编程语言与工程", "link": "/06-开发岗-编程语言与工程/"},
            {"text": "前后端与全栈", "link": "/07-开发岗-前后端与全栈/"},
            {"text": "AI 应用开发", "link": "/08-AI应用开发/"}
        ]
    },
    {
        "text": "🎯 求职与生涯",
        "activeMatch": "^/(09-面试实战|10-职业发展与资源)/",
        "items": [
            {"text": "面试实战指南", "link": "/09-面试实战/"},
            {"text": "职业发展与资源", "link": "/10-职业发展与资源/"}
        ]
    },
    {
        "text": "📋 面试真题集",
        "link": "/面试真题集/",
        "activeMatch": "^/面试真题集/"
    }
]

config = f"""import {{ defineConfig }} from 'vitepress'

// 由 gen_config.py 自动生成，需调整标题映射时改脚本后重跑
export default defineConfig({{
  title: 'AIGC 面试求职秘籍',
  description: 'AIGC/LLM/AI Agent 算法岗与开发岗的面试、研究、职业生涯成长平台',
  base: '/AIGC-Interview-Book/',
  lang: 'zh-CN',
  cleanUrls: true,
  rewrites: {json.dumps(rewrites, ensure_ascii=False, indent=4)},
  themeConfig: {{
    nav: {json.dumps(nav, ensure_ascii=False, indent=6)},
    sidebar: {json.dumps(sidebar, ensure_ascii=False, indent=6)},
    socialLinks: [
      {{ icon: 'github', link: 'https://github.com/Alexander-blue/AIGC-Interview-Book' }}
    ],
    docFooter: {{ prev: false, next: false }},
    outline: {{ label: '目录' }},
    lastUpdated: {{ text: '最后更新' }},
    search: {{ provider: 'local' }},
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '导航',
    darkModeSwitchLabel: '主题',
  }}
}})
"""

with open(os.path.join(ROOT, ".vitepress", "config.mts"), "w", encoding="utf-8") as fh:
    fh.write(config)

print("config.mts generated")
print("sections:", len(sidebar))
print("total items:", sum(len(s["items"]) for s in sidebar))


