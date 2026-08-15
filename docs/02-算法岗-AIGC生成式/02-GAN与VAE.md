# 🎭 02 · GAN 与 VAE（生成式基石）

> 虽被 Diffusion 抢了风头，GAN/VAE 仍是理解生成模型的基石，且在高保真/表征学习上仍有价值。

---

## 一、GAN（生成对抗网络）

**思想**：两个网络博弈——
- **生成器 G**：把随机噪声 $z$ 映射为「假样本」
- **判别器 D**：区分真样本 vs G 生成的假样本

**极小极大博弈**：

$$\min_G \max_D \mathbb{E}_{x\sim p_{data}}[\log D(x)] + \mathbb{E}_z[\log(1 - D(G(z)))]$$

训练动态：G 越逼真假样本，D 越难分辨，直到纳什均衡（D 输出 0.5）。

**代表**：DCGAN、StyleGAN（高保真人脸）、BigGAN（大类生成）、CycleGAN（无配对图像翻译）。

**优缺点**：
- ✅ 生成速度快（一次前向）、高保真
- ❌ 训练不稳定、易模式崩塌（mode collapse）、难评估

---

## 二、VAE（变分自编码器）

**思想**：学一个**隐变量分布** $q(z|x)$，编码器映射 $x\to$ 分布参数，解码器从 $z$ 重建 $x$。

**优化目标 = 重构损失 + KL 散度（ELBO）**：

$$\mathcal{L} = \mathbb{E}_{q(z|x)}[\log p(x|z)] - \text{KL}(q(z|x)\,\|\,p(z))$$

- KL 项约束隐空间接近标准正态（保证可采样生成）
- 重构项保证重建质量

**VQ-VAE / VQGAN**：把连续 latent 离散化为 codebook，是很多文生图/视频的 tokenizer 基础。

---

## 三、三大生成范式对比（面试必会）

| 维度 | GAN | VAE | Diffusion |
|------|-----|-----|-----------|
| 训练稳定性 | 差 | 好 | 好 |
| 生成速度 | 快（1步） | 快 | 慢（多步，可加速） |
| 样本质量 | 高（但易崩） | 中（偏模糊） | 高 |
| 模式覆盖 | 易 collapse | 好 | 好 |
| 可微可控性 | 中 | 好（有隐空间） | 中 |

> 本质判断：**Diffusion = 质量+稳定，GAN = 速度+保真，VAE = 表征+可控。** 现代系统常组合：VAE 做 tokenizer + Diffusion 做生成（Latent Diffusion）。

---

## 四、高频追问

**Q1：mode collapse 是什么？怎么缓解？**
> G 只生成少数几种样本骗过 D。缓解：minibatch discrimination、Wasserstein GAN（WGAN，用 Earth-Mover 距离 +  Lipschitz 约束）、谱归一化、多尺度。

**Q2：VAE 的 KL 项有什么用？**
> 逼隐空间规整到先验（标准正态），保证能从随机 z 采样生成；否则隐空间扭曲、无法插值生成。

**Q3：为什么 VQGAN 用离散 codebook？**
> 离散表征更易被自回归/扩散模型建模，且保留语义结构，是文生图「图像 tokenizer」的常见方案。

---

➡️ 下一步：[03-多模态与语音生成](03-多模态与语音生成.md)
