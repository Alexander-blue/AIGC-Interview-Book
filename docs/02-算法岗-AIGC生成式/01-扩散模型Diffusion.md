# 🌫️ 01 · 扩散模型 Diffusion（⭐ 必考）

> 文生图（Stable Diffusion/Midjourney）、视频生成（Sora）的底层。核心思想优雅，面试常让推导。

---

## 一、第一性原理

**核心问题**：如何从随机高斯噪声 $x_T \sim \mathcal{N}(0,I)$ 生成真实数据 $x_0$？

**思路**：定义两个过程——
- **前向过程（加噪）**：逐步往数据加高斯噪声，T 步后变成纯噪声。
- **反向过程（去噪）**：训练神经网络预测「加的噪声」，逐步去噪还原数据。

---

## 二、前向过程（固定、无参数）

$$q(x_t|x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t}x_{t-1}, \beta_t I)$$

$\beta_t$ 是预设的方差 schedule。重要性质：**任意 $x_t$ 可由 $x_0$ 一步采样**（重参数化）：

$$x_t = \sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\epsilon,\quad \epsilon\sim\mathcal{N}(0,I)$$

$\alpha_t = 1-\beta_t,\ \bar\alpha_t = \prod_{s=1}^t \alpha_s$。

---

## 三、反向过程（学习去噪）

训练网络 $\epsilon_\theta(x_t, t)$ 预测加入的噪声 $\epsilon$。损失极简：

$$\mathcal{L}_{simple} = \mathbb{E}_{t,x_0,\epsilon}\left[\|\epsilon - \epsilon_\theta(x_t,t)\|^2\right]$$

**采样**：从 $x_T\sim\mathcal{N}(0,I)$ 出发，反复用网络预测噪声并更新（DDIM/DDPM 采样器），T 步后得到 $x_0$。

---

## 四、条件生成（文生图的关键）

在噪声预测时额外输入条件 $c$（文本 embedding）：

$$\epsilon_\theta(x_t, t, c)$$

- **Classifier-Free Guidance（CFG）**：同时训「有条件」和「无条件」模型，推理时插值放大条件信号：

$$\tilde\epsilon = \epsilon_{uncond} + w\,(\epsilon_{cond} - \epsilon_{uncond})$$

$w$ 是引导强度，越大越贴合提示词但多样性降。

---

## 五、Latent Diffusion（Stable Diffusion 的核心）

直接在**压缩的潜空间**（VAE 编码后的 latent）上做扩散，而非像素空间：
- 先用 VAE 把图像压到低维 latent
- 在 latent 上跑 U-Net 去噪
- 最后 VAE 解码回图像
- **好处**：省算力、质量好；文本条件通过 Cross-Attention 注入 U-Net

---

## 六、加速采样

- **DDIM**：确定性、少步采样（50→20 步）
- **Consistency Models / LCM**：一步/少步生成
- **Rectified Flow**：把扩散看成直线流，简化路径

---

## 七、高频追问

**Q1：Diffusion 相比 GAN 好在哪？**
> 训练稳定（单纯回归噪声，无对抗博弈）、模式覆盖好（少 mode collapse）、质量高。GAN 训练易崩、易模式崩塌。

**Q2：为什么 Latent Diffusion 不用像素空间？**
> 像素空间计算量巨大；latent 空间维度低一个量级，速度和显存大幅优化，质量几乎无损。

**Q3：CFG 的 w 太大有什么问题？**
> 过饱和、伪影、多样性骤降、可能偏离真实；太小则忽略提示词。需调参。

---

➡️ 下一步：[02-GAN与VAE](02-GAN与VAE.md)
