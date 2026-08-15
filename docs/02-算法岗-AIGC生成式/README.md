# 🎨 02 · 算法岗 · AIGC 生成式模型

> 大模型不止文本。本篇讲「让 AI 生成图像/视频/语音」的核心范式：Diffusion（主流）、GAN/VAE（基石）、多模态对齐、语音生成。

---

## 本篇导航

| 文档 | 核心内容 | 标签 |
|------|----------|------|
| [01-扩散模型 Diffusion](01-扩散模型Diffusion.md) | 前向/反向过程、DDPM、条件生成、加速采样 | 🟢 核心 |
| [02-GAN 与 VAE](02-GAN与VAE.md) | 对抗训练、变分下界、与 Diffusion 对比 | 🟢 核心 |
| [03-多模态与语音生成](03-多模态与语音生成.md) | VLM、文生图/视频、TTS/语音 | 🟡 工程 |

---

## 生成式范式总览（本质判断）

| 范式 | 思想 | 代表 | 何时用 |
|------|------|------|--------|
| **自回归（AR）** | 逐 token 建模 $P(x)$ | GPT、PixelCNN、SoundStream | 离散/序列数据 |
| **GAN** | 生成器 vs 判别器对抗 | StyleGAN、BigGAN | 高保真图像（训练不稳） |
| **VAE** | 学隐变量分布 + 重建 | VQ-VAE、VQGAN | 表征/离散化中间 |
| **Diffusion** | 逐步去噪建模 $P(x)$ | DDPM、Stable Diffusion | 当前图像/视频主流 |
| **Flow/Consistency** | 可逆变换/一步生成 | Rectified Flow、Consistency | 加速采样 |

> 本质：生成模型都在解「如何从简单分布（噪声）映射到复杂数据分布」。Diffusion 因**训练稳定、质量高**成为当下主流；GAN 仍有高保真优势但难训练。

---

➡️ 下一步：[01-扩散模型 Diffusion](01-扩散模型Diffusion.md)
