import { defineConfig } from 'vitepress'

// 由 gen_config.py 自动生成，需调整标题映射时改脚本后重跑
export default defineConfig({
      title: 'AIGC 面试求职秘籍',
      description: 'AIGC/LLM/AI Agent 算法岗与开发岗的面试、研究、职业生涯成长平台',
      base: '/AIGC-Interview-Book/',
      lang: 'zh-CN',
      themeConfig: {
            nav: [
                  {
                        "text": "导论与学习哲学（本质 · 跨周期）",
                        "link": "/00-导论与学习哲学/"
                  },
                  {
                        "text": "算法岗 · AIGC 与 LLM 大模型",
                        "link": "/01-算法岗-AIGC与LLM/"
                  },
                  {
                        "text": "算法岗 · AIGC 生成式模型",
                        "link": "/02-算法岗-AIGC生成式/"
                  },
                  {
                        "text": "算法岗 · AI Agent 智能体",
                        "link": "/03-算法岗-AI-Agent/"
                  },
                  {
                        "text": "算法岗 · 传统深度学习",
                        "link": "/04-算法岗-传统深度学习/"
                  },
                  {
                        "text": "算法岗 · 前沿与具身智能",
                        "link": "/05-算法岗-前沿与具身/"
                  },
                  {
                        "text": "开发岗 · 编程语言与工程",
                        "link": "/06-开发岗-编程语言与工程/"
                  },
                  {
                        "text": "开发岗 · 前后端与全栈",
                        "link": "/07-开发岗-前后端与全栈/"
                  },
                  {
                        "text": "AI 应用开发",
                        "link": "/08-AI应用开发/"
                  },
                  {
                        "text": "面试实战",
                        "link": "/09-面试实战/"
                  },
                  {
                        "text": "职业发展与资源",
                        "link": "/10-职业发展与资源/"
                  },
                  {
                        "text": "面试真题集",
                        "link": "/面试真题集/"
                  }
            ],
            sidebar: [
                  {
                        "text": "导论与学习哲学（本质 · 跨周期）",
                        "items": [
                              {
                                    "text": "AI技术本质判断",
                                    "link": "/00-导论与学习哲学/01-AI技术本质判断/"
                              },
                              {
                                    "text": "跨周期价值技术地图",
                                    "link": "/00-导论与学习哲学/02-跨周期价值技术地图/"
                              },
                              {
                                    "text": "学习路线总览",
                                    "link": "/00-导论与学习哲学/03-学习路线总览/"
                              },
                              {
                                    "text": "导论与学习哲学（本质 · 跨周期）",
                                    "link": "/00-导论与学习哲学/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "算法岗 · AIGC 与 LLM 大模型",
                        "items": [
                              {
                                    "text": "Transformer与注意力机制",
                                    "link": "/01-算法岗-AIGC与LLM/01-Transformer与注意力机制/"
                              },
                              {
                                    "text": "位置编码与归一化",
                                    "link": "/01-算法岗-AIGC与LLM/02-位置编码与归一化/"
                              },
                              {
                                    "text": "预训练与ScalingLaw",
                                    "link": "/01-算法岗-AIGC与LLM/03-预训练与ScalingLaw/"
                              },
                              {
                                    "text": "微调技术",
                                    "link": "/01-算法岗-AIGC与LLM/04-微调技术/"
                              },
                              {
                                    "text": "对齐技术",
                                    "link": "/01-算法岗-AIGC与LLM/05-对齐技术/"
                              },
                              {
                                    "text": "解码与推理优化",
                                    "link": "/01-算法岗-AIGC与LLM/06-解码与推理优化/"
                              },
                              {
                                    "text": "长上下文与MoE",
                                    "link": "/01-算法岗-AIGC与LLM/07-长上下文与MoE/"
                              },
                              {
                                    "text": "主流模型专题",
                                    "link": "/01-算法岗-AIGC与LLM/08-主流模型专题/"
                              },
                              {
                                    "text": "算法岗 · AIGC 与 LLM 大模型",
                                    "link": "/01-算法岗-AIGC与LLM/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "算法岗 · AIGC 生成式模型",
                        "items": [
                              {
                                    "text": "扩散模型Diffusion",
                                    "link": "/02-算法岗-AIGC生成式/01-扩散模型Diffusion/"
                              },
                              {
                                    "text": "GAN与VAE",
                                    "link": "/02-算法岗-AIGC生成式/02-GAN与VAE/"
                              },
                              {
                                    "text": "多模态与语音生成",
                                    "link": "/02-算法岗-AIGC生成式/03-多模态与语音生成/"
                              },
                              {
                                    "text": "算法岗 · AIGC 生成式模型",
                                    "link": "/02-算法岗-AIGC生成式/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "算法岗 · AI Agent 智能体",
                        "items": [
                              {
                                    "text": "Agent架构范式",
                                    "link": "/03-算法岗-AI-Agent/01-Agent架构范式/"
                              },
                              {
                                    "text": "RAG检索增强",
                                    "link": "/03-算法岗-AI-Agent/02-RAG检索增强/"
                              },
                              {
                                    "text": "记忆系统与工具调用",
                                    "link": "/03-算法岗-AI-Agent/03-记忆系统与工具调用/"
                              },
                              {
                                    "text": "MCP与多Agent",
                                    "link": "/03-算法岗-AI-Agent/04-MCP与多Agent/"
                              },
                              {
                                    "text": "Agent工程化与评估",
                                    "link": "/03-算法岗-AI-Agent/05-Agent工程化与评估/"
                              },
                              {
                                    "text": "算法岗 · AI Agent 智能体",
                                    "link": "/03-算法岗-AI-Agent/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "算法岗 · 传统深度学习",
                        "items": [
                              {
                                    "text": "机器学习基础",
                                    "link": "/04-算法岗-传统深度学习/01-机器学习基础/"
                              },
                              {
                                    "text": "计算机视觉CV",
                                    "link": "/04-算法岗-传统深度学习/02-计算机视觉CV/"
                              },
                              {
                                    "text": "自然语言处理NLP",
                                    "link": "/04-算法岗-传统深度学习/03-自然语言处理NLP/"
                              },
                              {
                                    "text": "强化学习RL",
                                    "link": "/04-算法岗-传统深度学习/04-强化学习RL/"
                              },
                              {
                                    "text": "大数据挖掘",
                                    "link": "/04-算法岗-传统深度学习/05-大数据挖掘/"
                              },
                              {
                                    "text": "算法岗 · 传统深度学习",
                                    "link": "/04-算法岗-传统深度学习/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "算法岗 · 前沿与具身智能",
                        "items": [
                              {
                                    "text": "具身智能",
                                    "link": "/05-算法岗-前沿与具身/01-具身智能/"
                              },
                              {
                                    "text": "自动驾驶",
                                    "link": "/05-算法岗-前沿与具身/02-自动驾驶/"
                              },
                              {
                                    "text": "世界模型",
                                    "link": "/05-算法岗-前沿与具身/03-世界模型/"
                              },
                              {
                                    "text": "AGI与前沿思考",
                                    "link": "/05-算法岗-前沿与具身/04-AGI与前沿思考/"
                              },
                              {
                                    "text": "算法岗 · 前沿与具身智能",
                                    "link": "/05-算法岗-前沿与具身/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "开发岗 · 编程语言与工程",
                        "items": [
                              {
                                    "text": "Python",
                                    "link": "/06-开发岗-编程语言与工程/01-Python/"
                              },
                              {
                                    "text": "Java",
                                    "link": "/06-开发岗-编程语言与工程/02-Java/"
                              },
                              {
                                    "text": "C Cpp",
                                    "link": "/06-开发岗-编程语言与工程/03-C-Cpp/"
                              },
                              {
                                    "text": "Go",
                                    "link": "/06-开发岗-编程语言与工程/04-Go/"
                              },
                              {
                                    "text": "嵌入式",
                                    "link": "/06-开发岗-编程语言与工程/05-嵌入式/"
                              },
                              {
                                    "text": "开发岗 · 编程语言与工程",
                                    "link": "/06-开发岗-编程语言与工程/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "开发岗 · 前后端与全栈",
                        "items": [
                              {
                                    "text": "前端",
                                    "link": "/07-开发岗-前后端与全栈/01-前端/"
                              },
                              {
                                    "text": "后端",
                                    "link": "/07-开发岗-前后端与全栈/02-后端/"
                              },
                              {
                                    "text": "测试",
                                    "link": "/07-开发岗-前后端与全栈/03-测试/"
                              },
                              {
                                    "text": "运维与DevOps",
                                    "link": "/07-开发岗-前后端与全栈/04-运维与DevOps/"
                              },
                              {
                                    "text": "设计售前FDE",
                                    "link": "/07-开发岗-前后端与全栈/05-设计售前FDE/"
                              },
                              {
                                    "text": "开发岗 · 前后端与全栈",
                                    "link": "/07-开发岗-前后端与全栈/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "AI 应用开发",
                        "items": [
                              {
                                    "text": "AI应用架构",
                                    "link": "/08-AI应用开发/01-AI应用架构/"
                              },
                              {
                                    "text": "向量数据库与RAG工程",
                                    "link": "/08-AI应用开发/02-向量数据库与RAG工程/"
                              },
                              {
                                    "text": "Agent工程实践",
                                    "link": "/08-AI应用开发/03-Agent工程实践/"
                              },
                              {
                                    "text": "MLOps与LLMOps",
                                    "link": "/08-AI应用开发/04-MLOps与LLMOps/"
                              },
                              {
                                    "text": "商业化落地",
                                    "link": "/08-AI应用开发/05-商业化落地/"
                              },
                              {
                                    "text": "AI 应用开发",
                                    "link": "/08-AI应用开发/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "面试实战",
                        "items": [
                              {
                                    "text": "简历撰写",
                                    "link": "/09-面试实战/01-简历撰写/"
                              },
                              {
                                    "text": "面试流程与技巧",
                                    "link": "/09-面试实战/02-面试流程与技巧/"
                              },
                              {
                                    "text": "高频手撕代码题",
                                    "link": "/09-面试实战/03-高频手撕代码题/"
                              },
                              {
                                    "text": "STAR面试稿",
                                    "link": "/09-面试实战/04-STAR面试稿/"
                              },
                              {
                                    "text": "薪资谈判与Offer选择",
                                    "link": "/09-面试实战/05-薪资谈判与Offer选择/"
                              },
                              {
                                    "text": "面试实战",
                                    "link": "/09-面试实战/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "职业发展与资源",
                        "items": [
                              {
                                    "text": "职业生涯规划",
                                    "link": "/10-职业发展与资源/01-职业生涯规划/"
                              },
                              {
                                    "text": "大厂与AI公司指南",
                                    "link": "/10-职业发展与资源/02-大厂与AI公司指南/"
                              },
                              {
                                    "text": "内推与招聘渠道",
                                    "link": "/10-职业发展与资源/03-内推与招聘渠道/"
                              },
                              {
                                    "text": "刷题与学习资源",
                                    "link": "/10-职业发展与资源/04-刷题与学习资源/"
                              },
                              {
                                    "text": "薪资爆料与行业洞察",
                                    "link": "/10-职业发展与资源/05-薪资爆料与行业洞察/"
                              },
                              {
                                    "text": "职业发展与资源",
                                    "link": "/10-职业发展与资源/"
                              }
                        ],
                        "collapsed": true
                  },
                  {
                        "text": "面试真题集",
                        "items": [
                              {
                                    "text": "Agent岗真题",
                                    "link": "/面试真题集/Agent岗真题/"
                              },
                              {
                                    "text": "面试真题集",
                                    "link": "/面试真题集/"
                              },
                              {
                                    "text": "开发岗真题",
                                    "link": "/面试真题集/开发岗真题/"
                              },
                              {
                                    "text": "算法岗真题",
                                    "link": "/面试真题集/算法岗真题/"
                              }
                        ],
                        "collapsed": true
                  }
            ],
            socialLinks: [
                  { icon: 'github', link: 'https://github.com/Alexander-blue/AIGC-Interview-Book' }
            ],
            docFooter: { prev: false, next: false },
            outline: { label: '目录' },
            lastUpdated: { text: '最后更新' },
            search: { provider: 'local' },
            returnToTopLabel: '回到顶部',
            sidebarMenuLabel: '导航',
            darkModeSwitchLabel: '主题',
      }
})
