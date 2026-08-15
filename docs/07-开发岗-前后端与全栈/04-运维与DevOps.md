# 🚀 04 · 运维与 DevOps（含 LLMOps 基础设施）

> 把 AI 应用稳定跑起来、能扩容、可观测、控成本。AI 运维比传统多一层「模型与推理」复杂度。

---

## 一、核心考点（通用）
- **CI/CD**：GitLab CI / GitHub Actions / Jenkins，自动化构建测试部署。
- **容器化**：Docker、镜像优化；编排 K8s（Pod/Deployment/HPA）。
- **可观测**：日志（ELK）、监控（Prometheus/Grafana）、链路追踪（OpenTelemetry）。
- **基础设施即代码**：Terraform / Helm。

## 二、AI 专属运维（LLMOps）
- **模型服务部署**：vLLM/TensorRT-LLM 推理服务、GPU 资源调度、自动扩缩容。
- **GPU 运维**：显存监控、多卡调度、利用率优化、成本（按卡时计费）。
- **向量库运维**：Milvus/PGVector 集群、索引维护、备份。
- **Prompt/模型版本管理**：Registry、灰度、回滚。
- **成本可观测**：token 消耗、调用分布、异常高成本告警。

## 三、高频追问
**Q1：推理服务怎么扩缩容？**
> 按并发/GPU 利用率自动扩 Pod；用连续批处理提吞吐；显存是瓶颈，需监控 KV Cache 与并发；模型大时用多副本 + 负载均衡。

**Q2：AI 应用的可观测比普通应用多了什么？**
> 多了模型层指标：token 用量、延迟分解（首 token/总耗时）、幻觉率、评测分、Prompt 版本、降级次数、成本。这些直接关系体验与花费。

---

➡️ 下一步：[05-设计售前FDE](05-设计售前FDE.md)
