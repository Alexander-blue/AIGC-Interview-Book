# 🐍 01 · Python（AI 开发第一语言）

> AI 算法/应用开发几乎默认 Python。面试考「底层理解 + 工程能力」，不只调包。

---

## 一、核心考点
- **GIL（全局解释器锁）**：同一进程内同刻仅一个线程执行字节码 → CPU 密集任务多线程无效，用多进程/异步/C 扩展。
- **可变对象陷阱**：默认参数用可变对象（list/dict）导致的共享状态 bug。
- **深拷贝/浅拷贝**：引用语义易被忽视。
- **装饰器**：函数包装，用于日志/缓存/鉴权。
- **生成器/yield**：惰性计算，省内存（处理大模型流式输出常用）。
- **类型标注（Type Hint）**：大型项目必备（mypy/pydantic）。
- **异步 asyncio**：高并发 IO（LLM 流式调用、批量请求）。

## 二、性能与工程
- 性能瓶颈用 Cython / Numba / 调 C++ 扩展
- 并发：IO 密集用 asyncio；CPU 密集用 multiprocessing
- 虚拟环境（venv/conda）、依赖管理（poetry/uv）
- 代码质量：lint（ruff/flake8）、format（black）、测试（pytest）

## 三、AI 生态结合
- 推理：OpenAI/Anthropic SDK、LangChain/LlamaIndex（谨慎用重框架）
- 模型：transformers、vLLM（推理服务）、torch
- 数据：numpy/pandas、向量库 client

## 四、高频追问
**Q1：Python 怎么真正并行？**
> 用 multiprocessing（绕过 GIL，多进程各一解释器）或把热点用 C/C++/Rust 扩展；IO 并发用 asyncio。

**Q2：asyncio 适合什么场景？**
> 高并发 IO（如同时向 LLM 发几百个请求、流式输出），但 CPU 密集任务仍被 GIL 限制。

**Q3：大项目怎么保证质量？**
> 类型标注 + 严格 lint/format + 单测/集成测试 + CI + code review + pydantic 做数据校验。

---

➡️ 下一步：[02-Java](02-Java.md)
