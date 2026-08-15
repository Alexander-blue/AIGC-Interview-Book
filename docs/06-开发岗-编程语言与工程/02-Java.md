# ☕ 02 · Java（AI 平台后端主力）

> 很多 AI 公司的「平台/中台/业务后端」用 Java（Spring 生态成熟、稳定、招人易）。AI 应用 Java 岗需求大。

---

## 一、核心考点
- **JVM 内存模型与 GC**：堆/栈/方法区；GC 算法（G1/ZGC）；调优（OOM 排查、停顿优化）。
- **并发**：synchronized、volatile、JUC（线程池、锁、并发容器）、线程安全集合。
- **JMM 与可见性**：happens-before、指令重排。
- **集合框架**：HashMap 原理（红黑树）、ConcurrentHashMap。
- **JVM 调优**：内存参数、GC 日志、火焰图。
- **Spring 生态**：IoC/AOP、Spring Boot、事务、MyBatis。

## 二、AI 场景结合点
- **AI 平台后端**：模型管理、Prompt 模板、评测任务调度、标注系统。
- **推理服务网关**：封装 LLM API、限流、缓存、成本统计、流式转发（SSE/WebSocket）。
- **RAG 后端**：文档 ETL、向量检索编排、权限隔离。
- 框架：Spring AI（官方 AI 集成）、LangChain4j。

## 三、高频追问
**Q1：HashMap 线程安全吗？并发怎么办？**
> 不安全。并发用 ConcurrentHashMap（分段/CAS + synchronized 细粒度锁）或 Collections.synchronizedMap。

**Q2：G1 和 ZGC 区别？**
> G1 分区域、可预测停顿；ZGC 超低停顿（<10ms）、大堆友好，适合对延迟敏感的 AI 服务。

**Q3：Java 怎么做流式 LLM 输出？**
> 用 SSE（Server-Sent Events）或 WebSocket 把 token 实时推前端；后端用 WebClient 等响应式 client 消费上游流式响应并转发。

---

➡️ 下一步：[03-C-Cpp](03-C-Cpp.md)
