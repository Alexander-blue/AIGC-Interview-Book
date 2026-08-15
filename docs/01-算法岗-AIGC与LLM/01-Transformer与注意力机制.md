# 🧠 01 · Transformer 与注意力机制

> **算法岗第一关。** 80% 的大模型面试都从这里开始。目标：能默写结构、能写公式、能算复杂度、能讲清为什么。

---

## 一、为什么要有 Transformer？（第一性原理）

RNN/LSTM 的问题：**时序依赖 → 无法并行 + 长程依赖梯度消失**。

Transformer 的核心思想：**用「注意力」直接建模任意两个位置的关系，抛弃循环，全部并行。**

> 本质判断：Transformer 的跨周期价值 = 并行训练 + 长程依赖 + 可扩展（scaling）三者统一。

---

## 二、自注意力（Self-Attention）公式

给定输入 $X \in \mathbb{R}^{n\times d}$，线性投影得到 Q, K, V：

$$Q = XW_Q,\quad K = XW_K,\quad V = XW_V$$

$$\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V$$

- $QK^\top$：计算每对 token 的「相关性分数」
- $\sqrt{d_k}$：缩放，防止点积过大导致 softmax 梯度消失
- softmax：归一化为注意力权重
- 乘 V：按权重聚合值向量

**复杂度**：$O(n^2 d)$（n 序列长度，d 维度）。$n^2$ 是自注意力的最大瓶颈 → 长上下文优化的根源。

---

## 三、Multi-Head Attention（MHA）

把 Q/K/V 分成 $h$ 个头，每个头在不同子空间算注意力，再拼接：

$$\text{MultiHead}(Q,K,V) = \text{Concat}(head_1,\dots,head_h)W_O$$

每个头维度 $d_k = d/h$。多头让模型同时关注不同语义关系（语法/指代/语义）。

**手撕要点**：MHA 输出维度 = 输入维度 $d$（通过 $W_O$ 投影回来），便于残差连接。

---

## 四、整体结构（Encoder-Decoder）

```
输入 → Embedding + 位置编码
  → [多头自注意力 + Add&Norm + 前馈 + Add&Norm] × N 层
  → 输出
```

- **Encoder**：双向自注意力（看全部上下文），用于理解（如 BERT）。
- **Decoder**：**带掩码（Mask）的自注意力**（只看左侧），用于生成（如 GPT）。
- **Cross-Attention**：Decoder 用 Q 来自自身、K/V 来自 Encoder，用于 seq2seq。

> GPT 系只用 Decoder；BERT 只用 Encoder；T5 用完整 Enc-Dec。这是「理解型」vs「生成型」架构的根本分野。

---

## 五、为什么用残差 + LayerNorm？

- 残差连接：缓解深层网络梯度消失，让信息「直连」。
- Pre-LN vs Post-LN：现代大模型多用 **Pre-LN**（层归一化在注意力之前），训练更稳定。

---

## 六、高频追问（模拟面试）

**Q1：为什么缩放因子是 $\sqrt{d_k}$ 而不是别的？**
> $d_k$ 越大，QK 点积方差越大，softmax 进入饱和区梯度小。除以 $\sqrt{d_k}$ 使方差归一为 1，保持梯度健康。这是经验+理论均衡，不是唯一解但足够好。

**Q2：自注意力和交叉注意力的区别？**
> 自注意力 Q/K/V 都来自同一序列；交叉注意力 Q 来自解码端、K/V 来自编码端。

**Q3：注意力复杂度 $O(n^2)$ 的瓶颈怎么解？**
> 线性注意力（近似）、稀疏注意力（Longformer/BigBird）、FlashAttention（IO 感知减少显存）、MQA/GQA（减少 KV 头数）、稀疏专家（MoE）。

**Q4：QKV 为什么要分开投影，不能直接用 X？**
> 分开投影让模型学习「查询视角」「被查视角」「聚合值」三种不同表示，表达能力远强于共享。

**Q5：Batch 内不同长度序列怎么处理？**
> Padding + Attention Mask，把 padding 位置分数置 $-\infty$，softmax 后权重为 0。

---

## 七、动手清单

- [ ] 用 NumPy/PyTorch 手写一个 Single-Head Attention（含 mask）
- [ ] 实现 MHA 并验证输出维度
- [ ] 用 `torch.nn.functional.scaled_dot_product_attention` 对比你的实现
- [ ] 计算 n=4096, d=4096 时一次注意力的 FLOPs 与显存（理解长上下文代价）

---

➡️ 下一步：[02-位置编码与归一化](02-位置编码与归一化.md)
