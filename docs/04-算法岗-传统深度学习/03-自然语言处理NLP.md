# 💬 03 · 自然语言处理 NLP

> 大模型之前，NLP 是怎么做的；这些基础仍是理解 LLM 的前提。

---

## 一、词表示演进
- **One-hot**：稀疏、无语义
- **词袋/TF-IDF**：统计特征
- **Word2Vec / GloVe**：稠密向量，捕捉语义相似（但一词多义难）
- **ELMo / BERT 上下文向量**：一词一向量随上下文变

## 二、序列建模
- **RNN**：时序建模，但梯度消失/难并行
- **LSTM/GRU**：门控缓解长程依赖
- **Seq2Seq + Attention**（Bahdanau）：解码时关注编码端相关位置 —— **Transformer 注意力的前身**
- **CRF**：序列标注（NER/分词）常用

## 三、预训练时代（见 01-LLM 详述）
- BERT（MLM，理解）、GPT（CLM，生成）、ELMo 等
- 本篇只补「大模型之前」的基础，大模型细节见 `01-算法岗-AIGC与LLM`

## 四、经典 NLP 任务
- 分类（情感）、序列标注（NER/分词）、抽取（关系/事件）、生成（翻译/摘要）、匹配（检索/问答）

## 五、高频追问
**Q1：Word2Vec 和 BERT  embedding 本质区别？**
> Word2Vec 是静态（一词一向量）；BERT 是上下文动态（同词不同上下文向量不同），更好处理多义。

**Q2：Attention 在 Transformer 之前就有吗？**
> 有。机器翻译的 Bahdanau Attention 已用于 Seq2Seq，Transformer 把它发扬为唯一机制并去掉 RNN。

**Q3：为什么 RNN 难训练长序列？**
> 时序依赖导致梯度随时间连乘，易消失/爆炸；且无法并行。Transformer 用自注意力一次性建模全局依赖并并行。

---

➡️ 下一步：[04-强化学习 RL](04-强化学习RL.md)
